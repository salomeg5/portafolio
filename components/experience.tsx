"use client";
import React from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";

interface Experience {
  id: number;
  title: string;
  period: string;
  description: string;
}

export default function Experience() {
  const { ref } = useSectionInView("Experiencia");
  const { language } = useLanguage();
  const t = translations[language];
  const experiences = t.experience.experiences;

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
      <SectionHeading>{t.experience.title}</SectionHeading>
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