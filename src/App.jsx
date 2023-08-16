
import './App.css'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Intro from './components/intro/Intro'
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services'
import AOS from 'aos';
import React, { useEffect, useState } from 'react'
import 'aos/dist/aos.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Work from './components/Work/Work'

function App() {

  const options = {
    fullScreen: { enable: false, zIndex: -1 },
    particles: {
      number: {
        value: 70,
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

  const [plan, setPlan] = useState('')

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Particles options={options} init={particlesInit} />
      <Header />
      <div>
        <Intro />
      </div>
      <Work />
      <div data-aos="fade-up">
        <Services plan={plan} setPlan={setPlan} />
      </div>
      <Contact plan={plan} setPlan={setPlan} />
      <Footer />
    </div>
  )
}

export default App
