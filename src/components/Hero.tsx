import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Picture */}
          <div className="mb-8 animate-fade-in">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-primary p-1 shadow-card animate-float">
              <img 
                src={profileImage} 
                alt="Emad Elsaied Mohammed" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Emad Elsaied Mohammed
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-primary mb-6 font-medium">
              Artificial Intelligence Graduate | Machine Learning & Generative AI Enthusiast
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Building intelligent systems through AI, Machine Learning, and Computer Vision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="premium"
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="px-8 py-3 text-lg"
              >
                Explore My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection("about")}
              className="rounded-full"
            >
              <ArrowDown className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;