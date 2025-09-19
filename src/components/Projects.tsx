import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project Alpha",
      description: "A beautiful web application showcasing modern design principles and user experience.",
      category: "Web Design",
      color: "bg-primary"
    },
    {
      title: "Creative Campaign",
      description: "Brand identity and digital marketing materials for a sustainable fashion startup.",
      category: "Branding",
      color: "bg-secondary"
    },
    {
      title: "Mobile Experience",
      description: "Intuitive mobile app design focusing on accessibility and user engagement.",
      category: "UI/UX Design",
      color: "bg-accent"
    },
    {
      title: "Interactive Platform",
      description: "Full-stack development of an educational platform with real-time collaboration.",
      category: "Development",
      color: "bg-highlight"
    },
    {
      title: "Visual Identity",
      description: "Complete rebrand including logo design, color palette, and brand guidelines.",
      category: "Branding",
      color: "bg-primary"
    },
    {
      title: "E-commerce Site",
      description: "Responsive online store with custom checkout flow and inventory management.",
      category: "Web Development",
      color: "bg-secondary"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-raleway font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of work showcasing creativity, technical skills, and problem-solving
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 border-border/50 hover:border-border bg-gradient-card animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="relative">
                <div className={`w-full h-32 ${project.color} rounded-lg mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="absolute top-4 right-4">
                  <span className="bg-background/90 text-xs font-poppins font-medium px-3 py-1 rounded-full text-muted-foreground border">
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