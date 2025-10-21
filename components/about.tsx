"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {
  const { ref } = useSectionInView("Sobre mí");
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>Sobre mí</SectionHeading>
      <p className="mb-3">
        Soy <span className="font-medium">Ingeniera de Sistemas y Telecomunicaciones</span> especializada en desarrollo frontend, con sólida experiencia en la creación de interfaces modernas, accesibles y de alto rendimiento. Mi principal enfoque está en{" "}
        <span className="font-medium">React</span>, donde disfruto transformar ideas en experiencias interactivas y optimizadas.
      </p>

      <p className="mb-3">
        Trabajo principalmente con{" "}
        <span className="font-medium">JavaScript</span> y{" "}
        <span className="font-medium"></span>, aplicando buenas prácticas de desarrollo con{" "}
        <span className="font-medium">ESLint</span>, control de versiones mediante{" "}
        <span className="font-medium">GitHub</span> y{" "}
        <span className="font-medium">GitLab</span>, y realizando{" "}
        <span className="font-medium">pruebas unitarias</span> para garantizar la calidad y estabilidad del código.
      </p>

      <p>
        Me motiva el desafío de construir{" "}
        <span className="underline">soluciones escalables y eficientes</span>, cuidando cada detalle del frontend para ofrecer productos{" "}
        <span className="italic">robustos, mantenibles</span> y centrados en la experiencia del usuario.
      </p>
    </motion.section>
  )
}
