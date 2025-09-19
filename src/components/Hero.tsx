import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import natureHeroBg from "@/assets/nature-hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Nature Background */}
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${natureHeroBg})` }}
      />
      
      {/* Organic Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/40 rounded-full animate-organic-float opacity-70" />
      <div className="absolute top-40 right-20 w-12 h-12 bg-secondary/50 rounded-full animate-leaf-sway opacity-60" />
      <div className="absolute bottom-32 left-20 w-10 h-10 bg-accent/60 rounded-full animate-organic-float opacity-80" />
      <div className="absolute bottom-20 right-10 w-14 h-14 bg-highlight/50 rounded-full animate-leaf-sway opacity-60" />
      
      {/* Additional organic shapes */}
      <div className="absolute top-60 left-1/4 w-8 h-8 bg-primary/30 rounded-full animate-bounce-gentle opacity-50" />
      <div className="absolute bottom-40 right-1/3 w-6 h-6 bg-secondary/40 rounded-full animate-organic-float opacity-60" />
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in-up">
        <h1 className="font-raleway font-bold text-6xl md:text-8xl lg:text-9xl mb-6 text-foreground">
          Your Name
        </h1>
        <p className="font-poppins text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Nature-inspired creative cultivating organic digital experiences
        </p>
        
        <Button 
          onClick={scrollToProjects}
          size="lg"
          className="group bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-medium px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Explore My Work
          <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;