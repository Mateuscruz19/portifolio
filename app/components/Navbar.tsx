"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun, GitlabIcon as GitHubIcon, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { name: "Sobre", href: "#about" },
    { name: "Projetos", href: "#projects" },
    { name: "Repositórios", href: "#repositories" },
    { name: "Experiência", href: "#experience" },
    { name: "Educação", href: "#education" },
    { name: "Habilidades", href: "#skills" },
    { name: "Contato", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold gradient-text">
            Mateus Cruz
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-2">
              <Link
                href="https://github.com/Mateuscruz19"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <GitHubIcon size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mateuscruz19/"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-2"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mr-2"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-foreground/80 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-border">
              <Link
                href="https://github.com/Mateuscruz19"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <GitHubIcon size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mateuscruz19/"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

