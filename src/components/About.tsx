const About = () => {
  return (
    <section className="py-20 px-6 bg-gradient-accent">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative Elements */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary rounded-full opacity-30 animate-float" />
          <div className="absolute -top-5 -right-15 w-12 h-12 bg-secondary rounded-full opacity-40 animate-bounce-gentle" />
          <div className="absolute -bottom-8 left-10 w-16 h-16 bg-highlight rounded-full opacity-25 animate-float" />
        </div>

        <div className="animate-fade-in-up">
          <h2 className="font-raleway font-bold text-4xl md:text-5xl lg:text-6xl mb-8 text-foreground">
            About Me
          </h2>
          
          <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border-2 border-border/30">
            <p className="font-poppins text-lg md:text-xl leading-relaxed text-foreground mb-6">
              I'm a passionate creative professional who loves bringing ideas to life through thoughtful design and clean code. 
              With a background in both visual design and development, I bridge the gap between aesthetics and functionality.
            </p>
            
            <p className="font-poppins text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
              When I'm not crafting digital experiences, you'll find me sketching in my notebook, exploring new design trends, 
              or experimenting with the latest web technologies. I believe that great design should feel effortless and bring joy to everyday interactions.
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