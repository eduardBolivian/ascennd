import React from 'react';

function Footer() {
  return (
    <footer className="bg-black/80 border-t border-white/10 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-white text-2xl font-bold">Ascend</span>
            <p className="text-gray-400 text-sm mt-2 max-w-xs">
              La plataforma que conecta tus dólares con asesores reales de inversión, para
              hacerlos crecer de forma segura y acompañada.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Producto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#caracteristicas" className="text-gray-400 hover:text-white transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#calculadora" className="text-gray-400 hover:text-white transition-colors">
                  Rendimientos
                </a>
              </li>
              <li>
                <a href="#asesores" className="text-gray-400 hover:text-white transition-colors">
                  Asesores
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#sobre-ascend" className="text-gray-400 hover:text-white transition-colors">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="mailto:edudesignbo@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ascend. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
