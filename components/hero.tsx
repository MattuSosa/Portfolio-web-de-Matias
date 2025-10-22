import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">Tu Nombre</h1>
            <p className="text-xl md:text-2xl text-muted-foreground">Desarrollador Web</p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Construyo experiencias web accesibles y funcionales. Apasionado por crear interfaces limpias que combinan
            diseño y código de calidad.
          </p>

          <div className="flex gap-4 pt-4">
            <Button variant="ghost" size="icon" asChild className="hover:bg-accent/10">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-accent" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-accent/10">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-accent" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-accent/10">
              <a href="mailto:tu@email.com" aria-label="Email">
                <Mail className="h-5 w-5 text-accent" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
