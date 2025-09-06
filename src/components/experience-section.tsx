import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Building, Calendar, MapPin, ChevronRight } from "lucide-react"

const experiences = [
  {
    id: "fidelity",
    company: "Fidelity Investments",
    position: "Lead - Software Engineering",
    duration: "Sep 2022 - Present",
    location: "Bangalore, India",
    logo: "🏦",
    achievements: [
      "Lead Backend Engineer specializing in Java, Spring Boot, and Oracle Database development",
      "Architected and implemented cloud-native solutions using AWS services including Lambda and Batch processing",
      "Designed and developed REST APIs for water loss management systems serving enterprise clients",
      "Optimized database performance through advanced SQL tuning and Oracle-specific optimizations",
      "Implemented automated testing strategies resulting in 95% code coverage and reduced deployment cycles",
      "Mentored junior developers and conducted technical interviews for backend engineering positions"
    ],
    technologies: ["Java", "Spring Boot", "Oracle Database", "AWS Lambda", "AWS Batch", "REST APIs", "Microservices"]
  },
  {
    id: "mindtree",
    company: "Mindtree Limited",
    position: "Senior Software Engineer",
    duration: "Aug 2020 - Sep 2022",
    location: "Bangalore, India", 
    logo: "🌳",
    achievements: [
      "Developed enterprise-grade applications using Java, Spring Boot, and MongoDB",
      "Implemented bulk data processing solutions using Spring Batch for high-volume transactions",
      "Built responsive web applications using Angular with Material Design components",
      "Collaborated with cross-functional teams to deliver scalable microservices architecture",
      "Participated in code reviews and maintained high coding standards across the team",
      "Contributed to technical documentation and knowledge sharing sessions"
    ],
    technologies: ["Java", "Spring Boot", "Spring Batch", "MongoDB", "Angular", "Material Design", "Microservices"]
  },
  {
    id: "ltimindtree",
    company: "LTIMindtree",
    position: "Software Engineer",
    duration: "Feb 2016 - Aug 2020",
    location: "Bangalore, India",
    logo: "💼",
    achievements: [
      "Developed and maintained Java-based enterprise applications for banking and financial services",
      "Worked extensively with SQL databases for data modeling and query optimization",
      "Participated in the full software development lifecycle from requirements gathering to deployment",
      "Implemented automated testing frameworks and CI/CD pipelines",
      "Collaborated with business analysts to translate requirements into technical solutions"
    ],
    technologies: ["Java", "SQL", "Oracle", "Spring Framework", "JUnit", "Maven", "Jenkins"]
  }
]

export function ExperienceSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            8+ years of building scalable enterprise solutions
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
          
          <Accordion type="multiple" className="space-y-8">
            {experiences.map((exp, index) => (
              <AccordionItem 
                key={exp.id} 
                value={exp.id}
                className="border-none"
              >
                <div className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow animate-pulse-glow" />
                  
                  <Card className="ml-16 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-elegant animate-slide-in-left"
                        style={{ animationDelay: `${index * 200}ms` }}>
                    <AccordionTrigger className="hover:no-underline p-0">
                      <CardHeader className="w-full">
                        <div className="flex items-start justify-between w-full">
                          <div className="flex items-start gap-4">
                            <div className="text-4xl">{exp.logo}</div>
                            <div className="text-left">
                              <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">
                                {exp.position}
                              </CardTitle>
                              <CardDescription className="text-lg font-medium text-primary mb-2">
                                {exp.company}
                              </CardDescription>
                              <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4" />
                                  {exp.duration}
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4" />
                                  {exp.location}
                                </div>
                              </div>
                            </div>
                          </div>
                          <ChevronRight className="h-5 w-5 text-muted-foreground group-data-[state=open]:rotate-90 transition-transform duration-300" />
                        </div>
                      </CardHeader>
                    </AccordionTrigger>
                    
                    <AccordionContent>
                      <CardContent className="pt-0">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-3 text-primary">Key Achievements</h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <Badge 
                                  key={tech}
                                  variant="outline" 
                                  className="border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </AccordionContent>
                  </Card>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}