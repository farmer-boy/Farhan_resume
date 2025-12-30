import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="font-display text-xl font-bold gradient-text">
              Farhan<span className="text-foreground">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Full-Stack Developer crafting digital experiences
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:farhan@example.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} Farhan. Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
