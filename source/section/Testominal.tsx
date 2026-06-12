"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        quote:
            "I went from 200 monthly listeners to over 18,000 in six weeks. The playlist placements were on point — real curators with audiences that actually matched my genre. SoundLift is the real deal.",
        name: "Marcus T.",
        role: "R&B artist, Atlanta",
        used: "Used: Spotify Playlist Pitching (Pro plan)",
    },
    {
        quote:
            "I was skeptical at first — I'd been burned by fake stream services before. SoundLift was completely different. Transparent reporting, actual blog features, and my streams have been consistent for months after the campaign.",
        name: "Lena K.",
        role: "Indie pop artist, Berlin",
        used: "Used: Premium plan",
    },
    {
        quote:
            "My TikTok campaign blew up in a way I didn't expect. One creator used my track and it got 400K views. Three weeks later my Spotify was showing listener spikes from 14 different countries. Unreal.",
        name: "DJ Pharell",
        role: "Electronic / Dance, Lagos",
        used: "Used: TikTok sound seeding",
    },
    {
        quote:
            "The team actually listened to my music before recommending a plan. They matched me to curators who feature acoustic folk artists specifically. That personal touch made all the difference.",
        name: "Nadia V.",
        role: "Folk / Acoustic, Manchester",
        used: "Used: Starter plan → upgraded to Pro",
    },
];

const variants = {
    enter: (direction: number) => ({
        opacity: 0,
        x: direction > 0 ? 40 : -40,
        scale: 0.98,
    }),
    center: {
        opacity: 1,
        x: 0,
        scale: 1,
    },
    exit: (direction: number) => ({
        opacity: 0,
        x: direction < 0 ? 40 : -40,
        scale: 0.98,
    }),
};

const TestimonialSlider = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const next = () => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setDirection(-1);
        setCurrent((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const t = testimonials[current];

    return (
        <section className="py-20 bg-white text-slate-900">
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
                        Artists who made it happen with SoundLift
                    </h2>
                </motion.div>

                {/* Slider Card */}
                <div className="relative rounded-2xl border border-slate-200 p-8 md:p-12 bg-white shadow-sm overflow-hidden">

                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4 }}
                        >
                            {/* Quote */}
                            <p className="text-lg md:text-xl leading-relaxed text-slate-700">
                                “{t.quote}”
                            </p>

                            {/* Name */}
                            <div className="mt-8">
                                <h4 className="font-bold text-slate-900">{t.name}</h4>
                                <p className="text-sm text-slate-500">{t.role}</p>
                                <p className="text-xs text-red-500 mt-2">{t.used}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="flex justify-between items-center mt-10">

                        <button
                            onClick={prev}
                            className="px-4 py-2 rounded-lg border border-slate-300 hover:border-red-500 transition"
                        >
                            ← Prev
                        </button>

                        {/* dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setDirection(i > current ? 1 : -1);
                                        setCurrent(i);
                                    }}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                        i === current
                                            ? "bg-red-500 scale-125"
                                            : "bg-slate-300"
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="px-4 py-2 rounded-lg border border-slate-300 hover:border-red-500 transition"
                        >
                            Next →
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;