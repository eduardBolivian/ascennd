import React from 'react';
import { ArrowRight, ShieldCheck, Users, Eye } from 'lucide-react';

function InfoSection() {
  const scrollToAsesores = (e) => {
    e.preventDefault();
    const el = document.getElementById('asesores');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="sobre-ascend" className="bg-black px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Encabezado + descripción */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Sobre Ascend
            </h2>
            <button
              onClick={scrollToAsesores}
              className="inline-flex items-center gap-3 bg-white text-black text-sm font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-white/90 transition-colors"
            >
              <span>Descubre más</span>
              <span className="bg-black rounded-full p-2 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </button>
          </div>
          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed">
            Ascend es una plataforma que conecta tu patrimonio en dólares o cripto con
            asesores reales de inversión, con estrategias diseñadas según tu perfil y tus
            objetivos.
          </p>
        </div>

        {/* Tarjetas */}
        <div id="caracteristicas" className="grid grid-cols-1 md:grid-cols-3 gap-4 scroll-mt-24">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <ShieldCheck className="w-6 h-6 mb-4" style={{ color: '#FFA500' }} />
            <h3 className="text-white text-lg font-semibold mb-2">Seguridad</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tus fondos están protegidos con auditorías de seguridad y contratos
              verificados.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <Users className="w-6 h-6 mb-4" style={{ color: '#FFA500' }} />
            <h3 className="text-white text-lg font-semibold mb-2">Personal</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              No inviertes solo. En Ascend tienes un asesor real que sigue tu portafolio, te
              guía en cada paso y está disponible para hablar contigo cuando lo necesites.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <Eye className="w-6 h-6 mb-4" style={{ color: '#FFA500' }} />
            <h3 className="text-white text-lg font-semibold mb-2">Transparencia</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ascend conecta tus dólares con asesores de inversión especializados para
              ayudarte a hacer crecer tu patrimonio en dólares y cripto, con estrategias
              diseñadas según tu perfil y tus objetivos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
