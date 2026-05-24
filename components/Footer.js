export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gold-500/30">
                <img src="/images/logo-meyreles-white.jpg" alt="Dr. Díaz Meyreles" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Dr. Luis Díaz Meyreles</p>
                <p className="text-gold-500 text-xs">Odontología de Alto Nivel</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Especialista en estética dental e implantología. Transformando sonrisas con tecnología de punta.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {[
                { href: '#', label: 'Inicio' },
                { href: '#servicios', label: 'Servicios' },
                { href: '#tecnologia', label: 'Tecnología' },
                { href: '#galeria', label: 'Galería' },
                { href: '#contacto', label: 'Contacto' },
              ].map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/50 hover:text-gold-500 text-sm transition">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>Calle José Ramón López #6, Puerto Plata</li>
              <li>
                <a href="tel:18095520165" className="hover:text-gold-500 transition">(809) 552-0165</a>
              </li>
              <li>
                <a href="tel:18295202975" className="hover:text-gold-500 transition">(829) 520-2975</a>
              </li>
              <li>Lun-Vie 9AM-6PM | Sáb 9AM-1PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © 2026 Dr. Luis Díaz Meyreles. Todos los derechos reservados.
          </p>
          <p className="text-white/30 text-xs">
            Diseñado por <a href="https://veranomedia.digital" target="_blank" rel="noopener noreferrer" className="text-gold-500/60 hover:text-gold-500">Verano Media</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
