import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Motivated Artificial Intelligence graduate with hands-on experience in generative AI through an internship at DEPI. 
              Solid academic background in Machine Learning, Deep Learning, and Computer Vision. Passionate about developing 
              intelligent solutions that bridge research and real-world applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Education */}
            <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Education</h3>
                <div className="space-y-2">
                  <p className="font-semibold text-primary">Bachelor's Degree</p>
                  <p className="text-foreground">Artificial Intelligence</p>
                  <p className="text-muted-foreground text-sm">Kafr El-Sheikh University</p>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Experience</h3>
                <div className="space-y-2">
                  <p className="font-semibold text-primary">Internship</p>
                  <p className="text-foreground">Generative AI</p>
                  <p className="text-muted-foreground text-sm">DEPI</p>
                </div>
              </CardContent>
            </Card>

            {/* Certification */}
            <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Certification</h3>
                <div className="space-y-2">
                  <p className="font-semibold text-primary">HCIA</p>
                  <p className="text-foreground">Artificial Intelligence</p>
                  <p className="text-muted-foreground text-sm">Huawei</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;