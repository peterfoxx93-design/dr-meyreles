export default function Gallery() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80',
      label: 'Consultorio',
    },
    {
      src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80',
      label: 'Tecnología',
    },
    {
      src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80',
      label: 'Cirugía',
    },
    {
      src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80',
      label: 'Diseño Digital',
    },
  ]

  return (
    <section id="galeria" className="py-24 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="gold-gradient text-navy-900 text-xs font-semibold px-4 py-1.5 rounded-full inline-block mb-4">
            Nuestro Espacio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Conoce Nuestra <span className="text-gradient">Clínica</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Un entorno diseñado para su comodidad, equipado con tecnología de punta.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {images.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
              <img src={img.src} alt={img.label}
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent"></div>
              <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">{img.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
