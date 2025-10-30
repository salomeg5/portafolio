"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";


export default function Projects() {
    const { ref } = useSectionInView("Proyectos", 0.5);
    const { language } = useLanguage();
    const t = translations[language];
    const projects = t.projects.projects;

    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>{t.projects.title}</SectionHeading>
            <div>
                {
                    projects.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project  {...project} />
                        </React.Fragment>
                    ))}
            </div>
        </section>
    );
}