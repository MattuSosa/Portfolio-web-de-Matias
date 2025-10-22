"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Form submitted:", formData)
    alert("¡Mensaje enviado! (Esta es una demo)")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-accent">Contacto</h2>
          <div className="w-16 h-1 bg-accent rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            ¿Tienes un proyecto en mente? Me encantaría saber de ti.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Enviar Mensaje
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Redes Sociales</h3>
              <div className="space-y-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-card/80 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Github className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-foreground">github.com/tuusuario</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-card/80 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-foreground">linkedin.com/in/tuusuario</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-card/80 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Twitter className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-foreground">@tuusuario</span>
                </a>
                <a
                  href="mailto:tu@email.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-card/80 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-foreground">tu@email.com</span>
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Actualmente disponible para proyectos freelance y oportunidades de colaboración. Respondo en menos de 24
                horas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
