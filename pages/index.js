import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Technology from '@/components/Technology'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import Location from '@/components/Location'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr. Luis Díaz Meyreles | Odontología de Alto Nivel</title>
        <meta name="description" content="Especialista en implantología, estética dental y odontología integral. Tecnología de última generación en Puerto Plata." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/jpeg" href="/images/logo-meyreles.jpg" />
      </Head>
      <Navbar />
      <Hero />
      <Services />
      <Technology />
      <Gallery />
      <About />
      <Location />
      <ContactForm />
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
