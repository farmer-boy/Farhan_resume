import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'Superior University, Gold Campus',
    location: 'Lahore, Pakistan',
    duration: '2023 - 2027',
    semester: '7th Semester',
    cgpa: '3.34 / 4.00',
    description: 'Currently pursuing Software Engineering with focus on full-stack web development, mobile app development, and software architecture.',
    achievements: ['CGPA: 3.34/4.00', 'Software Engineering Major', 'Active Developer'],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Education</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">
            Academic Background
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My educational journey that is building the foundation for my career in software development.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Education Card */}
          {education.map((item, index) => (
            <div
              key={item.degree}
              className="glass-card p-8 hover-lift relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-semibold mb-2">{item.degree}</h3>
                  <p className="text-primary font-medium text-lg mb-4">{item.institution}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
                      <Calendar className="w-4 h-4" />
                      {item.duration}
                    </span>
                    <span className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
                      <Award className="w-4 h-4" />
                      {item.semester}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-secondary/30 rounded-xl">
                      <p className="text-2xl font-bold gradient-text">3.34</p>
                      <p className="text-xs text-muted-foreground mt-1">CGPA</p>
                    </div>
                    <div className="text-center p-4 bg-secondary/30 rounded-xl">
                      <p className="text-2xl font-bold gradient-text">7th</p>
                      <p className="text-xs text-muted-foreground mt-1">Semester</p>
                    </div>
                    <div className="text-center p-4 bg-secondary/30 rounded-xl">
                      <p className="text-2xl font-bold gradient-text">2027</p>
                      <p className="text-xs text-muted-foreground mt-1">Expected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
