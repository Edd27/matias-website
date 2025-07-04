"use client";

import { useState, useEffect } from "react";

export default function MatiasWelcomePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const birthDate = new Date(process.env.NEXT_PUBLIC_BIRTHDATE as string);
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = birthDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-sky-50 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Globos flotantes de fondo */}
        <div className="absolute bottom-0 left-[10%] animate-float-up-1">
          <BalloonIcon className="w-8 h-12 text-sky-300/60" />
        </div>
        <div className="absolute bottom-0 left-[20%] animate-float-up-2">
          <BalloonIcon className="w-6 h-10 text-tan-300/50" />
        </div>
        <div className="absolute bottom-0 left-[35%] animate-float-up-3">
          <BalloonIcon className="w-10 h-14 text-sky-400/40" />
        </div>
        <div className="absolute bottom-0 left-[50%] animate-float-up-4">
          <BalloonIcon className="w-7 h-11 text-tan-400/60" />
        </div>
        <div className="absolute bottom-0 left-[65%] animate-float-up-5">
          <BalloonIcon className="w-9 h-13 text-sky-200/50" />
        </div>
        <div className="absolute bottom-0 left-[80%] animate-float-up-6">
          <BalloonIcon className="w-8 h-12 text-tan-200/40" />
        </div>
        <div className="absolute bottom-0 left-[90%] animate-float-up-1">
          <BalloonIcon className="w-6 h-10 text-sky-300/60" />
        </div>

        {/* Globos flotantes adicionales detrás de todo el contenido */}
        <div className="absolute bottom-0 left-[5%] animate-float-up-7">
          <BalloonIcon className="w-6 h-10 text-sky-500/40" />
        </div>
        <div className="absolute bottom-0 left-[15%] animate-float-up-8">
          <BalloonIcon className="w-8 h-12 text-tan-500/30" />
        </div>
        <div className="absolute bottom-0 left-[25%] animate-float-up-9">
          <BalloonIcon className="w-5 h-8 text-sky-600/50" />
        </div>
        <div className="absolute bottom-0 left-[40%] animate-float-up-10">
          <BalloonIcon className="w-9 h-13 text-tan-600/40" />
        </div>
        <div className="absolute bottom-0 left-[55%] animate-float-up-11">
          <BalloonIcon className="w-7 h-11 text-sky-400/35" />
        </div>
        <div className="absolute bottom-0 left-[70%] animate-float-up-12">
          <BalloonIcon className="w-6 h-9 text-tan-400/45" />
        </div>
        <div className="absolute bottom-0 left-[85%] animate-float-up-13">
          <BalloonIcon className="w-8 h-12 text-sky-300/40" />
        </div>
        <div className="absolute bottom-0 left-[95%] animate-float-up-14">
          <BalloonIcon className="w-5 h-8 text-tan-300/35" />
        </div>

        {/* Segunda capa de globos con diferentes posiciones */}
        <div className="absolute bottom-0 left-[8%] animate-float-up-15">
          <BalloonIcon className="w-7 h-10 text-sky-200/30" />
        </div>
        <div className="absolute bottom-0 left-[18%] animate-float-up-16">
          <BalloonIcon className="w-6 h-9 text-tan-200/40" />
        </div>
        <div className="absolute bottom-0 left-[32%] animate-float-up-17">
          <BalloonIcon className="w-8 h-11 text-sky-500/35" />
        </div>
        <div className="absolute bottom-0 left-[48%] animate-float-up-18">
          <BalloonIcon className="w-5 h-7 text-tan-500/30" />
        </div>
        <div className="absolute bottom-0 left-[62%] animate-float-up-19">
          <BalloonIcon className="w-9 h-12 text-sky-600/40" />
        </div>
        <div className="absolute bottom-0 left-[78%] animate-float-up-20">
          <BalloonIcon className="w-6 h-8 text-tan-600/35" />
        </div>
        <div className="absolute bottom-0 left-[92%] animate-float-up-21">
          <BalloonIcon className="w-7 h-10 text-sky-400/30" />
        </div>

        {/* Tercera capa de globos más pequeños */}
        <div className="absolute bottom-0 left-[12%] animate-float-up-22">
          <BalloonIcon className="w-4 h-6 text-tan-400/25" />
        </div>
        <div className="absolute bottom-0 left-[28%] animate-float-up-23">
          <BalloonIcon className="w-5 h-7 text-sky-300/30" />
        </div>
        <div className="absolute bottom-0 left-[45%] animate-float-up-24">
          <BalloonIcon className="w-4 h-6 text-tan-300/25" />
        </div>
        <div className="absolute bottom-0 left-[58%] animate-float-up-25">
          <BalloonIcon className="w-6 h-8 text-sky-500/35" />
        </div>
        <div className="absolute bottom-0 left-[75%] animate-float-up-26">
          <BalloonIcon className="w-4 h-6 text-tan-500/30" />
        </div>
        <div className="absolute bottom-0 left-[88%] animate-float-up-27">
          <BalloonIcon className="w-5 h-7 text-sky-200/25" />
        </div>

        {/* Nubes flotantes */}
        <div className="absolute top-10 left-10 animate-float-slow">
          <CloudIcon className="text-white/60 w-16 h-16" />
        </div>
        <div className="absolute top-20 right-20 animate-float-delayed">
          <CloudIcon className="text-white/40 w-12 h-12" />
        </div>
        <div className="absolute top-40 left-1/4 animate-float">
          <CloudIcon className="text-white/50 w-20 h-20" />
        </div>

        {/* Estrellas parpadeantes */}
        <div className="absolute top-16 right-1/4 animate-twinkle">
          <StarIcon className="text-yellow-300 w-6 h-6" />
        </div>
        <div className="absolute top-32 left-1/3 animate-twinkle-delayed">
          <StarIcon className="text-yellow-200 w-4 h-4" />
        </div>
        <div className="absolute top-24 right-1/3 animate-twinkle-slow">
          <StarIcon className="text-yellow-300 w-5 h-5" />
        </div>
      </div>

      {/* Header */}
      <header className="text-center pt-6 pb-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-sky-600 mb-4 animate-slide-down">
          Bienvenido, Matías
        </h1>
        <p className="text-xl md:text-2xl text-tan-600 font-medium animate-slide-up">
          Ya te esperamos con amor
        </p>
      </header>

      {/* Sección principal */}
      <main className="container mx-auto px-4 py-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Mensaje emotivo */}
          <div className="mb-6 animate-fade-in-delayed">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 max-w-2xl mx-auto">
              Pequeño Matías, cada día que pasa nos emociona más la idea de
              conocerte. Tu cuarto ya está listo, lleno de amor y ternura,
              esperando tu llegada. Serás la luz más brillante de nuestras
              vidas.
            </p>
          </div>

          {/* Osito central */}
          <div className="mb-6 animate-bounce-gentle">
            <div className="relative inline-block">
              <TeddyBearIcon className="w-48 h-48 md:w-64 md:h-64 text-tan-500 mx-auto drop-shadow-lg" />
              {/* Corazones flotantes alrededor del osito */}
              <div className="absolute -top-4 -right-4 animate-pulse">
                <HeartIcon className="w-8 h-8 text-pink-400" />
              </div>
              <div className="absolute -bottom-2 -left-4 animate-pulse-delayed">
                <HeartIcon className="w-6 h-6 text-pink-300" />
              </div>
            </div>
          </div>

          {/* Globos decorativos */}
          <div className="flex justify-center space-x-8 mb-6 animate-float-up">
            <BalloonIcon className="w-12 h-16 text-sky-400" />
            <BalloonIcon className="w-10 h-14 text-tan-400" />
            <BalloonIcon className="w-12 h-16 text-sky-300" />
          </div>
        </div>
      </main>

      {/* Sección de cuenta regresiva */}
      <section className="bg-white/50 backdrop-blur-sm py-6 mx-4 md:mx-8 rounded-3xl shadow-lg animate-slide-up-delayed">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-600 mb-4">
            Faltan pocos días para conocerte
          </h2>
          <p className="text-lg text-tan-600 font-medium mb-6">
            Fecha estimada:{" "}
            {new Date(
              process.env.NEXT_PUBLIC_BIRTHDATE as string
            ).toLocaleDateString("es-MX", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-4">
            <div className="bg-sky-100 rounded-2xl p-4 animate-pulse-gentle">
              <div className="text-3xl md:text-4xl font-bold text-sky-600">
                {timeLeft.days}
              </div>
              <div className="text-sm text-tan-600 font-medium">Días</div>
            </div>
            <div className="bg-tan-100 rounded-2xl p-4 animate-pulse-gentle-delayed">
              <div className="text-3xl md:text-4xl font-bold text-tan-600">
                {timeLeft.hours}
              </div>
              <div className="text-sm text-tan-600 font-medium">Horas</div>
            </div>
            <div className="bg-sky-100 rounded-2xl p-4 animate-pulse-gentle">
              <div className="text-3xl md:text-4xl font-bold text-sky-600">
                {timeLeft.minutes}
              </div>
              <div className="text-sm text-tan-600 font-medium">Minutos</div>
            </div>
            <div className="bg-tan-100 rounded-2xl p-4 animate-pulse-gentle-delayed">
              <div className="text-3xl md:text-4xl font-bold text-tan-600">
                {timeLeft.seconds}
              </div>
              <div className="text-sm text-tan-600 font-medium">Segundos</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Componentes de iconos SVG
function CloudIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function BalloonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 34" fill="currentColor">
      {/* Globo principal - forma ovalada */}
      <ellipse cx="12" cy="10" rx="8" ry="10" fill="currentColor" />

      {/* Brillo del globo */}
      <ellipse cx="9" cy="8" rx="2" ry="3" fill="white" opacity="0.3" />

      {/* Nudo del globo */}
      <path d="M12 20 L10 21 L14 21 Z" fill="currentColor" opacity="0.8" />

      {/* Cuerda en forma de S */}
      <path
        d="M12 21 Q10 23 12 25 Q14 27 12 29 Q10 31 12 33"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.7"
      />

      {/* Pequeño detalle en la parte inferior de la cuerda */}
      <circle cx="12" cy="33" r="0.5" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

function TeddyBearIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none">
      {/* Orejas */}
      <circle cx="60" cy="60" r="25" fill="#d2b48c" />
      <circle cx="140" cy="60" r="25" fill="#d2b48c" />
      <circle cx="60" cy="60" r="15" fill="#c19a6b" />
      <circle cx="140" cy="60" r="15" fill="#c19a6b" />

      {/* Cabeza */}
      <circle cx="100" cy="80" r="45" fill="#d2b48c" />

      {/* Ojos */}
      <circle cx="85" cy="70" r="6" fill="#0284c7" />
      <circle cx="115" cy="70" r="6" fill="#0284c7" />
      <circle cx="87" cy="68" r="2" fill="#fff" />
      <circle cx="117" cy="68" r="2" fill="#fff" />

      {/* Nariz */}
      <ellipse cx="100" cy="85" rx="4" ry="3" fill="#c19a6b" />

      {/* Boca */}
      <path
        d="M 95 95 Q 100 100 105 95"
        stroke="#c19a6b"
        strokeWidth="2"
        fill="none"
      />

      {/* Cuerpo */}
      <ellipse cx="100" cy="140" rx="35" ry="40" fill="#d2b48c" />

      {/* Brazos */}
      <circle cx="60" cy="130" r="20" fill="#d2b48c" />
      <circle cx="140" cy="130" r="20" fill="#d2b48c" />

      {/* Piernas */}
      <ellipse cx="80" cy="175" rx="15" ry="20" fill="#d2b48c" />
      <ellipse cx="120" cy="175" rx="15" ry="20" fill="#d2b48c" />

      {/* Patas */}
      <ellipse cx="80" cy="190" rx="12" ry="8" fill="#c19a6b" />
      <ellipse cx="120" cy="190" rx="12" ry="8" fill="#c19a6b" />

      {/* Barriga */}
      <ellipse cx="100" cy="140" rx="20" ry="25" fill="#e4d0be" />

      {/* Detalles adicionales */}
      <circle
        cx="85"
        cy="70"
        r="8"
        fill="none"
        stroke="#c19a6b"
        strokeWidth="1"
        opacity="0.3"
      />
      <circle
        cx="115"
        cy="70"
        r="8"
        fill="none"
        stroke="#c19a6b"
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
}
