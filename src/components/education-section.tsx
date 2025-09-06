import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

const education = [
  {
    institution: "CDAC-ACTS, Bangalore",
    degree: "P.G. Diploma",
    field: "Computer Applications and Technology",
    duration: "2017",
    location: "Bangalore, India",
    logo: "🎓",
    highlights: [
      "Graduated with 78.20% marks",
      "Advanced diploma program in computer applications and technology",
      "Focus on practical software development skills",
      "Specialized training in enterprise application development"
    ]
  },
  {
    institution: "CSVTU Bhilai",
    degree: "B.E. Computer Science",
    field: "Computer Science & Engineering",
    duration: "2016",
    location: "Bhilai, India",
    logo: "🎓",
    highlights: [
      "Graduated with 72.47% marks",
      "Bachelor of Engineering in Computer Science with focus on software engineering",
      "Strong foundation in computer systems and programming",
      "Coursework in Data Structures, Algorithms, and Database Systems"
    ]
  }
]

export function EducationSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-muted-foreground">
            Academic foundation in Computer Science & Engineering
          </p>
        </div>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={edu.institution}
              className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-elegant hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{edu.logo}</div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2 text-primary">
                      {edu.institution}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium mb-3">
                      {edu.degree} in {edu.field}
                    </CardDescription>
                    <div className="flex flex-col md:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      Academic Highlights
                    </h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}