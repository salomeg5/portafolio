"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>Sobre mí</SectionHeading>
      <p className="mb-3">
        Después de graduarme en {" "}
        <span className="font-medium">Ingeniería de Sistemas y Telecomunicaciones</span>,
        Decidí profundizar mi pasión por la programación. Opté por pagar por cursos en Platzi para mejorar mis habilidades en{" "}
        <span className="font-medium">Full-Stack web development</span>.{" "}
        <span className="italic">lo que más me gusta de la programación</span>
        es el desafío de resolver problemas.<span className="underline"> Me apasiona </span>
        la sensación de encontrar finalmente la solución a un problema. Mi pila principal de tecnologías incluye{" "}
        <span className="font-medium">
          React, Angular, Next.js, Node.js, SQLServer
        </span>
        .También tengo conocimientos en TypeScript y JavaScript para darles vida a mis desarrollos
        Siempre estoy en busca de aprender sobre nuevas tecnologías. Actualmente, estoy en busca de un {" "}
        <span className="font-medium">trabajo full-time</span> como desarrolladora de software.
      </p>

      <p>
        <span className="italic">Cuando no estoy programando</span>
        , disfruto jugando videojuegos, pasando tiempo con mi perro y mi familia. El fútbol también ocupa un lugar especial en mi tiempo libre, ya que me encanta tanto jugarlo como seguir los partidos. Además de estos pasatiempos, me gusta {" "}
        <span className="font-medium">aprender cosas nuevas</span>. Actualmente
        estoy aprendindo{" "}
        <span className="font-medium">tecnologias nuevas</span>, y también estoy aprendiendo a jugar tenis. Estas actividades me ayudan a relajarme y a mantener un equilibrio saludable entre la vida laboral y personal.
      </p>
    </motion.section>
  )
}
