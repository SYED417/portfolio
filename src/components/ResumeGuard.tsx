import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

interface ResumeGuardProps {
  children: React.ReactNode;
}

const ResumeGuard = ({ children }: ResumeGuardProps) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Wait for session check to finish — don't redirect prematurely
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  // User is not logged in — send to login with return-to-resume state
  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // User is logged in — show the resume
  return <>{children}</>;
};

export default ResumeGuard;
