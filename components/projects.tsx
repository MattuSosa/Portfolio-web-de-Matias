import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Sistema de Gestión Académica",
    description:
      "Aplicación web para gestionar estudiantes, cursos y calificaciones. Incluye panel de administración y reportes.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "E-commerce de Productos",
    description: "Tienda online con carrito de compras, sistema de pagos y gestión de inventario.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Blog Personal",
    description: "Blog con sistema de comentarios, categorías y búsqueda. Diseño responsivo y optimizado para SEO.",
    technologies: ["Next.js", "Markdown", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Dashboard de Analíticas",
    description: "Panel interactivo con gráficos y visualización de datos en tiempo real.",
    technologies: ["React", "Chart.js", "Firebase", "Material UI"],
    link: "#",
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-accent">Proyectos Académicos</h2>
          <div className="w-16 h-1 bg-accent rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Una selección de proyectos desarrollados durante mi formación como desarrollador web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">{project.title}</CardTitle>
                  <a
                    href={project.link}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`Ver proyecto ${project.title}`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <CardDescription className="leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
