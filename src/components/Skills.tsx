"use strict";
"use client";

import { motion } from "framer-motion";
import { Badge } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function Skills() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const skillColors: Record<string, { bg: string; text: string; border: string }> = {
        "SQL": { bg: "bg-blue-500/10", text: "text-blue-500", border: "hover:border-blue-500/50" },
        "PostgreSQL": { bg: "bg-blue-400/10", text: "text-blue-400", border: "hover:border-blue-400/50" },
        "Database Design": { bg: "bg-slate-500/10", text: "text-slate-500", border: "hover:border-slate-500/50" },
        "Power BI": { bg: "bg-yellow-500/10", text: "text-yellow-500", border: "hover:border-yellow-500/50" },
        "Data Validation & Reporting": { bg: "bg-green-500/10", text: "text-green-500", border: "hover:border-green-500/50" },
        "Java": { bg: "bg-red-500/10", text: "text-red-500", border: "hover:border-red-500/50" },
        "HTML/CSS/JavaScript": { bg: "bg-orange-500/10", text: "text-orange-500", border: "hover:border-orange-500/50" },
        "Python": { bg: "bg-blue-600/10", text: "text-blue-600", border: "hover:border-blue-600/50" },
        "Node.js": { bg: "bg-green-600/10", text: "text-green-600", border: "hover:border-green-600/50" },
        "React.js": { bg: "bg-cyan-400/10", text: "text-cyan-400", border: "hover:border-cyan-400/50" },
        "Springboot": { bg: "bg-green-500/10", text: "text-green-500", border: "hover:border-green-500/50" },
        "TailwindCss": { bg: "bg-cyan-500/10", text: "text-cyan-500", border: "hover:border-cyan-500/50" },
        "Bootstrap": { bg: "bg-purple-600/10", text: "text-purple-600", border: "hover:border-purple-600/50" },
        "C++": { bg: "bg-blue-700/10", text: "text-blue-700", border: "hover:border-blue-700/50" },
        "C": { bg: "bg-blue-800/10", text: "text-blue-800", border: "hover:border-blue-800/50" },
        "Docker": { bg: "bg-blue-500/10", text: "text-blue-500", border: "hover:border-blue-500/50" },
        "Linux/Unix CLI": { bg: "bg-yellow-600/10", text: "text-yellow-600", border: "hover:border-yellow-600/50" },
        "Networking (Cisco)": { bg: "bg-blue-900/10", text: "text-blue-900", border: "hover:border-blue-900/50" },
        "GitHub": { bg: "bg-gray-800/10", text: "text-gray-800", border: "hover:border-gray-800/50" },
        "Computer Maintenance & Repair": { bg: "bg-slate-500/10", text: "text-slate-500", border: "hover:border-slate-500/50" },
        "G-Suite": { bg: "bg-red-400/10", text: "text-red-400", border: "hover:border-red-400/50" },
    };

    const defaultColor = { bg: "bg-primary/5", text: "text-primary", border: "hover:border-primary/50" };

    return (
        <section id="skills" className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Technical Arsenal
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
                        A comprehensive list of technologies and tools I've worked with to build powerful solutions.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                >
                    {RESUME_DATA.skills.map((skill) => {
                        const colors = skillColors[skill] || defaultColor;
                        return (
                            <motion.div
                                key={skill}
                                variants={item}
                                whileHover={{ scale: 1.05 }}
                                className={`group flex flex-col items-center justify-center p-6 bg-card rounded-xl border border-border/50 shadow-sm hover:shadow-lg ${colors.border} transition-all duration-300`}
                            >
                                <div className={`mb-3 p-3 rounded-full ${colors.bg} transition-colors`}>
                                    <Badge className={`w-6 h-6 ${colors.text}`} />
                                </div>
                                <span className={`font-medium text-center text-foreground group-hover:${colors.text} transition-colors`}>
                                    {skill}
                                </span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
