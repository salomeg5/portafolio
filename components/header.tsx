"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { MdLanguage } from "react-icons/md";

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSectionContext();
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language];

    // Create translated links mapping
    const translatedLinks = links.map((link) => {
        const keyMap: { [key: string]: keyof typeof t.nav } = {
            "Inicio": "home",
            "Sobre mí": "about", 
            "Certificados": "certificates",
            "Habilidades": "skills",
            "Proyectos": "projects",
            "Experiencia": "experience"
        };
        const key = keyMap[link.name] || "home";
        return {
            ...link,
            name: t.nav[key] || link.name
        };
    });

    return (
        <header className="z-[999] relative">
            <motion.div
                className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[37rem] sm:rounded-full"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            ></motion.div>

            <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 items-center">
                <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.85rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-3">
                    {links.map((link, index) => {
                        const translatedLink = translatedLinks[index];
                        return (
                            <motion.li
                                className="h-3/4 flex items-center justify-center relative"
                                key={link.hash}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                            >
                                <Link
                                    className={clsx(
                                        "flex w-full items-center justify-center px-2 py-3 hover:text-gray-950 transition",
                                        {
                                            "text-gray-950 dark:text-gray-200 font-bold":
                                                activeSection === link.name,
                                        }
                                    )}
                                    href={link.hash}
                                    onClick={() => {
                                        setActiveSection(link.name);
                                        setTimeOfLastClick(Date.now());
                                    }}
                                >
                                    {translatedLink.name}

                                    {link.name === activeSection && (
                                        <motion.span
                                            className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                                            layoutId="activeSection"
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                        ></motion.span>
                                    )}
                                </Link>
                            </motion.li>
                        );
                    })}
                </ul>
            </nav>
            
            {/* Language Toggle Button - Outside the menu container */}
            <motion.button
                className="fixed top-[0.15rem] right-[1rem] bg-white text-gray-700 px-3 py-2 rounded-full border border-white border-opacity-40 shadow-lg hover:scale-110 active:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2 h-12 sm:top-[1.7rem] sm:right-[2rem]"
                onClick={toggleLanguage}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                title={language === "es" ? "Switch to English" : "Cambiar a Español"}
            >
                <MdLanguage className="text-xl" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </motion.button>
        </header>
    );
}