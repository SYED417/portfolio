import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plane, Menu, X, LogOut, User } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Public nav items (always visible)
  const publicNavItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ];

  // Smart resume click: go to /resume if logged in, otherwise /login with state
  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (user) {
      navigate("/resume");
    } else {
      navigate("/login", { state: { from: "/resume" } });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogout = async () => {
    await signOut();
    setIsMobileMenuOpen(false);
    navigate("/");
  };

  // Extract first name for greeting
  const displayName = (() => {
    const fullName =
      user?.user_metadata?.full_name as string | undefined;
    if (fullName) return fullName.split(" ")[0];
    return user?.email?.split("@")[0] ?? "User";
  })();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative font-medium transition-colors duration-300 group ${
      isActive ? "text-accent" : "text-foreground hover:text-primary"
    }`;

  const underline =
    "absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-aviation transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-aviation p-2 rounded-lg shadow-aviation group-hover:shadow-glow transition-all duration-300">
              <Plane className="h-6 w-6 text-white transform group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="text-xl font-bold bg-gradient-aviation bg-clip-text text-transparent">
              Sulaiman
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {publicNavItems.map((item) => (
              <NavLink key={item.label} to={item.to} className={linkClass} end={item.to === "/"}>
                {item.label}
                <span className={underline} />
              </NavLink>
            ))}

            {/* Resume tab — smart behaviour */}
            <a
              href="/resume"
              onClick={handleResumeClick}
              className="relative font-medium transition-colors duration-300 group text-foreground hover:text-primary cursor-pointer"
            >
              Resume
              <span className={underline} />
            </a>

            {/* Auth section */}
            {!loading && (
              <>
                {user ? (
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-8 h-8 rounded-full bg-gradient-aviation flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <span className="hidden lg:inline font-medium text-foreground">
                        Hi, {displayName}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleLogout}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <LogOut className="h-4 w-4 mr-1" />
                      <span className="hidden lg:inline">Logout</span>
                    </Button>
                  </div>
                ) : (
                  <NavLink to="/login">
                    <Button className="bg-gradient-aviation hover:shadow-glow transition-all duration-300">
                      Login
                    </Button>
                  </NavLink>
                )}
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border animate-fade-in-up">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {publicNavItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `block font-medium py-2 transition-colors duration-300 ${
                      isActive ? "text-accent" : "text-foreground hover:text-primary"
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}

              {/* Mobile Resume tab */}
              <a
                href="/resume"
                onClick={handleResumeClick}
                className="block font-medium py-2 transition-colors duration-300 text-foreground hover:text-primary cursor-pointer"
              >
                Resume
              </a>

              {!loading && (
                <>
                  {user ? (
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-aviation flex items-center justify-center">
                          <User className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          Hi, {displayName}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" onClick={handleLogout} className="text-muted-foreground">
                        <LogOut className="h-4 w-4 mr-1" />
                        Sign Out
                      </Button>
                    </div>
                  ) : (
                    <NavLink to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full bg-gradient-aviation hover:shadow-glow transition-all duration-300">
                        Login
                      </Button>
                    </NavLink>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
