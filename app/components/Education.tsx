"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, BookOpen, Calendar, MapPin } from "lucide-react"

const educations = [
  {
    title: "Bacharelado em Sistemas Da Informação",
    institution: "PUC-PR",
    location: "Curitiba, PR",
    period: "2024 – 2028",
    description:
      "Gerenciamento de desenvolvimento e implantação de sistemas de informação, identificação de novas oportunidades de negócios considerando as tecnologias mais adequadas.",
    type: "degree",
  },
  {
    title: "Bootcamp Full-Stack em Desenvolvimento Web",
    institution: "Driven Education",
    location: "Remoto",
    period: "07/2022 – 07/2023",
    description:
      "Formação intensiva baseada em práticas de mercado com experiência direta em projetos de desenvolvimento de software.",
    details: [
      "Projetos práticos com requisitos claros e prazos definidos",
      "Dinâmicas de trabalho em equipe, incluindo sprints semanais e reuniões diárias",
    ],
    type: "bootcamp",
  },
]

const additionalCourses = [
  {
    title: "Formação Java Academy",
    institution: "Ada Tech",
    period: "09/2023 – 10/2023",
    description:
      "Curso Spring com foco em filas assíncronas utilizando RabbitMQ e Kafka, e metodologias ágeis como Kanban e Scrum.",
    skills: ["Spring", "RabbitMQ", "Kafka", "Kanban", "Scrum"],
  },
  {
    title: "Formação Carreira No Mundo Mobile",
    institution: "Lucas Montano, Senior na Disney+",
    period: "09/2022 – 10/2023",
    description:
      "Treinamento completo em Kotlin e Android Nativo, desde o básico até os níveis mais complexos com suporte individual e projeto autoral verificado e publicado.",
    skills: ["Kotlin", "Android Nativo", "MVVM", "Firebase"],
  },
]

export default function Education() {
  const [mainRef, mainInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [additionalRef, additionalInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Educação</h2>

      <div ref={mainRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {educations.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={mainInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="h-full card-hover">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{edu.title}</CardTitle>
                    <CardDescription>{edu.institution}</CardDescription>
                  </div>
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p>{edu.description}</p>

                  {edu.details && (
                    <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                      {edu.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-6 text-center">Formações Complementares</h3>

      <div ref={additionalRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {additionalCourses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={additionalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full card-hover">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription>{course.institution}</CardDescription>
                  </div>
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span>{course.period}</span>
                  </div>

                  <p>{course.description}</p>

                  {course.skills && (
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

