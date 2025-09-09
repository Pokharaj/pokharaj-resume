import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Code2 } from "lucide-react"

const projects = [
  {
    title: "CAM Archive Logger",
    description: "CAM Archive Logger is a lightweight utility designed to securely store logs from applications that process sensitive data, including Personally Identifiable Information (PII). It helps applications retain logs for up to 30 days in compliance with data protection regulations. Logs can be accessed anytime within this period and are automatically deleted after 30 days. The application supports up to 60,000 transactions per second (TPS), ensuring high performance and reliability.",
    technologies: ["Java", "Spring Boot", "AWS Lambda", "AWS Batch", "AWS S3", "KMS", "Firehose", "SQS"],
    github: "https://github.com/pokharaj",
    demo: "https://cam-archive-logger.com",
    highlights: [
      "Handles up to 60,000 transactions per second",
      "Secure PII data processing with compliance standards",
      "Automated 30-day log retention and deletion",
      "High-performance AWS cloud-native architecture"
    ]
  },
  {
    title: "Water Loss Management (WLM) System",
    description: "The Water Loss Management System is focused on supporting water utilities in monitoring their infrastructure and optimizing their operations through advanced analytics. It targets the growing challenge of non-revenue water loss - treated drinking water that is lost due to leaks, theft, or other causes. It includes real-time leak detection, identification of pipe network assets at risk of failure, operational simulations, meter data analytics, and water quality monitoring.",
    technologies: ["Java", "Spring Boot", "MongoDB", "Microservices"],
    github: "https://github.com/pokharaj",
    demo: "https://demo-water-management.com",
    highlights: [
      "Real-time leak detection and monitoring",
      "Advanced analytics for water loss prevention",
      "Microservices architecture for scalability",
      "Integration of software and hardware systems"
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