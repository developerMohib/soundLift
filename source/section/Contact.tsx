"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const ContactSection = () => {
    return (
        <section id="contact" className="py-24 bg-white text-slate-900">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    variants={fadeUp}
                    className="max-w-3xl mb-14"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                        We&apos;d love to hear from you.
                    </h2>

                    <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
                        Got a question before you sign up? Want to discuss a custom campaign for an album or label roster? Our team typically responds within 24 hours.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Contact Info */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        variants={fadeUp}
                        className="rounded-2xl border border-slate-200 p-8 bg-white hover:border-red-500 transition"
                    >
                        <h3 className="text-xl font-bold mb-6">Contact info</h3>

                        <div className="space-y-3 text-sm text-slate-700">
                            <p><span className="font-semibold">Email:</span> hello@soundlift.com</p>
                            <p><span className="font-semibold">Support:</span> support@soundlift.com</p>
                            <p><span className="font-semibold">Press:</span> press@soundlift.com</p>
                            <p><span className="font-semibold">Partnerships:</span> partners@soundlift.com</p>
                        </div>

                        <div className="mt-6 h-1 w-16 bg-red-500/20" />
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        variants={fadeUp}
                        className="rounded-2xl border border-slate-200 p-8 bg-white hover:border-red-500 transition"
                    >
                        <h3 className="text-xl font-bold mb-6">Send us a message</h3>

                        <form className="space-y-4">

                            <div>
                                <label className="text-sm font-medium">Your name</label>
                                <input className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-red-500" />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Your email address</label>
                                <input type="email" className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-red-500" />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Subject</label>
                                <select className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-red-500">
                                    <option>General</option>
                                    <option>Pricing</option>
                                    <option>Partnership</option>
                                    <option>Press</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-sm font-medium">Message</label>
                                <textarea rows={4} className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-red-500" />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
                            >
                                Send message
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;