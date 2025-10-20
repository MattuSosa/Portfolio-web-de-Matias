import { Code2, Database, Layout, Palette, Server, Smartphone } from "lucide-react"

const skills = [
  {
    icon: Layout,
    name: "HTML & CSS",
    description: "Estructura y estilos web",
  },
  {
    icon: Code2,
    name: "JavaScript",
    description: "Programación frontend",
  },
  {
    icon: Palette,
    name: "React",
    description: "Componentes interactivos",
  },
  {
    icon: Server,
    name: "Node.js",
    description: "Backend y APIs",
  },
  {
    icon: Database,
    name: "Bases de Datos",
    description: "SQL y NoSQL",
  },
  {
    icon: Smartphone,
    name: "Diseño Responsivo",
    description: "Mobile-first",
  },
]

export function Skills() {
  return (
    <section id="habilidades" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Habilidades</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Tecnologías y herramientas que utilizo para crear aplicaciones web.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg bg-card hover:shadow-md transition-shadow"
              >
                <div className="p-3 rounded-lg bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
