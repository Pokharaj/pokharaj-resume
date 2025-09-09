import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, MapPin, ChevronRight, BriefcaseBusiness } from "lucide-react"

const experiences = [
  {
    id: "fidelity",
    company: "Fidelity Investments",
    position: "Lead - Software Engineering",
    duration: "Sep 2022 - Present",
    location: "Bangalore, India",
    achievements: [
      "Lead Backend Engineer specializing in Java, Spring Boot, and Oracle Database development",
      "Architected and implemented cloud-native solutions using AWS services including Lambda and Batch processing",
      "Led software development initiatives with focus on feature development, debugging, testing, and deployment processes",
      "Mentored development teams and established best practices for enterprise-level applications",
      "Implemented robust testing strategies and CI/CD pipelines for reliable software delivery"
    ],
    technologies: ["Java", "Spring Boot", "Oracle Database", "AWS", "Lambda", "AWS Batch"]
  },
  {
    id: "xylem",
    company: "Xylem Water Solutions",
    position: "Senior Engineer",
    duration: "Apr 2020 - Sep 2022",
    location: "Bangalore, India",
    achievements: [
      "Led backend development using Java and MongoDB for water loss management system project",
      "Performed comprehensive software development, testing, and debugging processes",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Mentored junior developers and conducted code reviews to maintain code quality",
      "Utilized strong analytical and problem-solving skills for system optimization"
    ],
    technologies: ["Java", "MongoDB", "Spring Boot", "Hibernate", "Microservices", "REST APIs"]
  },
  {
    id: "mindtree",
    company: "Mindtree Limited",
    position: "Senior Software Engineer",
    duration: "Mar 2019 - Mar 2020",
    location: "Bangalore, India",
    achievements: [
      "Developed full-stack applications using Java and Angular frameworks",
      "Implemented responsive web interfaces and backend services",
      "Worked with agile methodologies and participated in sprint planning",
      "Performed software design, development, testing, and debugging activities",
      "Collaborated with team members to deliver project milestones on time",
      "Applied strong knowledge of data structures and databases in development"
    ],
    technologies: ["Java", "Angular", "Spring Framework", "Hibernate", "JavaScript", "HTML/CSS"]
  },
  {
    id: "chainalytics",
    company: "Chainalytics",
    position: "Junior Software Developer",
    duration: "Mar 2017 - Mar 2019",
    location: "Bangalore, India",
    achievements: [
      "Developed full-stack applications using Java, C#, and web technologies",
      "Participated in software development, testing, and debugging processes",
      "Learned best practices in software design and industry standards",
      "Contributed to team documentation and knowledge sharing initiatives",
      "Applied fundamental knowledge of data structures and SQL in development"
    ],
    technologies: ["Java", "C#", "JavaScript", "HTML/CSS", "SQL Server", "JSON"]
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
                            <div className="text-4xl"><BriefcaseBusiness /></div>
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