"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react"
import { useRef } from "react"

const experiences = [
  {
    title: "Engenheiro de Software Android Nativo",
    company: "CineCritic",
    period: "07/2023 – presente",
    description: "Desenvolvimento de uma rede social sobre filmes e séries ao estilo 'LetterBox'",
    achievements: [
      "Implementação do ciclo completo de desenvolvimento de software",
      "Desenvolvimento de sistemas de autenticação de usuários",
      "Criação de interfaces de gerenciamento de dados",
      "Otimização de performance e experiência do usuário",
    ],
    skills: ["NextJs", "Java", "PostgreSQL", "Android", "React"],
  },
  {
    title: "Full-Stack Developer",
    company: "Projetos Driven",
    period: "07/2022 – 07/2023",
    description: "Desenvolvimento de mais de 20 aplicações web completas",
    achievements: [
      "Criação de aplicações front-end e back-end com diferentes stacks",
      "Elaboração de testes unitários e de integração",
      "Estruturação de bancos de dados e integração com interfaces",
      "Colaboração em equipes ágeis usando metodologias Scrum",
    ],
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "MongoDB", "PostgreSQL"],
  },
]

export default function Experience() {
  const refs = useRef<(HTMLElement | null)[]>([])

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Experiência Profissional</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

        {/* Experience items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            })

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ${index % 2 === 0 ? "md:text-right" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>

                {/* Content */}
                <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`}>
                  <div className="card-container">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <Briefcase size={18} />
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                    </div>
                    <div className="text-lg font-medium mb-1">{exp.company}</div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <p className="mb-4">{exp.description}</p>
                    <div className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-primary mt-1 shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty column for layout */}
                <div className={index % 2 === 0 ? "md:col-start-2" : "md:col-start-1 md:hidden"}></div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

