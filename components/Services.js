const services = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 4.5C8.5 4.5 5 7 5 12s3.5 7.5 7 7.5 7-3.5 7-7.5S15.5 4.5 12 4.5z"/>
        <path d="M12 8v4l2.5 2.5"/>
      </svg>
    ),
    title: 'Implantología',
    desc: 'Implantes dentales de última generación. Desde la carga inmediata hasta rehabilitaciones completas con tecnología corticobasal.',
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3c-1.5 0-3 1-3 3s1.5 3 3 3 3-1 3-3-1.5-3-3-3z"/>
        <path d="M8 21c0-2 1.8-4 4-4s4 2 4 4"/>
      </svg>
    ),
    title: 'Estética Dental',
    desc: 'Diseño de sonrisa, carillas, blanqueamiento y armonización facial. Resultados naturales y transformadores.',
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M9 12h6M12 9v6"/>
      </svg>
    ),
    title: 'Rehabilitación Oral',
    desc: 'Prótesis híbridas, coronas, puentes y full mouth. Restauramos función y estética con materiales premium.',
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 7v5l3 3"/>
      </svg>
    ),
    title: 'Odontología Integral',
    desc: 'Atención completa para toda la familia. Endodoncia, periodoncia, ortodoncia y más en un solo lugar.',
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 7V4h16v3"/>
        <path d="M9 20h6"/>
        <path d="M12 4v16"/>
      </svg>
    ),
    title: 'Cirugía Oral',
    desc: 'Cirugía de terceros molares, extracciones complejas y procedimientos quirúrgicos avanzados con sedación.',
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Tecnología Digital',
    desc: 'Escáner intraoral CBCT, diseño CAD exocad y fresado de precisión para tratamientos predecibles.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="gold-gradient text-navy-900 text-xs font-semibold px-4 py-1.5 rounded-full inline-block mb-4">
            Nuestra Experiencia
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Servicios <span className="text-gradient">Especializados</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Ofrecemos un enfoque integral con las técnicas más avanzadas en odontología moderna.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i}
                 className="group bg-navy-900/50 border border-white/5 rounded-2xl p-8 hover:border-gold-500/30 transition-all duration-500 hover:translate-y-[-4px]">
              <div className="w-14 h-14 rounded-xl gold-gradient text-navy-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">{s.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
