import { Linkedin, Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/emadzamel",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/emadzamel",
      label: "GitHub"
    },
    {
      icon: Mail,
      href: "mailto:emadzamel1234@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Emad Elsaied</h3>
              <p className="text-muted-foreground mb-4">
                AI Graduate specializing in Machine Learning, Deep Learning, and Generative AI. 
                Building intelligent solutions for tomorrow's challenges.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(item.toLowerCase());
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5 text-primary-foreground" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground flex items-center justify-center">
              Made with <Heart className="w-4 h-4 mx-2 text-primary" /> by Emad Elsaied Mohammed
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © 2024 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;