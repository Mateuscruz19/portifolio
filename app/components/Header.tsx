import { GitlabIcon as GitHub, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">Mateus Lima Da Cruz</h1>
        <h2 className="text-2xl mb-4">Engenheiro de Software</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="mailto:mateuscruz2077@gmail.com" className="flex items-center gap-2">
            <Mail size={20} />
            mateuscruz2077@gmail.com
          </Link>
          <Link href="tel:+5541990925856" className="flex items-center gap-2">
            <Phone size={20} />
            +55 (41) 99092-5856
          </Link>
          <Link href="https://github.com/Mateuscruz19" className="flex items-center gap-2">
            <GitHub size={20} />
            @Mateuscruz19
          </Link>
          <Link href="https://www.linkedin.com/in/mateuscruz19/" className="flex items-center gap-2">
            <Linkedin size={20} />
            mateuscruz19
          </Link>
        </div>
      </div>
    </header>
  )
}

