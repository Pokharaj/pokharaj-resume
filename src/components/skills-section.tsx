import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code2, 
  Database, 
  Cloud, 
  Layers, 
  Server, 
  Workflow,
  Cpu,
  Globe
} from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Java", "TypeScript", "JavaScript", "SQL", "Python"],
    color: "text-blue-500"
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: ["Spring Boot", "Spring Batch", "Angular", "React", "Node.js"],
    color: "text-green-500"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["Oracle Database", "MongoDB", "PostgreSQL", "Redis", "DynamoDB"],
    color: "text-purple-500"
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS Lambda", "AWS Batch", "Kubernetes", "Docker", "Jenkins"],
    color: "text-orange-500"
  },
  {
    title: "Architecture",
    icon: Server,
    skills: ["Microservices", "REST APIs", "Event-Driven", "Serverless", "SOA"],
    color: "text-teal-500"
  },
  {
    title: "Tools & Platforms",
    icon: Workflow,
    skills: ["Git", "JIRA", "Maven", "Gradle", "Postman"],
    color: "text-pink-500"
  }
]

export function SkillsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable, high-performance enterprise solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className="group bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-elegant hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-primary/10 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="outline" 
                        className="border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}