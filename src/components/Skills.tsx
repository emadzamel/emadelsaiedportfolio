import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Brain, 
  BarChart3, 
  Eye, 
  MessageSquare, 
  Target 
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "Python Programming",
      level: 90,
      icon: Code,
      description: "Advanced proficiency in Python for AI/ML development"
    },
    {
      name: "Machine Learning & Deep Learning",
      level: 85,
      icon: Brain,
      description: "TensorFlow, PyTorch, scikit-learn, neural networks"
    },
    {
      name: "Data Analysis",
      level: 80,
      icon: BarChart3,
      description: "Pandas, NumPy, Matplotlib, data visualization"
    },
    {
      name: "Computer Vision",
      level: 78,
      icon: Eye,
      description: "OpenCV, image processing, object detection"
    },
    {
      name: "Prompt Engineering & LLMs",
      level: 82,
      icon: MessageSquare,
      description: "Large Language Models, prompt optimization"
    },
    {
      name: "Model Training & Evaluation",
      level: 85,
      icon: Target,
      description: "Model optimization, hyperparameter tuning, validation"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive skill set in artificial intelligence, machine learning, and data science
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <Card 
                  key={skill.name} 
                  className="bg-card shadow-card hover:shadow-hover transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-1">{skill.name}</h3>
                        <div className="flex items-center gap-2">
                          <Progress value={skill.level} className="flex-1 h-2" />
                          <span className="text-sm font-medium text-primary">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;