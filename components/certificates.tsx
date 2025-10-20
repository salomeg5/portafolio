"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { certificatesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import Image from "next/image";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Certificates() {
    const { ref } = useSectionInView("Certificates", 0.5);
    const [selectedCertificate, setSelectedCertificate] = useState<{
        name: string;
        institution: string;
        url: string;
        type: "image" | "pdf";
        rotate?: boolean;
    } | null>(null);

    return (
        <>
            <section
                id="certificates"
                ref={ref}
                className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
            >
                <SectionHeading>Certificados</SectionHeading>
                <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                    {certificatesData.map((certificate, index) => (
                        <motion.li
                            className="bg-white borderBlack rounded-xl px-5 py-4 cursor-pointer hover:scale-105 transition-all group w-[200px] min-h-[140px]"
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                            onClick={() => setSelectedCertificate(certificate)}
                        >
                            <div className="flex flex-col items-center gap-2 h-full justify-center">
                                <HiOutlineDocumentText className="text-4xl text-gray-700 group-hover:text-gray-900 transition" />
                                <div className="text-center w-full">
                                    <p className="font-medium text-sm leading-tight">{certificate.name}</p>
                                    <p className="text-xs text-gray-600 mt-1">{certificate.institution}</p>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </section>

            {/* Modal para previsualización */}
            <AnimatePresence>
                {selectedCertificate && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-[1000] flex items-center justify-center p-4"
                        onClick={() => setSelectedCertificate(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-hidden relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header del modal */}
                            <div className="flex items-center justify-between p-4 border-b bg-gray-50">
                                <div>
                                    <h3 className="font-semibold text-lg">{selectedCertificate.name}</h3>
                                    <p className="text-sm text-gray-600">{selectedCertificate.institution}</p>
                                </div>
                                <div className="flex gap-2">
                                    <a
                                        href={selectedCertificate.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 hover:bg-gray-200 rounded-full transition"
                                        title="Abrir en nueva pestaña"
                                    >
                                        <FaExternalLinkAlt className="text-xl text-gray-700" />
                                    </a>
                                    <button
                                        onClick={() => setSelectedCertificate(null)}
                                        className="p-2 hover:bg-gray-200 rounded-full transition"
                                    >
                                        <IoClose className="text-2xl text-gray-700" />
                                    </button>
                                </div>
                            </div>

                            {/* Visor del contenido */}
                            <div className="w-full h-[calc(90vh-80px)] overflow-auto bg-gray-100 flex items-center justify-center p-4">
                                {selectedCertificate.type === "pdf" ? (
                                    <iframe
                                        src={`${selectedCertificate.url}#toolbar=0&view=FitH`}
                                        className={`w-full h-full ${selectedCertificate.rotate ? 'rotate-90 origin-center' : ''}`}
                                        title={selectedCertificate.name}
                                        style={selectedCertificate.rotate ? {
                                            width: '90vh',
                                            height: 'calc(90vw - 200px)',
                                            maxWidth: '100%'
                                        } : {}}
                                    />
                                ) : (
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <Image
                                            src={selectedCertificate.url}
                                            alt={selectedCertificate.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

