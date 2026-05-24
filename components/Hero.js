export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden">
      {/* Background tech pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 border border-gold-500/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-gold-500/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold-500/10 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - text */}
          <div className="animate-fade-in-up">
            <span className="gold-gradient text-navy-900 text-xs font-semibold px-4 py-1.5 rounded-full inline-block mb-6">
              Odontología de Alto Nivel
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Tu Sonrisa,{' '}
              <span className="text-gradient">Nuestro Compromiso</span>
            </h1>
            <p className="text-white/70 text-lg mb-8 max-w-lg">
              Especialista en implantología, estética dental y rehabilitación oral. 
              Transformamos sonrisas con tecnología de punta y un enfoque humano.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/18095520165?text=¡Hola!+Quisiera+agendar+una+cita+con+el+Dr.+Díaz+Meyreles"
                 target="_blank" rel="noopener noreferrer"
                 className="gold-gradient text-navy-900 font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition text-lg inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Agendar Cita
              </a>
              <a href="#servicios"
                 className="border border-gold-500/50 text-gold-500 px-8 py-3.5 rounded-full hover:bg-gold-500/10 transition text-lg">
                Ver Servicios
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
              <div>
                <p className="text-gold-500 text-2xl font-bold">15+</p>
                <p className="text-white/50 text-xs">Años de experiencia</p>
              </div>
              <div>
                <p className="text-gold-500 text-2xl font-bold">3,000+</p>
                <p className="text-white/50 text-xs">Pacientes atendidos</p>
              </div>
              <div>
                <p className="text-gold-500 text-2xl font-bold">2,967</p>
                <p className="text-white/50 text-xs">Seguidores</p>
              </div>
            </div>
          </div>

          {/* Right side - logo/image */}
          <div className="animate-fade-in-up-delay flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-gold-500/30 animate-gold-pulse">
                <img src="/images/logo-meyreles.jpg" alt="Dr. Luis Díaz Meyreles" className="w-full h-full object-cover" />
              </div>
              {/* Floating tech rings */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-gold-500/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-gold-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <svg className="w-6 h-6 text-gold-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
