import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANTE: cambia 'ascend' por el nombre EXACTO de tu repositorio de GitHub
// si tu repo se llama distinto (ej. 'ascender'), cámbialo aquí también.
export default defineConfig({
  base: '/ascennd/',
  plugins: [react()],
});
