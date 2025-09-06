import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Linkedin, Github, Download, ExternalLink } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import heroBackground from "@/assets/hero-bg.jpg"


export function HeroSection() {
  const handleDownloadResume = () => {
    // Create a temporary link to download resume
    const link = document.createElement('a');
    link.href = '/resume-pokharaj.pdf'; // You'd place the actual resume PDF in public folder
    link.download = 'Pokharaj_Resume.pdf';
    link.click();
  };

  const handleViewProjects = () => {
    // Create a temporary link to download resume
    const link = document.createElement('a');
    link.href = 'https://github.com/Pokharaj'; // You'd place the actual resume PDF in public folder
    link.target = '_blank';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
      
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-glow ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-300">
            <img 
              src="/lovable-uploads/17852e0c-4ee8-49df-b9ce-1b066111a64c.png" 
              alt="Pokharaj - Lead Software Engineer" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Pokharaj
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Badge variant="outline" className="px-4 py-2 text-lg border-primary/30 bg-primary/10">
              Lead Software Engineer
            </Badge>
          </div>
          
          {/* Bio */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Experienced Senior Backend Engineer with 8+ years of expertise in Java development 
            and enterprise software solutions. Specialized in Spring Boot, MongoDB, Angular, 
            and microservices architecture.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              onClick={handleDownloadResume}
              size="lg" 
              className="bg-gradient-accent hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              onClick={handleViewProjects}
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            >
              View Projects
              <ExternalLink className="ml-2 h-5 w-5"/>
            </Button>
          </div>
          
          {/* Contact Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-2xl mx-auto">
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 group cursor-pointer">
              <a href="mailto:pokhraj.patel0705@gmail.com" className="flex flex-col items-center gap-2">
                <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs font-medium">Email</span>
              </a>
            </Card>
            
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 group cursor-pointer">
              <a href="tel:+918050101967" className="flex flex-col items-center gap-2">
                <Phone className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs font-medium">Phone</span>
              </a>
            </Card>
            
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 group cursor-pointer">
              <div className="flex flex-col items-center gap-2">
                <MapPin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs font-medium">Bangalore</span>
              </div>
            </Card>
            
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 group cursor-pointer">
              <a href="https://www.linkedin.com/in/pokharaj-25aa19112/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
                <Linkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs font-medium">LinkedIn</span>
              </a>
            </Card>
            
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 group cursor-pointer">
              <a href="https://github.com/pokharaj" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
                <Github className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs font-medium">GitHub</span>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}