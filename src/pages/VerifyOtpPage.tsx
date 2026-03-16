import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";
import { Phone, Loader2, ArrowLeft, CheckCircle2 } from "lucide-react";

const VerifyOtpPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string })?.from || "/";

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [step, setStep] = useState<"phone" | "otp" | "success">("phone");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const validatePhone = (value: string) => {
    const cleaned = value.replace(/\s/g, "");
    return /^\+\d{10,15}$/.test(cleaned);
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validatePhone(phone)) {
      setError(
        "Please enter a valid phone number with country code (e.g., +91 8073272474)",
      );
      return;
    }

    setLoading(true);
    const { error: otpError } = await supabase.auth.signInWithOtp({
      phone: phone.replace(/\s/g, ""),
    });
    setLoading(false);

    if (otpError) {
      setError(otpError.message);
    } else {
      setStep("otp");
      setCountdown(60);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value[value.length - 1];
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const token = otp.join("");
    if (token.length !== 6) {
      setError("Please enter the complete 6-digit code");
      return;
    }

    setLoading(true);
    const { error: verifyError } = await supabase.auth.verifyOtp({
      phone: phone.replace(/\s/g, ""),
      token,
      type: "sms",
    });
    setLoading(false);

    if (verifyError) {
      setError(verifyError.message);
    } else {
      setStep("success");
      setTimeout(() => navigate(from, { replace: true }), 2000);
    }
  };

  const handleResendOtp = async () => {
    setError("");
    setOtp(["", "", "", "", "", ""]);
    setLoading(true);
    const { error: resendError } = await supabase.auth.signInWithOtp({
      phone: phone.replace(/\s/g, ""),
    });
    setLoading(false);

    if (resendError) {
      setError(resendError.message);
    } else {
      setCountdown(60);
    }
  };

  const handleSkip = () => {
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md">
          {step === "phone" && (
            <Card className="bg-card border-border/50 shadow-aviation">
              <CardHeader className="text-center pb-6">
                <div className="bg-gradient-aviation p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Verify Your Phone
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Enter your mobile number to receive a verification code
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 8073272474"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-background border-border text-foreground"
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      Include country code (e.g., +91 for India)
                    </p>
                  </div>

                  {error && (
                    <p className="text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
                      {error}
                    </p>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-gradient-aviation hover:shadow-glow transition-all duration-300"
                    disabled={loading}
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : null}
                    Send Verification Code
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    className="w-full text-muted-foreground"
                    onClick={handleSkip}
                  >
                    Skip for now
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {step === "otp" && (
            <Card className="bg-card border-border/50 shadow-aviation">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-foreground">
                  Enter Verification Code
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  We sent a 6-digit code to {phone}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleVerifyOtp} className="space-y-6">
                  <div className="flex justify-center gap-3">
                    {otp.map((digit, index) => (
                      <Input
                        key={index}
                        ref={(el) => {
                          inputRefs.current[index] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        className="w-12 h-14 text-center text-xl font-bold bg-background border-border text-foreground"
                      />
                    ))}
                  </div>

                  {error && (
                    <p className="text-sm text-destructive bg-destructive/10 p-3 rounded-lg text-center">
                      {error}
                    </p>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-gradient-aviation hover:shadow-glow transition-all duration-300"
                    disabled={loading}
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : null}
                    Verify Code
                  </Button>

                  <div className="text-center space-y-2">
                    {countdown > 0 ? (
                      <p className="text-sm text-muted-foreground">
                        Resend code in{" "}
                        <span className="font-semibold text-primary">
                          {countdown}s
                        </span>
                      </p>
                    ) : (
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={handleResendOtp}
                        disabled={loading}
                        className="text-primary"
                      >
                        Resend Code
                      </Button>
                    )}

                    <Button
                      type="button"
                      variant="ghost"
                      className="text-muted-foreground"
                      onClick={() => {
                        setStep("phone");
                        setError("");
                      }}
                    >
                      <ArrowLeft className="h-4 w-4 mr-1" />
                      Change number
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {step === "success" && (
            <Card className="bg-card border-border/50 shadow-aviation">
              <CardContent className="p-8 text-center">
                <div className="bg-success/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <CheckCircle2 className="h-10 w-10 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Phone Verified!
                </h3>
                <p className="text-muted-foreground">
                  Your phone number has been successfully verified.
                  Redirecting...
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default VerifyOtpPage;
