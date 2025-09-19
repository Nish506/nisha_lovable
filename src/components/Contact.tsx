import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Heart } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@yourname.com",
      href: "mailto:hello@yourname.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/yourprofile"
    },
    {
      icon: Github,
      label: "GitHub", 
      value: "View my code",
      href: "https://github.com/yourusername"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Organic floating elements */}
        <div className="relative">
          <div className="absolute -top-10 left-1/4 w-12 h-12 bg-primary/20 rounded-full opacity-60 animate-organic-float" />
          <div className="absolute -top-5 right-1/4 w-8 h-8 bg-secondary/30 rounded-full opacity-70 animate-leaf-sway" />
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-accent/20 rounded-full opacity-50 animate-bounce-gentle" />
        </div>

        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-raleway font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
            Plant Seeds Together
          </h2>
          <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to cultivate something beautiful? Let's grow your ideas into flourishing digital experiences.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-gradient-card rounded-3xl p-8 md:p-12 border-2 border-border/30 shadow-lg animate-scale-in relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-10 translate-x-10 animate-organic-float" />
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-secondary/5 rounded-full translate-y-8 -translate-x-8 animate-leaf-sway" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="group flex flex-col items-center text-center p-6 rounded-2xl hover:bg-muted/30 transition-all duration-300 hover:scale-105 hover:bg-primary/5"
              >
                <div className="bg-primary/90 rounded-full p-4 mb-4 group-hover:scale-110 group-hover:bg-primary transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-transparent rounded-full" />
                  <method.icon className="w-6 h-6 text-primary-foreground relative z-10" />
                </div>
                <h3 className="font-raleway font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                  {method.label}
                </h3>
                <p className="font-poppins text-muted-foreground group-hover:text-foreground transition-colors">
                  {method.value}
                </p>
              </a>
            ))}
          </div>

          <p className="font-poppins text-lg text-muted-foreground animate-fade-in-up relative z-10" style={{ animationDelay: '200ms' }}>
            Thank you for wandering through my creative garden. May our collaboration bloom into something extraordinary! 🌿
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;