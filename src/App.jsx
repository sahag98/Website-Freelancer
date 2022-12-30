
import './App.css'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Intro from './components/intro/Intro'
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services'
import AOS from 'aos';
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function App() {

  const options = {
    fullScreen: { enable: false, zIndex: -1 },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 1500
        }
      },
      color: {
        value: ["#212129", "#F8F9FA", "#495057", "#CED4DA"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: { min: 1, max: 8 }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    }
  };



  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1800 })
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Particles options={options} init={particlesInit} />
      <Header />
      <div>
        <Intro />
      </div>
      <div data-aos="fade-up">
        <Services />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
