"use strict";
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
            </div>

            <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 space-y-6 text-center md:text-left"
                >
                    <div className="space-y-2">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter sm:text-4xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                            {RESUME_DATA.name}
                        </h2>
                        <p className="text-xl text-muted-foreground md:text-2xl">
                            Software Engineer
                        </p>
                    </div>

                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        {RESUME_DATA.summary}
                    </p>

                    <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center md:justify-start">
                        <a
                            href="#contact"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        >
                            Contact Me
                        </a>
                        <a
                            href="/resume.pdf"
                            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            download
                        >
                            Download Resume
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex-1 relative"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-full opacity-20 blur-2xl" />
                        <Image
                            src={RESUME_DATA.avatarUrl}
                            alt={RESUME_DATA.name}
                            fill
                            className="object-cover rounded-full border-4 border-background shadow-2xl relative z-10"
                            priority
                        />
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <ArrowDown className="text-muted-foreground w-6 h-6" />
            </motion.div>
        </section>
    );
}
