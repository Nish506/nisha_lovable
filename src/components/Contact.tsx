import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Heart } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:your.email@example.com",
      color: "bg-primary hover:bg-primary/90"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      color: "bg-secondary hover:bg-secondary/90"
    },
    {
      icon: Github,
      label: "GitHub", 
      href: "https://github.com/yourusername",
      color: "bg-accent hover:bg-accent/90"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative floating elements */}
        <div className="relative">
          <div className="absolute -top-10 left-1/4 w-8 h-8 bg-primary rounded-full opacity-40 animate-float" />
          <div className="absolute -top-5 right-1/4 w-6 h-6 bg-secondary rounded-full opacity-50 animate-bounce-gentle" />
        </div>

        <div className="animate-fade-in-up">
          <h2 className="font-raleway font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
            Let's Connect
          </h2>
          
          <p className="font-poppins text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'd love to hear about your project and explore how we can create something amazing together.
          </p>

          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            {contactLinks.map((link, index) => (
              <Button
                key={index}
                asChild
                size="lg"
                className={`${link.color} text-white font-poppins font-medium px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  {link.label}
                </a>
              </Button>
            ))}
          </div>

          {/* Closing message */}
          <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-border/30">
            <p className="font-poppins text-lg text-muted-foreground flex items-center justify-center gap-2">
              Made with <Heart className="w-5 h-5 text-primary animate-bounce-gentle" fill="currentColor" /> 
              and lots of creativity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;