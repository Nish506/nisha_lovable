import { Palette, Code, Leaf, Lightbulb, Users, Sprout } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Palette,
      title: "Design",
      skills: ["UI/UX Design", "Brand Identity", "Typography", "Color Theory"],
      color: "bg-primary",
      iconColor: "text-primary-foreground"
    },
    {
      icon: Code,
      title: "Development", 
      skills: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      color: "bg-secondary",
      iconColor: "text-secondary-foreground"
    },
    {
      icon: Leaf,
      title: "Organic Design",
      skills: ["Nature-Inspired UI", "Sustainable UX", "Mindful Interactions", "Accessibility"],
      color: "bg-accent",
      iconColor: "text-accent-foreground"
    },
    {
      icon: Lightbulb,
      title: "Strategy",
      skills: ["User Research", "Design Systems", "Problem Solving", "Innovation"],
      color: "bg-highlight",
      iconColor: "text-highlight-foreground"
    }
  ];

  const additionalSkills = [
    { icon: Users, label: "Community Building" },
    { icon: Sprout, label: "Growth Strategy" },
    { icon: Palette, label: "Visual Storytelling" },
    { icon: Code, label: "Sustainable Tech" }
  ];

  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Organic background elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-primary/10 rounded-full animate-organic-float" />
      <div className="absolute bottom-32 left-16 w-18 h-18 bg-secondary/15 rounded-full animate-leaf-sway" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-raleway font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
            Natural Talents
          </h2>
          <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Skills that grow organically from creativity, nurtured by technical expertise
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group hover:scale-105 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-gradient-card border-2 border-border/30 rounded-3xl p-6 h-full hover:shadow-xl transition-all duration-300 hover:border-primary/30">
                <div className={`${category.color} rounded-full p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-transparent rounded-full" />
                  <category.icon className={`w-8 h-8 ${category.iconColor} relative z-10`} />
                </div>
                
                <h3 className="font-raleway font-bold text-xl mb-4 text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="font-poppins text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mr-3 opacity-60" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="text-center">
          <h3 className="font-raleway font-bold text-2xl mb-8 text-foreground">
            Seeds of Expertise
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-muted/30 hover:bg-primary/10 border-2 border-border/20 hover:border-primary/30 rounded-full px-6 py-3 transition-all duration-300 hover:scale-105 animate-fade-in-up backdrop-blur-sm"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <skill.icon className="w-5 h-5 text-muted-foreground" />
                <span className="font-poppins font-medium text-foreground">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;