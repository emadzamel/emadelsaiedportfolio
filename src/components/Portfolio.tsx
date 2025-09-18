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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 group overflow-hidden">
              <div className="aspect-video bg-gradient-subtle flex items-center justify-center">
                <div className="text-muted-foreground text-center p-4">
                  <Folder className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Upload Project Image</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Project Title 1
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Add your project description here. Describe the technologies used and the problem it solves.
                </p>
                <div className="flex gap-3">
                  <Button variant="premium" size="sm" className="flex-1">
                    Live Demo
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 group overflow-hidden">
              <div className="aspect-video bg-gradient-subtle flex items-center justify-center">
                <div className="text-muted-foreground text-center p-4">
                  <Folder className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Upload Project Image</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Project Title 2
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Add your project description here. Describe the technologies used and the problem it solves.
                </p>
                <div className="flex gap-3">
                  <Button variant="premium" size="sm" className="flex-1">
                    Live Demo
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 group overflow-hidden">
              <div className="aspect-video bg-gradient-subtle flex items-center justify-center">
                <div className="text-muted-foreground text-center p-4">
                  <Folder className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Upload Project Image</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Project Title 3
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Add your project description here. Describe the technologies used and the problem it solves.
                </p>
                <div className="flex gap-3">
                  <Button variant="premium" size="sm" className="flex-1">
                    Live Demo
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    GitHub
                  </Button>
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