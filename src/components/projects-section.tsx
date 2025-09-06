import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Code2 } from "lucide-react"

const projects = [
  {
    title: "Water Loss Management System",
    description: "Enterprise-grade application for monitoring and managing water distribution systems with real-time analytics and automated reporting capabilities.",
    image: "💧",
    technologies: ["Java", "Spring Boot", "Oracle Database", "AWS Lambda", "REST APIs"],
    github: "https://github.com/pokharaj/water-management",
    demo: "https://water-management-demo.com",
    highlights: [
      "Real-time monitoring of water distribution networks",
      "Automated leak detection and alerting system",
      "Performance analytics dashboard",
      "Scalable microservices architecture"
    ]
  },
  {
    title: "Bulk Data Processing Engine",
    description: "High-performance data processing system using Spring Batch for handling large-scale enterprise data migrations and transformations.",
    image: "⚡",
    technologies: ["Java", "Spring Batch", "MongoDB", "AWS Batch", "Microservices"],
    github: "https://github.com/pokharaj/data-processor",
    demo: "https://data-processor-demo.com",
    highlights: [
      "Process millions of records efficiently",
      "Fault-tolerant batch processing",
      "Configurable data transformation pipelines",
      "Real-time processing status monitoring"
    ]
  },
  {
    title: "Enterprise Web Application",
    description: "Modern responsive web application built with Angular and Material Design, featuring advanced user management and reporting capabilities.",
    image: "🌐",
    technologies: ["Angular", "TypeScript", "Material Design", "REST APIs", "MongoDB"],
    github: "https://github.com/pokharaj/enterprise-app",
    demo: "https://enterprise-app-demo.com",
    highlights: [
      "Responsive Material Design interface",
      "Advanced user role management",
      "Interactive data visualization",
      "Progressive Web App features"
    ]
  },
  {
    title: "Microservices Architecture Platform",
    description: "Scalable microservices platform with service discovery, API gateway, and distributed monitoring for enterprise applications.",
    image: "🏗️",
    technologies: ["Java", "Spring Boot", "Kubernetes", "Docker", "AWS"],
    github: "https://github.com/pokharaj/microservices-platform",
    demo: "https://microservices-platform-demo.com",
    highlights: [
      "Container orchestration with Kubernetes",
      "Service mesh implementation",
      "Distributed tracing and monitoring",
      "Auto-scaling and load balancing"
    ]
  }
]

export function ProjectsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of enterprise-grade solutions and innovative applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-elegant hover:scale-[1.02] animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center overflow-hidden">
                <div className="text-8xl group-hover:scale-110 transition-transform duration-500">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                  <Code2 className="h-5 w-5" />
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Key Highlights */}
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Key Features</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline" 
                        className="text-xs border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-gradient-accent hover:shadow-glow transition-all duration-300"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}