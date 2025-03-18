"use client"

import { useState, useEffect } from "react"
import { GitlabIcon as GitHubIcon, Linkedin, Mail, ChevronDown, Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-xl md:text-2xl font-medium text-primary">Olá, eu sou</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
                Mateus Lima <span className="gradient-text">Da Cruz</span>
              </h1>
              <h3 className="text-2xl md:text-3xl font-medium mt-4 text-foreground/80">Engenheiro de Software</h3>
            </div>
            <p className="text-lg text-muted-foreground">
              Desenvolvedor Full-Stack apaixonado por criar soluções inovadoras e eficientes. Especializado em
              JavaScript, TypeScript, Java, React e desenvolvimento Android.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#contact">Entre em contato</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Baixar CV
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 blur-3xl animate-float"></div>
              <div className="relative bg-card rounded-3xl shadow-xl overflow-hidden border border-border">
                <div className="p-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-destructive"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-xs text-muted-foreground">developer.profile</div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">// Perfil profissional</div>
                      <div className="font-mono">
                        <span className="text-blue-500">const</span> <span className="text-green-500">developer</span> ={" "}
                        {"{"}
                      </div>
                      <div className="font-mono pl-4">
                        <span className="text-purple-500">name</span>:{" "}
                        <span className="text-amber-500">'Mateus Lima Da Cruz'</span>,
                      </div>
                      <div className="font-mono pl-4">
                        <span className="text-purple-500">role</span>:{" "}
                        <span className="text-amber-500">'Engenheiro de Software'</span>,
                      </div>
                      <div className="font-mono pl-4">
                        <span className="text-purple-500">skills</span>: [
                        <span className="text-amber-500">'JavaScript'</span>,{" "}
                        <span className="text-amber-500">'TypeScript'</span>,{" "}
                        <span className="text-amber-500">'React'</span>, <span className="text-amber-500">'Java'</span>
                        ],
                      </div>
                      <div className="font-mono pl-4">
                        <span className="text-purple-500">experience</span>: <span className="text-orange-500">2</span>{" "}
                        + <span className="text-muted-foreground">// anos</span>
                      </div>
                      <div className="font-mono">{"}"}</div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">// Contato</div>
                      <div className="flex items-center gap-2">
                        <Mail size={16} className="text-primary" />
                        <span className="text-sm">mateuscruz2077@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GitHubIcon size={16} className="text-primary" />
                        <span className="text-sm">@Mateuscruz19</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Linkedin size={16} className="text-primary" />
                        <span className="text-sm">mateuscruz19</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-primary">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </div>
  )
}

