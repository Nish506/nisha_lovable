import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Botanical Branding",
      description: "Organic brand identity for an eco-conscious wellness company, inspired by natural growth patterns.",
      category: "Brand Design",
      color: "bg-primary/80"
    },
    {
      title: "Garden Gallery",
      description: "Interactive web experience showcasing botanical photography with seamless nature-inspired navigation.",
      category: "Web Design",
      color: "bg-secondary/80"
    },
    {
      title: "Sustainable Spaces",
      description: "Mobile app connecting urban gardeners with community growing spaces and plant care resources.",
      category: "App Design",
      color: "bg-accent/80"
    },
    {
      title: "Forest Learning",
      description: "Educational platform teaching environmental awareness through immersive storytelling.",
      category: "Development",
      color: "bg-highlight/80"
    },
    {
      title: "Natural Rhythms",
      description: "Meditation app with nature soundscapes and organic visual transitions for mindfulness practice.",
      category: "UI/UX Design",
      color: "bg-primary/80"
    },
    {
      title: "Earth Market",
      description: "E-commerce platform for sustainable products with carbon-neutral shipping integration.",
      category: "Development",
      color: "bg-secondary/80"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-accent relative overflow-hidden">
      {/* Organic background elements */}
      <div className="absolute top-10 left-5 w-20 h-20 bg-primary/20 rounded-full animate-organic-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-leaf-sway" />
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-accent/20 rounded-full animate-bounce-gentle" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-raleway font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
            Creative Garden
          </h2>
          <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A cultivated collection of digital experiences rooted in nature-inspired design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 border-border/30 hover:border-primary/50 bg-gradient-card animate-scale-in overflow-hidden rounded-3xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="relative">
                <div className={`w-full h-32 ${project.color} rounded-2xl mb-4 opacity-70 group-hover:opacity-90 transition-all duration-300 relative overflow-hidden`}>
                  {/* Organic overlay pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-transparent rounded-2xl" />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-background/95 text-xs font-poppins font-medium px-4 py-2 rounded-full text-muted-foreground border border-border/50 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardTitle className="font-raleway font-bold text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="font-poppins text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins rounded-full flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-2 border-border hover:bg-accent hover:border-accent-foreground font-poppins rounded-full"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;