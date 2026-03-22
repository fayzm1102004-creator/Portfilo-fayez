import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import bg from '../img/WhatsApp Image 2025-07-03 at 00.53.21_1fb1c840.jpg'
function Hero() {
  return (
    <section className="min-h-screen pt-24 bg-black flex flex-col md:flex-row items-center justify-center px-6 text-white">
      {/* Text */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I'm <span className="text-yellow-400">Fayez</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold">
          I’m a{" "}
          <TypeAnimation
            sequence={[
              'Front-End Developer',
              2000,
              'HTML5 CSS',2000,
              'Bootstrab tailwand CSS',2000,
              'JavaScript coder',
              2000,
              'React JS Coder',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-yellow-300"
          />
        </h2>

        <p className="text-lg text-gray-300 max-w-xl">
          I craft modern and responsive websites with a strong focus on clean UI and smooth user experience.
        </p>

        <a
          href="/Contact"
          className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
        >
          Contact Me
        </a>
      </div>

      {/* Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={bg}
          alt="hero"
  className="w-72 md:w-96 rounded-xl shadow-2xl shadow-yellow-500/10 transition-transform duration-500 hover:scale-105"        />
      </div>
    </section>
  );
}

export default Hero;
