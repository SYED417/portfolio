import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader2, AlertCircle, RefreshCw } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";

const BUCKET = "resume";
const FILE = "resume.pdf";

const Resume = () => {
  const { user } = useAuth();
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Revoke previous blob URL on unmount or when a new one is created
  useEffect(() => {
    return () => {
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
  }, [blobUrl]);

  const fetchResume = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // First try loading from public folder (place resume.pdf in /public)
      try {
        const localResp = await fetch("/resume.pdf", { method: "HEAD" });
        if (localResp.ok) {
          setBlobUrl("/resume.pdf");
          setLoading(false);
          return;
        }
      } catch {
        // Not found locally, fall through to Supabase
      }

      // Second: try Supabase public URL (works if bucket has public access)
      try {
        const { data: publicUrlData } = supabase.storage
          .from(BUCKET)
          .getPublicUrl(FILE);

        if (publicUrlData?.publicUrl) {
          const headResp = await fetch(publicUrlData.publicUrl, {
            method: "HEAD",
          });
          if (headResp.ok) {
            setBlobUrl(publicUrlData.publicUrl);
            setLoading(false);
            return;
          }
        }
      } catch {
        // Public URL didn't work, try authenticated download
      }

      // Last resort: download via authenticated storage API
      const { data, error: storageError } = await supabase.storage
        .from(BUCKET)
        .download(FILE);

      if (storageError) {
        const msg = storageError.message;
        if (msg.includes("Not found") || msg.includes("Object not found")) {
          setError(
            "Resume PDF not found. Fix: either place resume.pdf in the project's public/ folder, or upload it to Supabase Dashboard → Storage → resume bucket.",
          );
        } else if (
          msg.includes("Invalid API key") ||
          msg.includes("Invalid JWT") ||
          msg.includes("Unauthorized")
        ) {
          setError(
            "Supabase API key is invalid. Please update VITE_SUPABASE_ANON_KEY in your .env file with the correct anon/public key from Supabase Dashboard → Settings → API.",
          );
        } else {
          setError(msg);
        }
        return;
      }

      if (!data) {
        setError("No data received from storage.");
        return;
      }

      // Create a blob URL so the iframe can render it (same-origin)
      const url = URL.createObjectURL(data);
      setBlobUrl(url);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes("Invalid API key") || msg.includes("Invalid JWT")) {
        setError(
          "Supabase API key is invalid. Update VITE_SUPABASE_ANON_KEY in your .env file with the correct anon/public key from Supabase Dashboard → Settings → API.",
        );
      } else {
        setError(msg || "Unknown error fetching resume.");
      }
    } finally {
      setLoading(false);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (user) {
      fetchResume();
    } else {
      // If somehow rendered without user, don't stay in loading forever
      setLoading(false);
    }
  }, [user, fetchResume]);

  const handleDownload = () => {
    if (!blobUrl) return;
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = "Syed_Sulaiman_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Loading state
  if (loading) {
    return (
      <section className="py-20 bg-gradient-sky">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
            <p className="text-muted-foreground">Loading resume…</p>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="py-20 bg-gradient-sky">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center">
            <AlertCircle className="h-10 w-10 text-destructive" />
            <p className="text-foreground font-medium">Unable to load resume</p>
            <p className="text-sm text-muted-foreground max-w-md">{error}</p>
            <div className="flex gap-3 mt-2">
              <Button onClick={fetchResume} variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Success state — show PDF
  return (
    <section className="py-20 bg-gradient-sky">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Heading + Download */}
          <div className="text-center mb-8 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              My Resume
            </h2>
            {blobUrl && (
              <Button
                onClick={handleDownload}
                className="bg-gradient-aviation hover:shadow-glow transition-all duration-300"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
            )}
          </div>

          {/* PDF Viewer */}
          {blobUrl && (
            <div className="rounded-lg border border-border/50 overflow-hidden shadow-card">
              <iframe
                src={blobUrl}
                title="Resume PDF"
                className="w-full bg-white"
                style={{ height: "850px", border: "none", borderRadius: "8px" }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;
