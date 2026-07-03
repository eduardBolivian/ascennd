import React from 'react';

function Header() {
  const scrollToId = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Navegación izquierda */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#caracteristicas"
            onClick={scrollToId('caracteristicas')}
            className="text-white text-sm md:text-base hover:opacity-70 transition-opacity"
          >
            Características
          </a>
          <a
            href="#calculadora"
            onClick={scrollToId('calculadora')}
            className="text-white text-sm md:text-base hover:opacity-70 transition-opacity"
          >
            Rendimientos
          </a>
          <a
            href="#sobre-ascend"
            onClick={scrollToId('sobre-ascend')}
            className="text-white text-sm md:text-base hover:opacity-70 transition-opacity"
          >
            Acerca de
          </a>
        </nav>

        {/* Logotipo central */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <span className="text-white text-xl md:text-2xl font-bold">Ascend</span>
        </div>

        {/* Logo visible en mobile (sin nav) */}
        <span className="md:hidden text-white text-xl font-bold">Ascend</span>

        {/* Botones derecha */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={scrollToId('registro')}
            className="border border-white text-white px-6 py-2 rounded-full text-sm md:text-base hover:bg-white hover:text-black transition-colors duration-200"
          >
            Registrarse
          </button>
          <button
            onClick={scrollToId('registro')}
            className="vidrio-liquido text-black px-6 py-2 rounded-full text-sm md:text-base font-medium hover:opacity-80 transition-opacity duration-200"
            style={{ background: 'rgba(255, 165, 0, 0.9)' }}
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
