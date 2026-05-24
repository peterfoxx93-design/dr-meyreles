export default function About() {
  return (
    <section className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden border border-gold-500/20">
              <img src="/images/logo-meyreles.jpg" alt="Dr. Luis Díaz Meyreles"
                   className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 gold-gradient rounded-2xl flex items-center justify-center text-navy-900 font-bold text-center leading-tight p-4 text-sm">
              Odontología<br/>Premium
            </div>
          </div>

          <div>
            <span className="gold-gradient text-navy-900 text-xs font-semibold px-4 py-1.5 rounded-full inline-block mb-4">
              El Doctor
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Dr. Luis <span className="text-gradient">Díaz Meyreles</span>
            </h2>

            <div className="space-y-4 text-white/70">
              <p>
                Especialista en estética dental con más de 15 años de experiencia transformando sonrisas 
                en Puerto Plata y toda la región norte de República Dominicana.
              </p>
              <p>
                Su enfoque combina la más alta tecnología digital (exocad, CBCT, CAD/CAM) con un trato 
                humano y personalizado. Cada paciente recibe un plan de tratamiento único, diseñado 
                específicamente para sus necesidades.
              </p>
              <p>
                Apasionado por la naturaleza y la pesca, cree firmemente que una sonrisa saludable 
                es la puerta a una mejor calidad de vida.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-navy-800 rounded-xl px-6 py-4 border border-white/5">
                <p className="text-gold-500 text-2xl font-bold">15+</p>
                <p className="text-white/50 text-xs">Años</p>
              </div>
              <div className="bg-navy-800 rounded-xl px-6 py-4 border border-white/5">
                <p className="text-gold-500 text-2xl font-bold">3K+</p>
                <p className="text-white/50 text-xs">Pacientes</p>
              </div>
              <div className="bg-navy-800 rounded-xl px-6 py-4 border border-white/5">
                <p className="text-gold-500 text-2xl font-bold">2.9K</p>
                <p className="text-white/50 text-xs">Seguidores</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
