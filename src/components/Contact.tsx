import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+20 120 096 6265",
      href: "tel:+201200966265"
    },
    {
      icon: Mail,
      label: "Email",
      value: "emadzamel1234@gmail.com",
      href: "mailto:emadzamel1234@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/emadzamel",
      href: "https://linkedin.com/in/emadzamel"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/emadzamel",
      href: "https://github.com/emadzamel"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Let's discuss how we can work together on your next AI project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={index} className="bg-gradient-card shadow-soft hover:shadow-card transition-all duration-300 group">
                      <CardContent className="p-6">
                        <a 
                          href={item.href}
                          className="flex items-center group-hover:text-primary transition-colors duration-300"
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                              {item.label}
                            </p>
                            <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                              {item.value}
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-gradient-card shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-foreground font-medium">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="mt-2"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-foreground font-medium">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="mt-2"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-foreground font-medium">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        className="mt-2"
                        placeholder="Project discussion, collaboration, etc."
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-foreground font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="mt-2 min-h-[120px]"
                        placeholder="Tell me about your project or how we can work together..."
                        required
                      />
                    </div>
                    
                    <Button type="submit" variant="premium" size="lg" className="w-full">
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;