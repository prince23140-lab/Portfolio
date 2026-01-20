"use strict";
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Duplicate images for infinite scroll loop
    const carouselImages = [...RESUME_DATA.images, ...RESUME_DATA.images];

    return (
        <section id="gallery" className="py-24 overflow-hidden bg-background">
            <div className="container px-4 md:px-6 mx-auto mb-12">
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Gallery</h2>
                    <p className="text-muted-foreground text-center max-w-[600px]">
                        A glimpse into my professional life and personality.
                    </p>
                </div>
            </div>

            <div className="relative w-full">
                {/* Gradient overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

                <motion.div
                    className="flex gap-6 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20
                    }}
                >
                    {carouselImages.map((img, index) => (
                        <div
                            key={index}
                            className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-transform hover:scale-105"
                            onClick={() => setSelectedImage(img)}
                        >
                            <Image
                                src={img}
                                alt={`Portrait ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="relative w-full max-w-4xl h-full max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors z-50"
                            >
                                <X className="w-8 h-8" />
                            </button>
                            <Image
                                src={selectedImage}
                                alt="Enlarged view"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
