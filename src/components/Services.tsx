import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, Plus } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Training and Evaluating AI Models",
      description: "Custom AI model development, training, and evaluation for your specific business needs. From data preprocessing to model optimization and performance metrics analysis.",
      icon: Brain,
      features: [
        "Custom model architecture design",
        "Data preprocessing and augmentation",
        "Hyperparameter optimization",
        "Performance evaluation and metrics",
        "Model deployment guidance"
      ]
    },
    {
      title: "More Services Coming Soon",
      description: "I'm continuously expanding my service offerings to better serve your AI and machine learning needs. Stay tuned for exciting new additions.",
      icon: Plus,
      features: [
        "Computer Vision solutions",
        "Natural Language Processing",
        "Generative AI applications",
        "AI consultation and strategy",
        "Custom AI integrations"
      ],
      comingSoon: true
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Services
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional AI and machine learning services to help bring your ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.title}
                  className={`bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 group relative overflow-hidden ${
                    service.comingSoon ? 'opacity-90' : ''
                  }`}
                >
                  {service.comingSoon && (
                    <div className="absolute top-4 right-4 bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Coming Soon
                    </div>
                  )}
                  
                  <CardContent className="p-8">
                    <div className="flex items-start mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant={service.comingSoon ? "outline" : "premium"}
                      className="w-full"
                      disabled={service.comingSoon}
                    >
                      {service.comingSoon ? "Notify Me" : "Get Started"}
                      <TrendingUp className="w-4 h-4 ml-2" />
                    </Button>
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

export default Services;