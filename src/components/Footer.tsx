import {
  Plane,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-accent p-2 rounded-lg">
                <Plane className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">Syed Sulaiman Usman</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              B.Tech CSE student and cloud enthusiast, building scalable systems
              one deployment at a time.
            </p>
            <div className="flex items-center text-primary-foreground/80">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Bengaluru, Karnataka, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Resume", href: "/resume" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Let's Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/SYED417"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/syed-sulaiman-usman-bba233291/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:sulaimansyed417@gmail.com"
                className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Open to internships, collaboration, and cloud engineering
              opportunities.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-primary-foreground/80 text-sm">
            &copy; {new Date().getFullYear()} Syed Sulaiman Usman. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
