import { ExternalLink, Github, Folder, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'Designed and developed a dynamic, multi-page portfolio with separate sections for Study, Skills, Experience, Projects, and Contact. Implemented reusable React components, client-side routing, and responsive layouts.',
    techStack: ['React.js', 'Tailwind CSS', 'Vercel'],
    year: '2025',
    highlights: [
      'Reusable React components',
      'Client-side routing',
      'Responsive layouts',
      'Performance optimization',
    ],
    github: 'https://github.com/farhan-riaz',
    live: 'https://my-portfolio-ten-puce-2j77r1y75d.vercel.app',
    featured: true,
  },
  {
    title: 'Spray Center Website',
    description: 'Developed a responsive business website for a spray shop with service listings and product showcases. Built and integrated backend REST APIs for managing products, bookings, and service details.',
    techStack: ['React.js', 'Node.js', 'SQL', 'Tailwind CSS'],
    year: '2025',
    highlights: [
      'Backend REST APIs',
      'CRUD operations',
      'State management',
      'Scalable architecture',
    ],
    github: 'https://github.com/farhan-riaz',
    live: null,
    featured: true,
  },
  {
    title: 'Kids Learning App',
    description: 'Built an interactive learning app for children featuring lessons, quizzes, and engaging visuals. Integrated Firebase Authentication for secure user access and Firestore for real-time data storage.',
    techStack: ['Flutter', 'Firebase Auth', 'Firestore'],
    year: '2025',
    highlights: [
      'Firebase Authentication',
      'Real-time Firestore',
      'Multi-screen navigation',
      'Modular architecture',
    ],
    github: 'https://github.com/farhan-riaz',
    live: null,
    featured: true,
  },
];

const additionalExperience = [
  'Authentication systems, form validation, and role-based access control',
  'REST API consumption using Axios and Fetch',
  'Modern UI/UX principles and mobile-first development',
  'Deploying applications and managing environments using Git-based workflows',
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">My Work</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">
            Project Experience
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real-world applications built using modern technologies and best practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="glass-card group hover-lift overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Header */}
              <div className="p-6 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="text-xs text-muted-foreground space-y-1 mb-4">
                  {project.highlights.slice(0, 3).map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Additional Experience */}
        <div className="glass-card p-6">
          <h3 className="font-display text-xl font-semibold mb-4 gradient-text">
            Additional Development Experience
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {additionalExperience.map((exp, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">{exp}</p>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/farhan-riaz" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
