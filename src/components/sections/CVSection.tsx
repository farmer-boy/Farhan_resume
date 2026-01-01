import { Download, FileText, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CVSection = () => {
  const handleDownload = (filePath: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="cv" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Documents</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">
            Download CV
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Download my resume and cover letter to learn more about my experience and qualifications.
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Resume Card */}
          <div className="glass-card p-8 hover-lift group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                  Resume
                </h3>
                <p className="text-sm text-muted-foreground">
                  Professional resume
                </p>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Download my comprehensive resume detailing my skills, experience, education, and professional achievements.
            </p>

            <Button
              variant="hero"
              size="lg"
              className="w-full"
              onClick={() => handleDownload('/resume.pdf', 'Farhan_Riaz_Resume.pdf')}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Cover Letter Card */}
          <div className="glass-card p-8 hover-lift group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                  Cover Letter
                </h3>
                <p className="text-sm text-muted-foreground">
                  Professional cover letter
                </p>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Download my cover letter that highlights my passion, motivation, and how I can contribute to your team.
            </p>

            <Button
              variant="heroOutline"
              size="lg"
              className="w-full"
              onClick={() => handleDownload('/letter.pdf', 'Farhan_Riaz_Cover_Letter.pdf')}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Cover Letter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;

