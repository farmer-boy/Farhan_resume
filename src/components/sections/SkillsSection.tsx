const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'Dart', level: 85 },
      { name: 'C++', level: 75 },
      { name: 'SQL', level: 80 },
      { name: 'Python (ML Basics)', level: 60 },
    ],
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Flutter', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'ShadCN UI', level: 85 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'Responsive Design', level: 90 },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'RESTful APIs', level: 85 },
      { name: 'Firebase', level: 80 },
      { name: 'Strapi CMS', level: 75 },
      { name: 'Authentication & Auth', level: 80 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'Firebase Firestore', level: 82 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'Docker (Basics)', level: 60 },
      { name: 'Vercel', level: 85 },
    ],
  },
  {
    title: 'Core Competencies',
    skills: [
      { name: 'API Integration', level: 88 },
      { name: 'State Management', level: 85 },
      { name: 'CRUD Operations', level: 90 },
      { name: 'OOP & DSA', level: 80 },
      { name: 'Performance Optimization', level: 82 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">My Skills</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">
            Technical Skills
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use 
            to build powerful web and mobile applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card p-6 hover-lift"
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              <h3 className="font-display text-xl font-semibold mb-6 gradient-text">
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))',
                          animationDelay: `${(categoryIndex * 6 + skillIndex) * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
