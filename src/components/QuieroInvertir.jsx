import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Formulario de captura de correo.
 *
 * Usa Formspree (https://formspree.io) para enviar cada registro directamente
 * a edudesignbo@gmail.com sin necesidad de backend propio.
 *
 * CÓMO ACTIVARLO (una sola vez):
 * 1. Crea una cuenta gratis en https://formspree.io con edudesignbo@gmail.com
 * 2. Crea un nuevo "Form", Formspree te dará un endpoint tipo:
 *    https://formspree.io/f/xxxxxxx
 * 3. Reemplaza FORMSPREE_ENDPOINT abajo con ese endpoint.
 * 4. Formspree te enviará un correo de confirmación la primera vez que alguien
 *    envíe el formulario; solo tienes que confirmar una vez y listo.
 * 5. Todos los registros llegarán a tu correo Y quedarán guardados en el
 *    dashboard de Formspree (formspree.io/forms) por si quieres exportarlos.
 */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/TU_ID_DE_FORMSPREE';

function QuieroInvertir({ variant = 'hero' }) {
  const [email, setEmail] = useState('');
  const [estado, setEstado] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setEstado('loading');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          origen: 'Ascend - Landing Page',
          fecha: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        setEstado('success');
        setEmail('');
      } else {
        setEstado('error');
      }
    } catch (err) {
      setEstado('error');
    }
  };

  if (estado === 'success') {
    return (
      <div id="registro" className="flex items-center gap-2 text-ascend-gold text-sm md:text-base font-medium">
        ¡Listo! Un asesor de Ascend se pondrá en contacto contigo pronto.
      </div>
    );
  }

  return (
    <form
      id="registro"
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full max-w-md"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Tu correo electrónico"
        className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 min-w-0"
      />
      <button
        type="submit"
        disabled={estado === 'loading'}
        className="inline-flex items-center gap-3 bg-ascend-gold text-black text-sm md:text-base font-semibold pl-6 pr-2 py-2 rounded-full hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap disabled:opacity-60 shrink-0"
      >
        <span>{estado === 'loading' ? 'Enviando...' : 'Quiero más información'}</span>
        <span className="bg-white rounded-full p-2 flex items-center justify-center shrink-0">
          <ArrowRight className="w-4 h-4 text-black" />
        </span>
      </button>
    </form>
  );
}

export default QuieroInvertir;
