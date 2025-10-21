"use client";
import { motion } from 'framer-motion';
import { BsLinkedin } from "react-icons/bs";
import { HiDownload, HiOutlineEye } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28">
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.5,
                        }}>
                        <img
                            src="/portafolio/Salome.jpg"
                            alt="Salomé Gallego Arbelaez - Ingeniera de Sistemas y Telecomunicaciones"
                            width="256"
                            height="256"
                            className='h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                        />
                    </motion.div>
                    <motion.span className="absolute text-4xl bottom-0 right-0"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        ⭐
                    </motion.span>
                </div>
            </div>
            <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className='font-bold'>Hola, soy Salomé Gallego</span> y soy {" "}
                <span className='font-bold'>Frontend Developer</span> con {" "}
                <span className='font-bold'>+ 2 años</span> de experiencia y disfruto crear <span className='italic'>sitios y apps </span>  {" "}
                <span className='underline'>con ReactJS y HTML, CSS y JavaScript </span>  {" "}
            </motion.h1>
            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 tex-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, }}
            >
                <a className="group bg-white text-gray-900 px-7 py-3 flex items-center gap-2
                rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105
                transition cursor-pointer borderBlack/10"
                    href="/portafolio/hv/Salomé Gallego Arbelaez - HV.pdf"
                    target="_blank"
                    rel="noopener noreferrer">
                    Ver HV {" "}
                    <HiOutlineEye className="opacity-60 group-hover:scale-110 transition cursor-pointer" /></a>
                <a className="group bg-white text-gray-900 px-7 py-3 flex items-center gap-2
                rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105
                transition cursor-pointer borderBlack/10"
                    href="/portafolio/hv/Salomé Gallego Arbelaez - HV.pdf"
                    download="Salomé_Gallego_Arbelaez_HV.pdf">
                    Descargar HV {" "}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition cursor-pointer" /></a>
                <a className="bg-white text-gray-700 px-7 py-3 hover:text-gray-950 flex items-center gap-2
                text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105
                transition cursor-pointer border-black/10"
                    href="http://www.linkedin.com/in/salomeg5"
                    target="_blank">
                    <BsLinkedin />
                </a>
                <a className="bg-white text-gray-700 px-7 py-3 hover:text-gray-950 flex items-center gap-2
                text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105
                transition cursor-pointer border-black/10"
                    href="http://github.com/salomeg5"
                    target="_blank">
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    );
}
