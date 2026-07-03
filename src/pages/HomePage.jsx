import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header.jsx';
import HeroSection from '../components/HeroSection.jsx';
import InfoSection from '../components/InfoSection.jsx';
import EquipoAsesores from '../components/EquipoAsesores.jsx';
import CalculadoraRendimientos from '../components/CalculadoraRendimientos.jsx';
import Footer from '../components/Footer.jsx';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Ascend - Que tus dólares trabajan mientras tú avanzas</title>
        <meta
          name="description"
          content="Ascend conecta tus dólares o cripto con asesores reales de inversión y un rendimiento estimado del 16% anual."
        />
      </Helmet>

      <div className="flex flex-col bg-black min-h-screen">
        <Header />
        <HeroSection />
        <InfoSection />
        <EquipoAsesores />
        <CalculadoraRendimientos />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
