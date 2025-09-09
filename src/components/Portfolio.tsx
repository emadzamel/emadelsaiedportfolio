import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Folder, Clock, ArrowRight } from "lucide-react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Portfolio
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Showcasing innovative AI and machine learning projects
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 group">
              <CardContent className="p-12 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Folder className="w-12 h-12 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Exciting Projects Coming Soon
                </h3>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  I'm currently working on several innovative AI and machine learning projects that will be showcased here. 
                  These projects will demonstrate my expertise in generative AI, computer vision, and deep learning applications.
                </p>

                <div className="flex items-center justify-center text-primary mb-8">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-medium">Portfolio updates in progress</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="premium" size="lg">
                    Check Back Later
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Contact for Details
                  </Button>
                </div>

                <div className="mt-8 text-sm text-muted-foreground">
                  <p>Meanwhile, feel free to connect with me to discuss current projects and collaborations</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;