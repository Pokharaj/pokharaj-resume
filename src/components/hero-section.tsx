import { Button } from "@/components/ui/button"
import { Download, Github, ArrowRight } from "lucide-react"

export function HeroSection() {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume-pokharaj.pdf'
    link.download = 'Pokharaj_Resume.pdf'
    link.click()
  }

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
      role="banner"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-ring" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-ring" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Main Content */}
      <div 
        id="main-content" 
        className="relative z-10 container-custom text-center"
        tabIndex={-1}
      >
        <div className="animate-fade-in max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-glow ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-500 group">
            <img 
              src="/lovable-uploads/17852e0c-4ee8-49df-b9ce-1b066111a64c.png" 
              alt="Pokharaj - Professional headshot of Lead Software Engineer" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="eager"
            />
          </div>
          
          {/* Name and Title */}
          <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
            Pokharaj
          </h1>
          
          <div className="mb-6">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-lg">
              Lead Software Engineer
            </span>
          </div>
          
          {/* Value Proposition */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Transforming complex business requirements into scalable enterprise solutions with <strong className="text-foreground">8+ years</strong> of expertise in Java, Spring Boot, and cloud technologies.
          </p>
          
          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              onClick={handleDownloadResume}
              size="lg" 
              className="btn-primary text-lg px-8 py-4 font-semibold"
              aria-label="Download Pokharaj's resume as PDF"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button 
              onClick={scrollToProjects}
              variant="outline" 
              size="lg"
              className="btn-secondary text-lg px-8 py-4 font-semibold"
              aria-label="View featured projects section"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center p-4 rounded-lg bg-card/30 border border-border/50 hover:bg-card/50 transition-all duration-300">
              <div className="text-2xl font-bold text-primary mb-1">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/30 border border-border/50 hover:bg-card/50 transition-all duration-300">
              <div className="text-2xl font-bold text-primary mb-1">4</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/30 border border-border/50 hover:bg-card/50 transition-all duration-300">
              <div className="text-2xl font-bold text-primary mb-1">2</div>
              <div className="text-sm text-muted-foreground">Featured Projects</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/30 border border-border/50 hover:bg-card/50 transition-all duration-300">
              <div className="text-2xl font-bold text-primary mb-1">60k+</div>
              <div className="text-sm text-muted-foreground">TPS Handled</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}