"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const ContactSection = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        setLoading(false);

        if (res.ok) {
            setSuccess(true);
            e.currentTarget.reset();

            setTimeout(() => {
                setSuccess(false);
            }, 2000);
        }
    };
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

                        <form onSubmit={handleSubmit} className="space-y-4">

                            <input name="name" placeholder="Your name" className="w-full border p-3 rounded-lg" required />

                            <input name="email" type="email" placeholder="Your email" className="w-full border p-3 rounded-lg" required />

                            <select name="subject" className="w-full border p-3 rounded-lg" required>
                                <option>General</option>
                                <option>Pricing</option>
                                <option>Partnership</option>
                                <option>Press</option>
                            </select>

                            <textarea
                                name="message"
                                rows={4}
                                placeholder="Message"
                                className="w-full border p-3 rounded-lg"
                                required
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-red-500 text-white py-3 rounded-lg"
                            >
                                {loading ? "Sending..." : "Send message"}
                            </button>
                        </form>
                        {success && (
                            <p className="mb-6 text-green-600 font-medium">
                                ✅ Message sent successfully!
                            </p>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;