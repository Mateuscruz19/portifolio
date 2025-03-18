"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    id: "languages",
    title: "Linguagens de Programação",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "Kotlin", level: 75 },
      { name: "HTML/CSS", level: 95 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks e Bibliotecas",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express", level: 85 },
      { name: "Spring", level: 75 },
      { name: "Android SDK", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "NestJs", level: 70 },
      { name: "React Native", level: 65 },
    ],
  },
  {
    id: "databases",
    title: "Bancos de Dados",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 80 },
      { name: "Firebase", level: 75 },
    ],
  },
  {
    id: "tools",
    title: "Ferramentas e Práticas",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Scrum/Kanban", level: 85 },
      { name: "Jest/Testing", level: 80 },
      { name: "RESTful APIs", level: 90 },
      { name: "Design Patterns", level: 85 },
      { name: "SOLID", level: 80 },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Habilidades</h2>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Tabs defaultValue="languages" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>Minhas habilidades em {category.title.toLowerCase()}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Inglês</CardTitle>
              <CardDescription>Certificado ETS TOEFL Junior English Standard 2017</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Overall Score</span>
                  <span className="text-primary font-medium">695</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  )
}

