import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:pokhraj.patel0705@gmail.com",
      ariaLabel: "Send email to Pokharaj"
    },
    {
      icon: Phone,
      label: "Phone",
      href: "tel:+918050101967",
      ariaLabel: "Call Pokharaj"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pokharaj-25aa19112/",
      ariaLabel: "Visit Pokharaj's LinkedIn profile"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/pokharaj",
      ariaLabel: "Visit Pokharaj's GitHub profile"
    },
    {
      icon: MapPin,
      label: "Location",
      href: "#",
      ariaLabel: "Pokharaj's location: Bangalore, India"
    }
  ]

  return (
    <footer className="bg-muted/30 border-t border-border" role="contentinfo">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-poppins font-semibold text-lg text-foreground mb-1">
              Pokharaj
            </h3>
            <p className="text-muted-foreground text-sm">
              Lead Software Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const IconComponent = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group p-3 rounded-lg bg-card hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300 focus-visible"
                  aria-label={link.ariaLabel}
                  {...(link.href === "#" && { role: "button", tabIndex: 0 })}
                >
                  <IconComponent className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Pokharaj. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}