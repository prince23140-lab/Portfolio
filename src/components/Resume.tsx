"use strict";
"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function Resume() {
    return (
        <section id="experience" className="py-24 px-4 container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
                {/* Experience Column */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <span className="p-3 rounded-xl bg-primary/10 text-primary">
                            <Briefcase className="w-6 h-6" />
                        </span>
                        <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
                    </div>

                    <div className="relative border-l-2 border-border/50 ml-3 space-y-12">
                        {RESUME_DATA.work.map((role, index) => (
                            <div key={index} className="relative pl-8 md:pl-12">
                                {/* Timeline Dot */}
                                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h3 className="text-xl font-bold text-foreground">{role.title}</h3>
                                    <span className="text-sm font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit mt-1 sm:mt-0">
                                        {role.start} — {role.end}
                                    </span>
                                </div>

                                <div className="mb-4">
                                    <a href={role.link} className="text-primary hover:underline font-medium">
                                        {role.company}
                                    </a>
                                    <span className="text-muted-foreground"> • {role.badges.join(", ")}</span>
                                </div>

                                <p className="text-muted-foreground leading-relaxed">
                                    {role.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Education & Certs Column */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-12"
                >
                    {/* Education */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="p-3 rounded-xl bg-primary/10 text-primary">
                                <GraduationCap className="w-6 h-6" />
                            </span>
                            <h2 className="text-3xl font-bold tracking-tight">Education</h2>
                        </div>

                        <div className="relative border-l-2 border-border/50 ml-3 space-y-12">
                            {RESUME_DATA.education.map((edu, index) => (
                                <div key={index} className="relative pl-8 md:pl-12">
                                    <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />

                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                        <h3 className="text-xl font-bold text-foreground">{edu.school}</h3>
                                        <span className="text-sm font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit mt-1 sm:mt-0">
                                            {edu.start} — {edu.end}
                                        </span>
                                    </div>

                                    <div className="text-lg text-foreground/80 mb-2">{edu.degree}</div>
                                    <p className="text-sm text-muted-foreground">
                                        {edu.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="space-y-6 pt-8 border-t border-border/50">
                        <h3 className="text-2xl font-bold tracking-tight">Certifications</h3>
                        <div className="grid gap-4">
                            {RESUME_DATA.certifications.map((cert, index) => (
                                <div key={index} className="flex items-start justify-between p-4 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-colors">
                                    <div>
                                        <h4 className="font-semibold">{cert.title}</h4>
                                        <p className="text-sm text-muted-foreground">{cert.organization}</p>
                                    </div>
                                    <span className="text-xs font-mono text-muted-foreground whitespace-nowrap ml-4">
                                        {cert.date}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
