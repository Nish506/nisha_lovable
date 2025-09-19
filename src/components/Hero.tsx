import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroDoodles from "@/assets/hero-doodles.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Doodle Background */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroDoodles})` }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-12 h-12 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-8 h-8 bg-secondary rounded-full animate-bounce-gentle opacity-50" />
      <div className="absolute bottom-32 left-20 w-6 h-6 bg-accent rounded-full animate-float opacity-70" />
      <div className="absolute bottom-20 right-10 w-10 h-10 bg-highlight rounded-full animate-bounce-gentle opacity-50" />
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in-up">
        <h1 className="font-raleway font-bold text-6xl md:text-8xl lg:text-9xl mb-6 text-foreground">
          Your Name
        </h1>
        <p className="font-poppins text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Creative Designer & Developer crafting beautiful digital experiences
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