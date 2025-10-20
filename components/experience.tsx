"use client";
import React from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

interface Experience {
  id: number;
  title: string;
  period: string;
  description: string;
}

const experiences = [
  {
    id: 1,
    title: "TempEdge - Desarrolladora Front-End",
    period: "Sept 2023 - Actual | Remoto",
    description: "Realicé una refactorización del código anterior a TypeScript, actualicé con nuevas dependencias e integré Vite con Jest para las pruebas unitarias. Dominé ReactJS y Angular junto con su ecosistema, gestioné eficientemente el control de versiones con Git y GitLab, e implementé Redux para la gestión del estado de las aplicaciones. Desarrollé habilidades avanzadas en el uso de bibliotecas como React-Bootstrap y en la implementación de Hooks para la lógica de componentes. Integré datos dinámicamente en mis aplicaciones a través de APIs y perfeccioné mis habilidades en CSS para el diseño y estilización de interfaces. Mi enfoque en el código DRY ha ayudado a mantener mi código limpio, legible y fácilmente mantenible. Adquirí experiencia en navegación y gestión de rutas con React-Router para crear aplicaciones web dinámicas y fluidas."
  },
  {
    id: 2,
    title: "InSoft - Desarrolladora Web",
    period: "Oct 2024 - Oct 2025 | Manizales - Híbrido",
    description: "Diseñé y desarrollé la arquitectura del sitio web respetando el manual de marca y las mejores prácticas de accesibilidad y SEO, garantizando una estructura semántica y optimizada con HTML y JavaScript. Implementé diseño responsivo usando TailwindCSS y HTML semántico, realizando pruebas en múltiples dispositivos y navegadores con herramientas como Chrome DevTools. Integré estrategias SEO on-page, configurando etiquetas meta, Open Graph, archivos robots.txt y sitemap.xml, mejorando la visibilidad en motores de búsqueda. Optimicé el rendimiento del sitio mediante lazy loading, compresión de imágenes, minimización de recursos y análisis con PageSpeed Insights. Apliqué medidas de seguridad en formularios e interacciones, incluyendo validaciones, sanitización de datos y monitoreo del sitio con herramientas analíticas. Verifiqué accesibilidad mediante contraste de colores, navegación por teclado, etiquetas aria- y validaciones comprensibles en formularios. Administré y mantuve actualizados formularios interactivos, configurando mensajes de agradecimiento, redirecciones correctas y validaciones funcionales. Desarrollé pop-ups personalizados para el sistema ContaPyme con enlaces condicionales, asegurando funcionalidad en múltiples navegadores. Maqueté campañas de e-mail en HTML y CSS, asegurando compatibilidad en plataformas de correo y verificación de enlaces CTA. Diseñé y gestioné sitios alojados en WordPress, incluyendo instalación, configuración, personalización de plantillas, y uso de plugins según los requerimientos del negocio. Coordiné la revisión y pruebas previas a producción: enlaces, favicon, experiencia del usuario, pruebas de carga y control de calidad. Promoví la mejora continua del sitio mediante análisis comparativo (benchmarking) e identificación de nuevas oportunidades de optimización."
  },
  {
    id: 3,
    title: "Contraloría General de Caldas - Practicante Universitaria",
    period: "Agos 2023 - Nov 2023 | Manizales, Caldas",
    description: "Durante mi práctica universitaria, jugué un rol esencial proporcionando soporte técnico en hardware a los empleados de la organización, y ofreciendo asistencia remota a entidades reguladoras a través de Sia Observa. Me encargué de la administración y el soporte técnico del sitio web de la Contraloría General de Caldas, garantizando la adhesión a las políticas de Gobierno Digital. En este entorno, también manejé servidores Linux y desarrollé sitios web con WordPress, alineándose siempre con las normativas de Gobierno Digital."
  },
  {
    id: 4,
    title: "CIDE - Directora de Tecnología",
    period: "Mar 2020 - Ago 2023 | Manizales, Caldas",
    description: "Especializada en el desarrollo de landing pages optimizadas para SEO y en la administración de servidores Linux con cPanel, incluyendo la gestión avanzada de bases de datos MySQL. Lideré proyectos de implementación de servidores en la nube y utilicé herramientas como Google Analytics y Google Search Console para analizar y mejorar el rendimiento web. Dirigí equipos en la optimización de carga y en la programación de copias de seguridad para sistemas de información y páginas web alojadas. Desarrollé y mantuve sitios web utilizando HTML, CSS, Tailwind, y frameworks como React.js y Vue.js, enfocándome en la eficiencia y la accesibilidad."
  },
  {
    id: 5,
    title: "SoftGreen - Diseñadora Gráfica",
    period: "Mar 2019 - Feb 2020 | Manizales, Caldas",
    description: "Enfocada en el diseño de interfaces y experiencias de usuario (UI/UX), aportando creatividad y funcionalidad a través de herramientas como Adobe Photoshop, Illustrator, InDesign y Figma. Desarrollé y consolidé la identidad visual de marcas, diseñando logotipos distintivos y materiales promocionales que reflejan la esencia y valores de la empresa. Participé en la creación de páginas web utilizando HTML5, CSS3 y JavaScript, implementando prácticas de diseño responsivo para garantizar una experiencia de usuario óptima en diversos dispositivos. Diseñé anuncios efectivos para Google Ads, optimizando la visibilidad y el engagement de la marca en el entorno digital."
  },
];

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  const renderExperience = (experience: Experience, index: number) => (
    <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-8 md:mb-0`}>
      <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-[20]' : 'md:pl-[20]'}`}>
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <h1 className="text-gray-800 text-xl font-medium mb-2">
            {experience.title}
          </h1>
          <div className="text-gray-600 text-sm">
            {experience.period}
          </div>
          <p className="text-gray-800 text-sm mt-4">
            {experience.description}
          </p>
        </div>
      </div>
      <div className="flex justify-center md:justify-start md:px-0 md:flex md:items-center">
        <div className="flex items-center justify-center">
          <span className="text-white bg-gray-800 font-medium text-lg leading-none rounded-full w-8 h-8 flex items-center justify-center">
            {experience.id}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <motion.section
      id="experience"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='scroll-mt-28 mb-28 sm:mb-40 relative'>
      <SectionHeading>Experiencia</SectionHeading>
      <div className="mt-8 max-w-7xl mx-auto px-4">
        {experiences.map((exp, index) => (
          <React.Fragment key={exp.id}>
            {renderExperience(exp, index)}
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}