import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable and scalable code',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Finding elegant solutions to complex problems',
  },
  {
    icon: Rocket,
    title: 'Fast Learner',
    description: 'Quickly adapting to new technologies',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborating effectively with teams',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse-glow" />
              <div className="absolute inset-4 rounded-full border border-primary/20" />
              
              {/* Profile Container */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                  <span className="font-display text-6xl sm:text-7xl gradient-text">F</span>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 glass-card rounded-xl flex items-center justify-center animate-float">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 glass-card rounded-xl flex items-center justify-center animate-float delay-200">
                <Rocket className="w-8 h-8 text-accent" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Me</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2 mb-6">
              Passionate Developer Building{' '}
              <span className="gradient-text">Digital Experiences</span>
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a dedicated Full-Stack Developer with a passion for creating 
              beautiful, functional, and user-friendly web applications. With expertise 
              in React.js and modern web technologies, I transform complex ideas into 
              elegant digital solutions.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              My journey in web development started with a curiosity for how things work 
              on the internet. Today, I specialize in building responsive applications 
              that not only look great but also provide seamless user experiences. I'm 
              constantly learning and staying updated with the latest trends in technology.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card p-4 hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
