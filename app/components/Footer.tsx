import Link from "next/link"
import { GitlabIcon as GitHubIcon, Linkedin, Mail, Phone, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Mateus Lima Da Cruz</h3>
            <p className="text-muted-foreground mb-4">
              Engenheiro de Software especializado em desenvolvimento web e mobile, criando soluções inovadoras e
              eficientes.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/Mateuscruz19"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <GitHubIcon size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mateuscruz19/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="mailto:mateuscruz2077@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </Link>
              <Link href="tel:+5541990925856" className="text-muted-foreground hover:text-primary transition-colors">
                <Phone size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              <Link href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                Sobre
              </Link>
              <Link href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Projetos
              </Link>
              <Link href="#repositories" className="block text-muted-foreground hover:text-primary transition-colors">
                Repositórios
              </Link>
              <Link href="#experience" className="block text-muted-foreground hover:text-primary transition-colors">
                Experiência
              </Link>
              <Link href="#education" className="block text-muted-foreground hover:text-primary transition-colors">
                Educação
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Mais</h4>
            <nav className="space-y-2">
              <Link href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                Habilidades
              </Link>
              <Link href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contato
              </Link>
              <a href="/cv.pdf" download className="block text-muted-foreground hover:text-primary transition-colors">
                Baixar CV
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} Mateus Lima Da Cruz. Todos os direitos reservados.
          </p>
          <Button variant="outline" size="icon" asChild className="rounded-full">
            <a href="#" aria-label="Voltar ao topo">
              <ArrowUp size={16} />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}

