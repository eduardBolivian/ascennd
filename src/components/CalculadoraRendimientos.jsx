import React, { useState } from 'react';

function CalculadoraRendimientos() {
  const [cantidad, setCantidad] = useState('10000');
  const tasaAnual = 0.16;

  const calcularRendimientos = () => {
    const principal = parseFloat(cantidad) || 0;
    const mensual = principal * (tasaAnual / 12);
    const anual = principal * tasaAnual;
    const total = principal + anual;
    return { mensual, anual, total };
  };

  const { mensual, anual, total } = calcularRendimientos();

  const formatearMoneda = (valor) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor);

  return (
    <section id="calculadora" className="bg-black px-6 py-24 scroll-mt-24">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-white font-semibold mb-8 tracking-tight">
          ¿Cuánto deseas invertir?
        </h2>

        {/* Entrada de cantidad */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-white text-2xl font-medium">$</span>
          <input
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            className="w-full bg-black/50 border border-white/20 text-white rounded-lg px-4 py-3 text-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-white/50 transition-all"
            placeholder="10000"
            min="0"
            step="1000"
          />
          <span className="text-white text-sm">USD</span>
        </div>

        {/* Línea animada */}
        <div className="relative w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-12 rounded-full overflow-hidden">
          <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-500 rounded-full animate-moving-dot" />
        </div>

        {/* Resultados */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          <div className="flex flex-col gap-1">
            <span className="text-gray-300 text-sm">Ganancia mensual</span>
            <span className="text-yellow-500 text-2xl md:text-3xl font-bold tracking-tight">
              {formatearMoneda(mensual)}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-300 text-sm">Ganancia anual</span>
            <span className="text-yellow-500 text-2xl md:text-3xl font-bold tracking-tight">
              {formatearMoneda(anual)}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-300 text-sm">Total en 1 año</span>
            <span className="text-yellow-500 text-2xl md:text-3xl font-bold tracking-tight">
              {formatearMoneda(total)}
            </span>
          </div>
        </div>

        {/* Descargo de responsabilidad, sin recuadro */}
        <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
          * Los rendimientos son estimados, calculados con una tasa anual del 16%. El
          rendimiento real puede variar según las condiciones del mercado.
        </p>
      </div>
    </section>
  );
}

export default CalculadoraRendimientos;
