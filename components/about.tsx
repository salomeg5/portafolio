"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";


export default function About() {
  const { ref } = useSectionInView("Sobre mí");
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>{t.about.title}</SectionHeading>
      <p className="mb-3">
        {language === "es" ? "Soy" : t.about.paragraph1} <span className="font-medium">{t.about.profession}</span> {t.about.speciality}{" "}
        <span className="font-medium">{t.about.focus}</span>{t.about.paragraph1End}
      </p>

      <p className="mb-3">
        {t.about.paragraph2}{" "}
        <span className="font-medium">{t.about.tech1}</span> {t.about.paragraph2Middle}{" "}
        <span className="font-medium">{t.about.tech2}</span>{t.about.applying}{" "}
        <span className="font-medium">{t.about.eslint}</span>{t.about.versionControl}{" "}
        <span className="font-medium">{t.about.github}</span> {t.about.and}{" "}
        <span className="font-medium">{t.about.gitlab}</span>{t.about.paragraph2Middle2}{" "}
        <span className="font-medium">{t.about.testing}</span>{t.about.paragraph2End}
      </p>

      <p>
        {language === "es" ? "Me motiva el desafío de construir" : t.about.paragraph3.split(t.about.solutions)[0]} {" "}
        <span className="underline">{t.about.solutions}</span>{t.about.paragraph3Middle}{" "}
        <span className="italic">{t.about.robust}</span>{t.about.paragraph3End}
      </p>
    </motion.section>
  )
}
