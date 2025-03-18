"use client"

import React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Code2, Laptop, Lightbulb, Rocket, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

const qualities = [
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    title: "Desenvolvimento Full-Stack",
    description: "Experiência em desenvolvimento front-end e back-end, criando aplicações web e mobile completas.",
  },
  {
    icon: <Laptop className="h-8 w-8 text-primary" />,
    title: "Desenvolvimento Mobile",
    description: "Especializado em desenvolvimento Android nativo com Kotlin e Java.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Resolução de Problemas",
    description: "Habilidade para encontrar soluções criativas e eficientes para desafios complexos.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Aprendizado Rápido",
    description: "Capacidade de aprender novas tecnologias e metodologias rapidamente.",
  },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const qualityRefs = useRef<(HTMLElement | null)[]>([])

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">Sobre Mim</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <div className="card-container">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">Quem sou eu</h3>
            <div className="space-y-4 text-lg">
              <p>
                Sou um Engenheiro de Software apaixonado por desenvolvimento web e mobile, com experiência em diversas
                tecnologias e metodologias ágeis. Minha jornada no mundo da programação começou com a curiosidade de
                entender como as coisas funcionam por trás das telas, e desde então, venho construindo soluções
                inovadoras e eficientes.
              </p>
              <p>
                Tenho experiência no desenvolvimento de aplicações web completas, desde o front-end até o back-end,
                utilizando tecnologias modernas como React, Next.js, Node.js e bancos de dados como PostgreSQL e
                MongoDB. Além disso, possuo conhecimentos em desenvolvimento Android nativo com Kotlin e Java.
              </p>
              <p>
                Estou sempre em busca de novos desafios e oportunidades para aprender e crescer na área de tecnologia.
                Minha abordagem combina criatividade com pensamento analítico, permitindo-me desenvolver soluções que
                não apenas atendem às necessidades técnicas, mas também proporcionam excelentes experiências aos
                usuários.
              </p>
            </div>
            <div className="mt-6">
              <Button asChild>
                <Link href="#projects">
                  Ver meus projetos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="space-y-4">
          {qualities.map((quality, index) => {
            return <QualityItem key={index} quality={quality} index={index} qualityRefs={qualityRefs} />
          })}
        </div>
      </div>
    </section>
  )
}

interface QualityItemProps {
  quality: {
    icon: React.ReactNode
    title: string
    description: string
  }
  index: number
  qualityRefs: React.MutableRefObject<(HTMLElement | null)[]>
}

const QualityItem: React.FC<QualityItemProps> = ({ quality, index, qualityRefs }) => {
  const [qualityInView, setQualityInView] = React.useState(false)
  const qualityRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setQualityInView(true)
          observer.unobserve(qualityRef.current!)
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (qualityRef.current) {
      observer.observe(qualityRef.current)
    }

    return () => {
      if (qualityRef.current) {
        observer.unobserve(qualityRef.current)
      }
    }
  }, [])

  return (
    <motion.div
      ref={qualityRef}
      initial={{ opacity: 0, x: 20 }}
      animate={qualityInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="card-container">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-primary/10 rounded-lg">{quality.icon}</div>
          <div>
            <h4 className="text-lg font-semibold">{quality.title}</h4>
            <p className="text-muted-foreground">{quality.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

