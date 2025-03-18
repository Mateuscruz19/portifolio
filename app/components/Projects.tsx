"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GitlabIcon as GitHubIcon, ExternalLink, Folder } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "CineCritic",
    description: "Rede social sobre filmes e séries ao estilo 'LetterBox'",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Java", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/Mateuscruz19/CineCritic",
    live: "https://cinecritic.vercel.app",
    featured: true,
  },
  {
    title: "Projetos Driven",
    description: "Coleção de mais de 20 aplicações web completas desenvolvidas durante o bootcamp Driven",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    github: "https://github.com/Mateuscruz19/driven-projects",
    live: "https://driven-projects.vercel.app",
    featured: true,
  },
  {
    title: "Android Native App",
    description: "Aplicativo Android nativo desenvolvido com Kotlin e Java",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Kotlin", "Java", "Android SDK", "Firebase"],
    github: "https://github.com/Mateuscruz19/AndroidNativeProjects",
    live: null,
    featured: false,
  },
  {
    title: "Portfolio Website",
    description: "Site de portfólio pessoal desenvolvido com Next.js e Tailwind CSS",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Mateuscruz19/portfolio",
    live: "https://mateuscruz.dev",
    featured: false,
  },
]

export default function Projects() {
  const [featuredRef, featuredInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [otherRef, otherInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Projetos Destacados</h2>

      <div ref={featuredRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="card-container h-full flex flex-col">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-video bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github} className="flex items-center gap-2">
                      <GitHubIcon size={16} />
                      Código
                    </Link>
                  </Button>
                  {project.live && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.live} className="flex items-center gap-2">
                        <ExternalLink size={16} />
                        Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-6 text-center">Outros Projetos</h3>

      <div ref={otherRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={otherInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="card-container h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Folder size={24} className="text-primary" />
                </div>
                <div className="flex gap-2">
                  <Link href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <GitHubIcon size={20} />
                  </Link>
                  {project.live && (
                    <Link href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                    </Link>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

