import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/boeing-777-hero.jpg";
import portraitImage from "@/assets/professional-portrait.jpg";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Boeing 777 in flight"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                Syed Sulaiman
                <span className="block bg-gradient-to-r from-accent to-primary-light bg-clip-text text-transparent">
                  Usman
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-4 max-w-2xl font-medium">
                B.Tech CSE Undergrad &bull; Cloud &amp; DevOps Enthusiast
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl">
                Cloud and infrastructure enthusiast with hands-on experience in AWS, 
                Linux environments, and backend deployment.
                 Skilled in building and deploying cloud-based applications using modern development and system administration tools.
                  Seeking a Cloud/DevOps internship to contribute to scalable infrastructure,
                   automation, and reliable cloud systems.

              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-gradient-aviation hover:shadow-glow transition-all duration-300 text-lg px-8 py-4"
                onClick={() => navigate("/projects")}
              >
                View Projects
                <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-white hover:text-white hover:bg-transparent text-lg px-8 py-4"
                onClick={() => navigate("/contact")}
              >
                Contact Me
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/SYED417"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent transition-colors duration-300 hover:scale-110 transform"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/syed-sulaiman-usman-bba233291/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent transition-colors duration-300 hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:sulaimansyed417@gmail.com"
                className="text-white/70 hover:text-accent transition-colors duration-300 hover:scale-110 transform"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image — Static, no blinking/pulsing */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-aviation rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              <img
                src={portraitImage}
                alt="Syed Sulaiman Usman"
                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white/20 shadow-aviation hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
