import React from 'react';
import { 
  Brain, 
  Notebook as Robot, 
  Cpu, 
  GraduationCap, 
  ChevronRight, 
  Star,
  Users,
  Clock,
  Zap,
  Github,
  Linkedin,
  Youtube
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const technologies = [
  { name: 'n8n', icon: 'https://placehold.co/60x60/2563eb/ffffff.png?text=n8n' },
  { name: 'Qdrant', icon: 'https://placehold.co/60x60/2563eb/ffffff.png?text=Qd' },
  { name: 'Postgres', icon: 'https://placehold.co/60x60/2563eb/ffffff.png?text=Pg' },
  { name: 'Supabase', icon: 'https://placehold.co/60x60/2563eb/ffffff.png?text=Sb' },
  { name: 'Chatwoot', icon: 'https://placehold.co/60x60/2563eb/ffffff.png?text=Cw' },
  { name: 'Arduino', icon: 'https://placehold.co/60x60/2563eb/ffffff.png?text=Ar' },
  { name: 'Raspberry Pi', icon: 'https://placehold.co/60x60/2563eb/ffffff.png?text=Pi' },
  { name: 'OpenAI', icon: 'https://placehold.co/60x60/2563eb/ffffff.png?text=AI' },
];

const clients = [
  { name: 'TechCorp', logo: 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?auto=format&fit=crop&q=80&w=150' },
  { name: 'InnovateLab', logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=150' },
  { name: 'FutureAI', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=150' },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-dark to-secondary text-neutral">
      {/* Header */}
      <header className="fixed w-full bg-secondary-dark/50 backdrop-blur-lg z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold">BrAInet</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-primary transition">Inicio</a>
            <a href="#" className="hover:text-primary transition">Servicios</a>
            <a href="#" className="hover:text-primary transition">Academy</a>
            <a href="#" className="hover:text-primary transition">Contacto</a>
            <button className="bg-primary hover:bg-primary-dark px-6 py-2 rounded-full font-medium transition">
              Agenda Demo
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Aceleramos tu empresa con IA y Automatización en el 2025
            </h1>
            <p className="text-xl text-neutral-dark mb-8">
              Agentes IA, T-BrAIn y BrAInet Academy para transformar tu negocio.
            </p>
            <button className="bg-primary hover:bg-primary-dark px-8 py-4 rounded-full text-lg font-medium flex items-center transition">
              Descubre Cómo
              <ChevronRight className="ml-2" />
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
              alt="AI Automation"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Technologies Carousel */}
      <section className="py-12 bg-secondary-light/5">
        <div className="container mx-auto px-6">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {technologies.map((tech) => (
              <SwiperSlide key={tech.name} className="!w-auto">
                <div className="flex items-center space-x-3 bg-secondary-light/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="font-medium">{tech.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary-light/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestras Ramas</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-secondary-light/10 p-8 rounded-2xl backdrop-blur-sm">
              <Robot className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Agentes IA</h3>
              <p className="text-neutral-dark mb-6">
                Automatización avanzada con n8n, Qdrant, Postgres, y más. Optimiza tus flujos de trabajo
                y potencia tu productividad con chatbots inteligentes.
              </p>
              <div className="flex flex-wrap gap-2">
                {['n8n', 'Qdrant', 'Postgres', 'Supabase', 'Chatwoot'].map((tech) => (
                  <span key={tech} className="bg-primary/10 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-secondary-light/10 p-8 rounded-2xl backdrop-blur-sm">
              <Cpu className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">T-BrAIn</h3>
              <p className="text-neutral-dark mb-6">
                Soluciones robóticas y dispositivos inteligentes usando Arduino, Raspberry Pi y APIs de IA
                para mejorar la productividad industrial y logística.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Arduino', 'Raspberry Pi', 'OpenAI API', 'Sensores', 'Servomotores'].map((tech) => (
                  <span key={tech} className="bg-primary/10 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-secondary-light/10 p-8 rounded-2xl backdrop-blur-sm">
              <GraduationCap className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">BrAInet Academy</h3>
              <p className="text-neutral-dark mb-6">
                Forma parte de la próxima generación de expertos en IA y automatización. Aprende
                con proyectos prácticos y mentores especializados.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Cursos', 'Workshops', 'Mentorías', 'Certificaciones'].map((tech) => (
                  <span key={tech} className="bg-primary/10 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestros Clientes y Colaboradores</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {clients.map((client) => (
              <div key={client.name} className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{client.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <GraduationCap className="w-16 h-16 text-primary mb-6" />
              <h2 className="text-4xl font-bold mb-6">BrAInet Academy</h2>
              <p className="text-xl text-neutral-dark mb-8">
                Forma parte de la próxima generación de expertos en IA y automatización. Aprende
                con proyectos prácticos y mentores especializados.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold">Comunidad Activa</h4>
                    <p className="text-neutral-dark">Networking y soporte continuo</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold">Aprendizaje Rápido</h4>
                    <p className="text-neutral-dark">Cursos prácticos y efectivos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold">Certificaciones</h4>
                    <p className="text-neutral-dark">Reconocimiento oficial</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold">Tecnología Actual</h4>
                    <p className="text-neutral-dark">Stack moderno 2025</p>
                  </div>
                </div>
              </div>
              <button className="bg-primary hover:bg-primary-dark px-8 py-4 rounded-full text-lg font-medium transition">
                Únete a BrAInet Academy
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="BrAInet Academy"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Acelera tu Transformación Digital con BrAInet
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a la revolución de las Agencias de Automatización de IA y posiciónate
            en la vanguardia tecnológica del 2025.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-neutral text-secondary hover:bg-neutral-dark px-8 py-4 rounded-full text-lg font-medium transition">
              Reserva Tu Asesoría
            </button>
            <button className="bg-transparent border-2 border-neutral hover:bg-white/10 px-8 py-4 rounded-full text-lg font-medium transition">
              Contáctanos
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-dark py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <Brain className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">BrAInet</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary transition">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-secondary-light/10 mt-8 pt-8 text-center text-neutral-dark">
            <p>© 2025 BrAInet. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;