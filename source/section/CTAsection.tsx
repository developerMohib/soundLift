"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const FinalCTA = () => {
    return (
        <section className="relative py-24 text-slate-900 overflow-hidden">

            {/* background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.08),transparent_60%)]" />

            <div className="relative max-w-5xl mx-auto px-6 text-center">

                {/* Heading */}
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-extrabold tracking-tight"
                >
                    Your next fan is waiting to find you.
                </motion.h2>

                {/* Body */}
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={fadeUp}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
                >
                    Stop releasing music into silence. Whether you&apos;re dropping your debut single or your fifth album, SoundLift gives your music the push it needs to reach the listeners who will love it. Submit your track today and let&apos;s build something real.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={fadeUp}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/book"
                        className="px-8 py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition"
                    >
                        Submit your track now
                    </Link>

                    <Link
                        href="#contact"
                        className="px-8 py-3 rounded-lg border border-slate-300 hover:border-red-500 text-slate-900 font-semibold transition"
                    >
                        Talk to our team first
                    </Link>
                </motion.div>

                {/* micro copy */}
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={fadeUp}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-6 text-xs text-slate-500"
                >
                    Campaigns launch within 3–5 days. No contracts. Cancel or upgrade anytime.
                </motion.p>

            </div>
        </section>
    );
};

export default FinalCTA;