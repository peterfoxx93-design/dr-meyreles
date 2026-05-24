import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#tecnologia', label: 'Tecnología' },
    { href: '#galeria', label: 'Galería' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-gold-500/30">
              <img src="/images/logo-meyreles.jpg" alt="Dr. Díaz Meyreles" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-semibold text-sm leading-tight">Dr. Luis Díaz Meyreles</p>
              <p className="text-gold-500 text-xs">Odontología de Alto Nivel</p>
            </div>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-white/80 hover:text-gold-500 transition text-sm font-medium">
                {l.label}
              </a>
            ))}
            <a href="https://wa.me/18095520165?text=¡Hola!+Quisiera+agendar+una+cita+con+el+Dr.+Díaz+Meyreles" 
               target="_blank" rel="noopener noreferrer"
               className="gold-gradient text-navy-900 font-semibold px-5 py-2.5 rounded-full text-sm hover:opacity-90 transition">
              Agendar Cita
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-6">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                 className="block text-white/80 hover:text-gold-500 py-3 text-sm transition">
                {l.label}
              </a>
            ))}
            <a href="https://wa.me/18095520165?text=¡Hola!+Quisiera+agendar+una+cita+con+el+Dr.+Díaz+Meyreles"
               target="_blank" rel="noopener noreferrer"
               className="gold-gradient text-navy-900 font-semibold px-5 py-2.5 rounded-full text-sm inline-block mt-3">
              Agendar Cita
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
