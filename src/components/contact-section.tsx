import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageSquare } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    })
    
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pokhraj.patel0705@gmail.com",
      href: "mailto:pokhraj.patel0705@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8050101967",
      href: "tel:+918050101967"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      href: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/pokharaj",
      href: "https://linkedin.com/in/pokharaj"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/pokharaj",
      href: "https://github.com/pokharaj"
    }
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss opportunities or collaborate on exciting projects? 
            I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-primary" />
                Send a Message
              </CardTitle>
              <CardDescription className="text-base">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="border-primary/20 focus:border-primary/50 transition-colors duration-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="border-primary/20 focus:border-primary/50 transition-colors duration-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    className="border-primary/20 focus:border-primary/50 transition-colors duration-300 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-accent hover:shadow-glow transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
                <CardDescription className="text-base">
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon
                    return (
                      <div 
                        key={contact.label}
                        className="flex items-center gap-4 p-3 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
                      >
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-primary">{contact.label}</p>
                          {contact.href !== "#" ? (
                            <a 
                              href={contact.href}
                              className="text-muted-foreground hover:text-primary transition-colors duration-300"
                              target={contact.href.startsWith('http') ? '_blank' : undefined}
                              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
            
            {/* Quick Action Card */}
            <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-elegant">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Ready to get started?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how we can work together to build something amazing.
                </p>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:pokhraj.patel0705@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Me
                    </a>
                  </Button>
                  <Button 
                    className="flex-1 bg-gradient-accent hover:shadow-glow transition-all duration-300"
                    asChild
                  >
                    <a href="https://linkedin.com/in/pokharaj" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}