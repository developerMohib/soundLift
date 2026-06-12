"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        step: "Step 1",
        title: "Submit your track",
        description:
            "Fill out our quick submission form. Tell us your genre, target audience, release date, and which platforms matter most to you. It takes less than 3 minutes.",
    },
    {
        step: "Step 2",
        title: "We review your music",
        description:
            "Our team listens to your track and selects the best matching curators, blogs, and channels from our network. We hand-pick — no automated bulk submissions.",
    },
    {
        step: "Step 3",
        title: "Promotion goes live",
        description:
            "Within 3–5 business days, your music is actively being pitched and placed. You'll get live updates as placements are confirmed and streams start rolling in.",
    },
    {
        step: "Step 4",
        title: "Get your results report",
        description:
            "At the end of your campaign, we send a detailed report — every playlist added, every blog post published, every stream counted. Full transparency, every time.",
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 bg-white text-slate-900">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-14"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                        From submission to streams — in 4 simple steps
                    </h2>

                    <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
                        We keep the process simple so you can focus on what you do best: making music.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {steps.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08
                            }}
                            className="group rounded-2xl border border-slate-200 p-6 bg-white hover:border-red-500 hover:shadow-md transition relative"
                        >
                            {/* Step label */}
                            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-red-500/10 text-red-500 mb-4">
                                {item.step}
                            </span>

                            {/* Title */}
                            <h3 className="text-lg font-bold mb-2 group-hover:text-red-500 transition">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-slate-600 leading-relaxed">
                                {item.description}
                            </p>

                            {/* Step number background */}
                            <span className="absolute top-4 right-6 text-6xl font-extrabold text-slate-100 select-none">
                                {index + 1}
                            </span>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;