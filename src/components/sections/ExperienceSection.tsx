import { Briefcase, Calendar, Building2 } from 'lucide-react';

const experiences = [
  {
    title: 'Frontend Developer Intern',
    company: 'Tech Solutions Inc.',
    location: 'Remote',
    duration: 'Jun 2024 - Dec 2025',
    type: 'Internship',
    responsibilities: [
      'Developed and maintained React components for the company\'s main product',
      'Collaborated with the design team to implement responsive UI designs',
      'Participated in code reviews and improved code quality by 25%',
      'Integrated REST APIs and optimized application performance',
    ],
  },
  {
    title: 'Junior Web Developer',
    company: 'Digital Agency XYZ',
    location: 'New York, USA',
    duration: 'Jan 2024 - May 2025',
    type: 'Part-time',
    responsibilities: [
      'Built custom WordPress themes and plugins for client websites',
      'Implemented responsive designs using HTML, CSS, and JavaScript',
      'Managed multiple client projects with tight deadlines',
      'Provided technical support and maintenance for existing websites',
    ],
  },
  {
    title: 'Freelance Developer',
    company: 'Self-Employed',
    location: 'Remote',
    duration: '2024 - 2025',
    type: 'Freelance',
    responsibilities: [
      'Designed and developed custom web applications for small businesses',
      'Created e-commerce solutions using React and Node.js',
      'Managed client relationships and project timelines',
      'Delivered 10+ successful projects with positive client feedback',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Experience</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">
            Work Experience
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Professional experiences that have shaped my skills and approach to software development.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:ml-auto'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 rounded-full bg-primary/20 border-4 border-background flex items-center justify-center transform -translate-x-1/2 z-10">
                  <Briefcase className="w-3 h-3 text-primary" />
                </div>

                {/* Content Card */}
                <div
                  className={`glass-card p-6 ml-12 md:ml-0 hover-lift ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    {/* Type Badge */}
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                      {exp.type}
                    </span>

                    <h3 className="font-display text-xl font-semibold mb-1">{exp.title}</h3>
                    
                    <div className={`flex items-center gap-2 text-primary font-medium mb-3 ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    }`}>
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </div>

                    <div className={`flex items-center gap-4 text-sm text-muted-foreground mb-4 ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    }`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </span>
                    </div>

                    <ul className={`space-y-2 text-sm text-muted-foreground ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}>
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 ${
                            index % 2 === 0 ? 'md:order-2' : ''
                          }`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
