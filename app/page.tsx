import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import GitHubRepositories from "./components/GitHubRepositories"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <main className="container mx-auto px-4 py-16">
        <About />
        <Experience />
        <Projects />
        <GitHubRepositories />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

