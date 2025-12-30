import { Code2, Rocket, Users, MapPin, Phone, Mail } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'React.js, Node.js, Flutter & REST APIs',
  },
  {
    icon: Rocket,
    title: 'Performance Focused',
    description: 'Scalable & high-performance applications',
  },
  {
    icon: Users,
    title: 'Clean Architecture',
    description: 'Modular design & secure authentication',
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
                  <span className="font-display text-6xl sm:text-7xl gradient-text">FR</span>
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

            {/* Contact Info */}
            <div className="mt-8 space-y-2 text-sm text-muted-foreground text-center">
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Lahore, Pakistan
              </p>
              <p className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +92 309 5657677
              </p>
              <p className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                subssems336@gmail.com
              </p>
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
              Results-driven Full-Stack Web & Flutter Developer with hands-on experience 
              building scalable, responsive, and high-performance web and mobile applications. 
              Strong expertise in React.js, Node.js, Flutter, REST APIs, SQL databases, 
              Firebase, and Strapi CMS.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Adept at designing modular architectures, implementing secure authentication, 
              integrating APIs, and managing application state. Passionate about delivering 
              clean, maintainable code and building real-world solutions with excellent 
              user experience.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
