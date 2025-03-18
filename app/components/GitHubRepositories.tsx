"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GitlabIcon as GitHubIcon, Star, GitFork, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const repositories = [
  {
    name: "CineCritic",
    description: "A social network for movie and TV show enthusiasts",
    stars: 15,
    forks: 3,
    language: "TypeScript",
    languageColor: "#3178c6",
    url: "https://github.com/Mateuscruz19/CineCritic",
  },
  {
    name: "driven-projects",
    description: "A collection of projects developed during the Driven bootcamp",
    stars: 10,
    forks: 2,
    language: "JavaScript",
    languageColor: "#f7df1e",
    url: "https://github.com/Mateuscruz19/driven-projects",
  },
  {
    name: "JavaAcademy",
    description: "Projects and exercises from the Java Academy course",
    stars: 8,
    forks: 1,
    language: "Java",
    languageColor: "#b07219",
    url: "https://github.com/Mateuscruz19/JavaAcademy",
  },
  {
    name: "AndroidNativeProjects",
    description: "A showcase of Android native projects",
    stars: 12,
    forks: 4,
    language: "Kotlin",
    languageColor: "#A97BFF",
    url: "https://github.com/Mateuscruz19/AndroidNativeProjects",
  },
  {
    name: "NextJsPortfolio",
    description: "My personal portfolio built with Next.js",
    stars: 7,
    forks: 2,
    language: "TypeScript",
    languageColor: "#3178c6",
    url: "https://github.com/Mateuscruz19/NextJsPortfolio",
  },
  {
    name: "DataStructuresAlgorithms",
    description: "Implementation of various data structures and algorithms",
    stars: 9,
    forks: 3,
    language: "Java",
    languageColor: "#b07219",
    url: "https://github.com/Mateuscruz19/DataStructuresAlgorithms",
  },
]

export default function GitHubRepositories() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="repositories" className="section-container">
      <h2 className="section-title">Principais Repositórios no GitHub</h2>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repositories.map((repo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col card-hover">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <GitHubIcon size={20} className="text-primary" />
                    <CardTitle className="text-lg">{repo.name}</CardTitle>
                  </div>
                  <Link href={repo.url} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </Link>
                </div>
                <CardDescription className="line-clamp-2">{repo.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center gap-2">
                  <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  ></span>
                  <span className="text-sm">{repo.language}</span>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-sm">
                      <Star size={16} className="text-amber-400" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1 text-sm">
                      <GitFork size={16} className="text-muted-foreground" />
                      {repo.forks}
                    </span>
                  </div>
                  <Link href={repo.url} className="text-primary hover:underline text-sm">
                    Ver repositório
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="https://github.com/Mateuscruz19?tab=repositories"
          className="text-primary hover:underline inline-flex items-center gap-2"
        >
          Ver todos os repositórios <ExternalLink size={16} />
        </Link>
      </div>
    </section>
  )
}

