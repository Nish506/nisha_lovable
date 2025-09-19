const About = () => {
  return (
    <section className="py-20 px-6 bg-gradient-accent relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Organic Decorative Elements */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/20 rounded-full opacity-60 animate-organic-float" />
          <div className="absolute -top-5 -right-15 w-12 h-12 bg-secondary/30 rounded-full opacity-70 animate-leaf-sway" />
          <div className="absolute -bottom-8 left-10 w-16 h-16 bg-highlight/25 rounded-full opacity-50 animate-organic-float" />
          <div className="absolute top-20 right-20 w-14 h-14 bg-accent/20 rounded-full opacity-60 animate-bounce-gentle" />
        </div>

        <div className="animate-fade-in-up">
          <h2 className="font-raleway font-bold text-4xl md:text-5xl lg:text-6xl mb-8 text-foreground">
            Rooted in Creativity
          </h2>
          
          <div className="bg-background/85 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border-2 border-border/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full translate-y-12 -translate-x-12" />
            
            <p className="font-poppins text-lg md:text-xl leading-relaxed text-foreground mb-6 relative z-10">
              Like a garden that flourishes with care and attention, I cultivate digital experiences that grow organically from user needs. 
              My creative process draws inspiration from nature's patterns, translating organic beauty into meaningful design solutions.
            </p>
            
            <p className="font-poppins text-lg md:text-xl leading-relaxed text-muted-foreground mb-8 relative z-10">
              When I'm not nurturing digital landscapes, you'll find me exploring botanical gardens, collecting pressed leaves, 
              or watching how morning light filters through tree canopies. I believe the best designs feel as natural as breathing.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-poppins font-medium">
                5+ Years Experience
              </span>
              <span className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-poppins font-medium">
                50+ Projects Completed
              </span>
              <span className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-poppins font-medium">
                Always Learning
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;