import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  ExternalLink,
  Cloud,
  MapPin,
  Globe,
  HardDrive,
  Plane,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "DevOps Cloud Deployment Platform",
      description:
        "Designed and deployed a production-style cloud platform using AWS EC2, Docker, and GitHub Actions CI/CD pipelines. Implemented automated deployments, monitoring dashboards, and secure infrastructure configuration for scalable application hosting. Set up Nginx reverse proxy, Docker containerization, and automated testing pipelines. Configured CloudWatch monitoring and alerting for infrastructure health.",
      tech: [
        "AWS EC2",
        "Docker",
        "GitHub Actions",
        "CI/CD",
        "Nginx",
        "CloudWatch",
      ],
      icon: Rocket,
      featured: true,
      github: "https://github.com/SYED417",
      image:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=250&fit=crop",
    },
    {
      title: "Cloud File Hosting System",
      description:
        "Designed a cloud-based file hosting system using Amazon S3 and Linux. Set up and configured an EC2 instance for server access and deployment. Worked with SSH, basic IAM concepts, and Linux server management. Focused on understanding cloud fundamentals such as scalability and access control.",
      tech: ["AWS EC2", "AWS S3", "Linux", "IAM", "SSH"],
      icon: Cloud,
      featured: false,
      github: "https://github.com/SYED417",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop",
    },
    {
      title: "Cloud-Based Route Optimization for Indian Roads",
      description:
        "Designed routing logic optimized for narrow Indian roads, with vehicle-fit based path selection using the Google Maps API. Built to solve real navigation challenges specific to Indian road infrastructure.",
      tech: ["JavaScript", "Google Maps API"],
      icon: MapPin,
      featured: false,
      github: "https://github.com/SYED417",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop",
    },
    {
      title: "Personal Cloud Server",
      description:
        "Built a personal cloud system to store and access files remotely. Configured storage management and system monitoring for reliable file access from anywhere.",
      tech: ["Linux", "Networking", "Storage"],
      icon: HardDrive,
      featured: false,
      github: "https://github.com/SYED417",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
    },
    {
      title: "Portfolio Website",
      description:
        "Developed a responsive portfolio website to showcase projects, skills, and experience. Built with modern web technologies and designed for clean, professional presentation.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: Globe,
      featured: false,
      github: "https://github.com/SYED417",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    },
    {
      title: "Custom Aircraft Control Yoke",
      description:
        "Designed and built a functional aircraft control yoke as an aviation enthusiast. Focused on ergonomic design and realistic control input mechanism — a Boeing 737 yoke resembling its original design.",
      tech: ["Hardware Design", "Mechanical Systems"],
      icon: Plane,
      featured: false,
      github: "https://github.com/SYED417",
      image:
        "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=400&h=250&fit=crop",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real-world projects spanning cloud infrastructure, DevOps
            automation, web development, and even hardware engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group bg-card hover:bg-card-hover border-border/50 shadow-card hover:shadow-aviation transition-all duration-300 overflow-hidden ${project.featured ? "md:col-span-2" : ""}`}
            >
              <div
                className={`relative ${project.featured ? "h-56" : "h-48"} overflow-hidden`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground font-semibold">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center mb-2">
                  <div className="bg-gradient-aviation p-2 rounded-lg mr-3">
                    <project.icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-primary/20 hover:border-primary transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full group-hover:border-primary transition-colors duration-300"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
