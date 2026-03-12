import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Globe,
  Clock,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mailto fallback
    const mailtoLink = `mailto:sulaimansyed417@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.open(mailtoLink, "_blank");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sulaimansyed417@gmail.com",
      href: "mailto:sulaimansyed417@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8073272474",
      href: "tel:+918073272474",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, Karnataka, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/SYED417",
      username: "@SYED417",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/syed-sulaiman-usman",
      username: "/in/syed-sulaiman-usman",
    },
    {
      icon: Globe,
      label: "Website",
      href: "https://sulaimanpilot.wuaze.com",
      username: "sulaimanpilot.wuaze.com",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:sulaimansyed417@gmail.com",
      username: "sulaimansyed417@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      href: "tel:+918073272474",
      username: "+91 8073272474",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Got a project in mind, want to talk cloud infrastructure, or just
            want to say hi? I'm always happy to connect — whether it's about
            tech, aviation, or anything in between.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <Card className="bg-card border-border/50 shadow-card hover:shadow-aviation transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Send className="h-6 w-6 mr-3 text-primary" />
                  Send Message
                </CardTitle>
                <CardDescription>
                  Drop me a message and I'll get back to you as soon as I can.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hello..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-aviation hover:shadow-glow transition-all duration-300"
                    size="lg"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6 animate-slide-in-left">
            {/* Contact Information */}
            <Card className="bg-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Get in Touch</CardTitle>
                <CardDescription>
                  Reach out directly through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors duration-300 group"
                  >
                    <div className="bg-gradient-aviation p-2 rounded-lg group-hover:shadow-glow transition-all duration-300">
                      <info.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {info.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Find Me Online</CardTitle>
                <CardDescription>
                  Follow along on my coding and cloud journey.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors duration-300 group"
                  >
                    <div className="bg-gradient-aviation p-2 rounded-lg group-hover:shadow-glow transition-all duration-300">
                      <social.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {social.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {social.username}
                      </p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-gradient-aviation text-white shadow-aviation">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 mr-3" />
                  <h3 className="text-lg font-semibold">
                    Open to Opportunities
                  </h3>
                </div>
                <p className="text-sm opacity-90 mb-4">
                  Currently looking for internships and collaboration
                  opportunities in:
                </p>
                <div className="space-y-2 text-sm">
                  <p>Cloud & DevOps Engineering</p>
                  <p>Backend Development</p>
                  <p>Open Source Contributions</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
