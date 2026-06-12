"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "Are the streams real?",
        answer:
            "Yes — 100%. We never use bots, fake accounts, or click farms. Every stream comes from a real person who discovered your track through a playlist, blog, or social post. Fake streams violate Spotify's terms and can get your account banned — we'd never risk that for you or us.",
    },
    {
        question: "How long does it take to see results?",
        answer:
            "Most artists see the first placements within 3–5 business days. Streams and follower growth typically show up 5–10 days into the campaign as listeners discover and return to your music. Viral moments (especially from TikTok seeding) can happen faster.",
    },
    {
        question: "What genres do you work with?",
        answer:
            "We promote music across all major genres — pop, hip-hop, R&B, electronic, house, lo-fi, indie, folk, rock, metal, jazz, Afrobeats, Latin, gospel, and more. Our curator network is genre-specific, so your track goes to the right ears every time.",
    },
    {
        question: "Can I promote an unreleased track?",
        answer:
            "Yes. We can start building curator relationships before your release date and schedule pitching to go live the moment your track is public. Early momentum on release day makes a big difference for Spotify's algorithmic playlists like Discover Weekly.",
    },
    {
        question: "Do you offer refunds?",
        answer:
            "We offer a placement guarantee — if you don't receive the minimum number of placements outlined in your plan, we re-run your campaign for free. If you're unhappy after the re-run, we'll discuss a partial refund on a case-by-case basis. We stand behind our work.",
    },
    {
        question: "Is there a minimum stream count or follower requirement?",
        answer:
            "No. We work with artists at every stage — from first-timers with zero streams to established indie artists looking to scale. Your music just needs to be properly distributed on the major platforms before we can begin.",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-white text-slate-900">
            <div className="max-w-5xl mx-auto px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                        Got questions? We have answers.
                    </h2>
                </motion.div>

                {/* Accordion */}
                <div className="space-y-4">

                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="border border-slate-200 rounded-xl overflow-hidden"
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex justify-between items-center p-5 text-left hover:bg-slate-50 transition"
                                >
                                    <span className="font-semibold text-slate-900">
                                        {faq.question}
                                    </span>

                                    <span className="text-red-500 text-xl font-bold transition-transform duration-300">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>

                                {/* Answer (smooth expand) */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="px-5 overflow-hidden"
                                        >
                                            <p className="text-sm text-slate-600 leading-relaxed pb-5">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default FAQSection;