import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with cart functionality, user authentication, and payment integration.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team features.',
    techStack: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Weather Dashboard',
    description: 'A beautiful weather application that displays current conditions and forecasts using geolocation and weather APIs.',
    techStack: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Portfolio Generator',
    description: 'A tool that helps developers create beautiful portfolio websites with customizable templates and themes.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    title: 'Chat Application',
    description: 'Real-time chat application with private messaging, group chats, and file sharing capabilities.',
    techStack: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    title: 'Fitness Tracker',
    description: 'A comprehensive fitness tracking app with workout logging, progress charts, and goal setting features.',
    techStack: ['React', 'Firebase', 'Recharts', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">My Work</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of projects that showcase my skills in building modern web applications 
            with clean code and great user experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="p-6 pt-4">
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

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
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
