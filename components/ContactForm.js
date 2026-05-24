export default function ContactForm() {
  return (
    <section id="contacto" className="py-24 bg-navy-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="gold-gradient text-navy-900 text-xs font-semibold px-4 py-1.5 rounded-full inline-block mb-4">
            Contáctanos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Solicita tu <span className="text-gradient">Cita</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Déjanos tus datos y te contactaremos para agendar tu consulta.
          </p>
        </div>

        <div className="bg-navy-800/50 border border-white/5 rounded-2xl p-8 md:p-12">
          <form onSubmit={(e) => {
            e.preventDefault()
            const form = e.target
            const nombre = form.nombre.value
            const telefono = form.telefono.value
            const mensaje = form.mensaje.value
            const text = `¡Hola! Soy ${nombre}, teléfono: ${telefono}. ${mensaje ? 'Mensaje: ' + mensaje : 'Quisiera agendar una cita.'}`
            window.open(`https://wa.me/18095520165?text=${encodeURIComponent(text)}`, '_blank')
          }}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white/70 text-sm mb-2">Nombre completo</label>
                <input type="text" name="nombre" required
                       className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-gold-500/50 focus:outline-none transition"
                       placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Teléfono / WhatsApp</label>
                <input type="tel" name="telefono" required
                       className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-gold-500/50 focus:outline-none transition"
                       placeholder="809-000-0000" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-white/70 text-sm mb-2">Mensaje (opcional)</label>
              <textarea name="mensaje" rows={4}
                        className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-gold-500/50 focus:outline-none transition resize-none"
                        placeholder="Cuéntanos en qué podemos ayudarte..."></textarea>
            </div>
            <button type="submit"
                    className="gold-gradient text-navy-900 font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition w-full sm:w-auto text-lg">
              Enviar solicitud
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
