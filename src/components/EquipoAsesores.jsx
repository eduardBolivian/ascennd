import React from 'react';
import { MessageCircle, TrendingUp, HeartHandshake } from 'lucide-react';

function EquipoAsesores() {
  return (
    <section id="asesores" className="bg-black px-6 py-24 border-t border-white/5 scroll-mt-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          Asesores reales para tus inversiones
        </h2>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-16">
          En Ascend no inviertes solo. Te conectamos con asesores especializados que te
          acompañan, resuelven tus dudas y te ayudan a tomar mejores decisiones con tus
          dólares.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <HeartHandshake className="w-6 h-6 mb-4" style={{ color: '#FFA500' }} />
            <h3 className="text-white text-base font-semibold mb-2">Acompañamiento real</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Un asesor humano, no un algoritmo, sigue tu portafolio y está disponible cuando
              lo necesitas.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <TrendingUp className="w-6 h-6 mb-4" style={{ color: '#FFA500' }} />
            <h3 className="text-white text-base font-semibold mb-2">Estrategias a tu medida</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Diseñamos el plan según tu perfil y tus objetivos, no una fórmula genérica para
              todos.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <MessageCircle className="w-6 h-6 mb-4" style={{ color: '#FFA500' }} />
            <h3 className="text-white text-base font-semibold mb-2">Siempre puedes preguntar</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Habla con tu asesor cuando tengas dudas: tu dinero, tus preguntas, tus
              decisiones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EquipoAsesores;
