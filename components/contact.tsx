import { Github, Linkedin, Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="py-10 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-6 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-accent">Contacto</h2>
          <div className="w-16 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="max-w-2xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Redes Sociales</h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/MattuSosa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-card/80 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Github className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-foreground">github.com/MattuSosa</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/matias-sosa-601539368"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-card/80 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-foreground">linkedin.com/in/matias-sosa-601539368</span>
                </a>
                <a
                  href="mailto:matisosa25.9@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-card/80 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-foreground">matisosa25.9@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
