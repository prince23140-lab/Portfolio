"use strict";
"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Gitlab } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";
import { useState } from "react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const socialIcons: Record<string, React.ReactNode> = {
        GitHub: <Github className="w-5 h-5" />,
        LinkedIn: <Linkedin className="w-5 h-5" />,
        X: <Twitter className="w-5 h-5" />,
        GitLab: <Gitlab className="w-5 h-5" />,
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

        window.location.href = `mailto:${RESUME_DATA.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
                    <p className="text-muted-foreground mt-4 text-lg max-w-[600px] mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 space-y-6">
                            <h3 className="text-2xl font-semibold">Contact Information</h3>

                            <div className="space-y-6">
                                <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <span className="text-lg">{RESUME_DATA.contact.email}</span>
                                </a>

                                <a href={`tel:${RESUME_DATA.contact.tel}`} className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <span className="text-lg">{RESUME_DATA.contact.tel}</span>
                                </a>

                                <div className="flex items-center gap-4 text-muted-foreground">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <span className="text-lg">{RESUME_DATA.location}</span>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-border/50">
                                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Social Profiles</h4>
                                <div className="flex gap-4">
                                    {RESUME_DATA.contact.social.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                            aria-label={social.name}
                                        >
                                            {socialIcons[social.name] || <Github className="w-5 h-5" />}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="prince@example.com"
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can I help you?"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center gap-2 h-12 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                            >
                                <Send className="w-4 h-4" />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
