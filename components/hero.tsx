import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10 md:py-20">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Contenido de texto */}
          <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left w-full md:w-auto">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">Matias Sosa</h1>
              <p className="text-xl md:text-2xl text-muted-foreground">Desarrollador Web</p>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed md:mx-0 mx-auto">
              Soy Matias Sosa, desarrollador web en formación con enfoque práctico y estratégico. Este portfolio refleja mi evolución técnica en HTML, CSS, JavaScript y Git, junto con mi interés por conectar diseño, funcionalidad y experiencia de usuario.
            </p>

            <div className="flex gap-4 pt-4 justify-center md:justify-start">
              <Button variant="ghost" size="icon" asChild className="hover:bg-accent/10">
                <a href="https://github.com/MattuSosa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5 text-accent" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-accent/10">
                <a href="https://www.linkedin.com/in/matias-sosa-601539368" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 text-accent" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-accent/10">
                <a href="mailto:matisosa25.9@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5 text-accent" />
                </a>
              </Button>
            </div>

            {/* Imagen - solo visible en móvil (debajo del contenido) */}
            <div className="flex justify-center md:hidden pt-4">
              <div className="relative w-48 h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/Matias-foto.jpg"
                  alt="Matias Sosa"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Imagen - solo visible en desktop (derecha) */}
          <div className="hidden md:block flex-shrink-0">
            <div className="relative w-64 h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/Matias-foto.jpg"
                alt="Matias Sosa"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
