import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'University of Technology',
    location: 'New York, USA',
    duration: '2019 - 2023',
    description: 'Focused on software engineering, web development, and database management. Graduated with honors.',
    achievements: ['Dean\'s List', 'GPA: 3.8/4.0', 'Web Development Club Lead'],
  },
  {
    degree: 'High School Diploma',
    institution: 'Central High School',
    location: 'New York, USA',
    duration: '2015 - 2019',
    description: 'Completed with a focus on mathematics and computer science. First introduction to programming.',
    achievements: ['Honor Roll', 'Computer Science Award', 'Math Olympiad Finalist'],
  },
];

const certifications = [
  {
    name: 'React Developer Certification',
    issuer: 'Meta',
    year: '2023',
  },
  {
    name: 'Full-Stack Web Development',
    issuer: 'freeCodeCamp',
    year: '2022',
  },
  {
    name: 'JavaScript Algorithms',
    issuer: 'Coursera',
    year: '2022',
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
            My educational journey that laid the foundation for my career in software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2 space-y-6">
            {education.map((item, index) => (
              <div
                key={item.degree}
                className="glass-card p-6 hover-lift relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline Indicator */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-border -z-10 hidden lg:block" />
                
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold mb-1">{item.degree}</h3>
                    <p className="text-primary font-medium mb-2">{item.institution}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement) => (
                        <span
                          key={achievement}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="glass-card p-4 hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="font-medium text-sm mb-1">{cert.name}</h4>
                  <p className="text-muted-foreground text-xs">{cert.issuer}</p>
                  <span className="text-xs text-primary mt-2 inline-block">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
