import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Cloud,
  Terminal,
  Wrench,
  Server,
  Award,
  GraduationCap,
  BookOpen,
} from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "C", "Java", "SQL", "Python"],
    },
    {
      category: "Web Technologies",
      icon: Server,
      skills: ["HTML", "CSS", "Node.js", "REST APIs"],
    },
    {
      category: "Cloud & Systems",
      icon: Cloud,
      skills: [
        "Linux",
        "AWS EC2",
        "AWS S3",
        "Networking Fundamentals",
        "IAM",
        "SSH",
        "Server Management",
      ],
    },
    {
      category: "DevOps & CI/CD",
      icon: Terminal,
      skills: [
        "Docker",
        "GitHub Actions",
        "Nginx",
        "Shell Scripting",
        "Terraform (basics)",
        "CloudWatch",
        "Grafana (basics)",
        "Infrastructure Automation",
      ],
    },
    {
      category: "Tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "Linux Terminal"],
    },
    { category: "Databases", icon: Database, skills: ["SQL", "DBMS Concepts"] },
  ];

  const milestones = [
    {
      title: "B.Tech in CSE",
      subtitle: "REVA University, Bengaluru",
      year: "Aug 2023 – May 2027 (Expected)",
      detail: "CGPA: 8.07/10",
    },
    {
      title: "Cloud & DevOps Projects",
      subtitle: "AWS, Docker, CI/CD Pipelines",
      year: "2024 – Present",
    },
    {
      title: "Aviation Enthusiast",
      subtitle: "Built a custom Boeing 737 control yoke",
      year: "Ongoing",
    },
  ];

  const certifications = [
    {
      name: "Art of C Programming",
      issuer: "NPTEL (SWAYAM)",
      date: "Jun 2024",
      credential: "KK04049684",
    },
    {
      name: "AI Tools and ChatGPT Workshop",
      issuer: "Be10X",
      date: "Jul 2025",
      credential: "20250714120701",
    },
    {
      name: "Microsoft Excel — Beginner to Advanced",
      issuer: "Udemy",
      date: "Nov 2023",
      credential: "UC-25730ce9-6804-4d4f-a75b-e54bbd9f7149",
    },
    {
      name: "Crash Course on Python",
      issuer: "Google (Coursera)",
      date: "In Progress",
      credential: null,
    },
  ];

  const coursework = [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Computer Networks",
    "Cloud Computing",
  ];

  return (
    <section id="about" className="py-20 bg-gradient-sky">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hey, I'm{" "}
            <strong className="text-foreground">Syed Sulaiman Usman</strong> — a
            Computer Science undergrad at REVA University with a strong pull
            toward cloud infrastructure, DevOps, and backend systems. I learn
            best by building things. Whether it's spinning up an EC2 instance,
            containerizing an app with Docker, or designing a CI/CD pipeline,
            I'd rather get my hands dirty than just read about it. Outside tech,
            I'm an aviation geek — I actually built a custom Boeing 737 control
            yoke from scratch.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story & Education */}
          <div className="space-y-6 animate-slide-in-left">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-card hover:shadow-aviation transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-aviation p-3 rounded-lg mr-4">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    My Journey
                  </h3>
                </div>
                <div className="space-y-4">
                  {milestones.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-3 h-3 bg-gradient-aviation rounded-full mr-4 flex-shrink-0 mt-1.5"></div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.subtitle}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.year}
                          {item.detail ? ` • ${item.detail}` : ""}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Coursework */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-card hover:shadow-aviation transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-aviation p-3 rounded-lg mr-4">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Undergraduate Coursework
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-card hover:shadow-aviation transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-aviation p-3 rounded-lg mr-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Certifications
                  </h3>
                </div>
                <div className="space-y-3">
                  {certifications.map((cert, i) => (
                    <div key={i} className="border-l-2 border-primary/30 pl-4">
                      <p className="font-medium text-foreground text-sm">
                        {cert.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {cert.issuer} &bull; {cert.date}
                        {cert.credential && (
                          <span className="block text-xs opacity-70">
                            ID: {cert.credential}
                          </span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Grid */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <Card
                  key={index}
                  className="bg-card/80 backdrop-blur-sm border-border/50 shadow-card hover:shadow-aviation transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-aviation p-2 rounded-lg mr-3 group-hover:shadow-glow transition-all duration-300">
                        <skillGroup.icon className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm">
                        {skillGroup.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
