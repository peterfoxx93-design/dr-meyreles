const techItems = [
  {
    name: 'exocad',
    desc: 'Software CAD de diseño dental para planificación digital de sonrisas y restauraciones.',
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'CBCT 3D',
    desc: 'Tomografía computarizada de haz cónico para diagnóstico preciso de implantes y anatomía.',
    color: 'from-emerald-600 to-emerald-800',
  },
  {
    name: 'CAD/CAM',
    desc: 'Fresado de precisión para coronas, puentes y prótesis en una sola visita.',
    color: 'from-purple-600 to-purple-800',
  },
  {
    name: 'Implantes',
    desc: 'Sistemas de implantología corticobasal y carga inmediata certificados.',
    color: 'from-amber-600 to-amber-800',
  },
]

export default function Technology() {
  return (
    <section id="tecnologia" className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <span className="gold-gradient text-navy-900 text-xs font-semibold px-4 py-1.5 rounded-full inline-block mb-4">
              Alta Tecnología
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Tecnología de <span className="text-gradient">Última Generación</span>
            </h2>
            <p className="text-white/60 mb-8">
              En nuestro consultorio combinamos años de experiencia con lo último en 
              tecnología digital dental. Utilizamos exocad para diseño 3D, CBCT para 
              diagnóstico preciso y sistemas CAD/CAM para fabricación in-house de 
              prótesis y restauraciones.
            </p>

            <div className="space-y-4">
              {techItems.map((t, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`w-3 h-3 rounded-full mt-1.5 bg-gradient-to-br ${t.color}`}></div>
                  <div>
                    <p className="text-white font-semibold">{t.name}</p>
                    <p className="text-white/50 text-sm">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-fade-in-up-delay">
            {[...Array(4)].map((_, i) => (
              <div key={i} 
                   className="aspect-square rounded-2xl bg-navy-800 border border-white/5 flex items-center justify-center p-6 hover:border-gold-500/20 transition">
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${techItems[i].color} flex items-center justify-center mb-3`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium">{techItems[i].name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
