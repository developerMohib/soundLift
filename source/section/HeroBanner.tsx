"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const HeroBanner = () => {
    return (
        <section id="about" className="relative overflow-hidden text-slate-900">
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.25),transparent_60%)]" />

            <div className="relative max-w-7xl mx-auto px-6 pt-24 md:pt-32 flex flex-col md:flex-row gap-10">

                {/* LEFT CONTENT */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.12 }}
                    className="w-full md:basis-[65%] flex flex-col items-start text-left gap-6"
                >

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                    >
                        🚀 Music Promotion Platform for Independent Artists
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
                    >
                        Get your music on the playlists that matter.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-900 text-base md:text-lg leading-relaxed"
                    >
                        SoundLift connects independent artists with real playlist curators, music blogs, radio stations, and social media audiences. We don&apos;t just promote your music — we build your fanbase.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 mt-4"
                    >
                        <Link
                            href="/book"
                            className="px-6 py-3 rounded-lg bg-red-500 hover:bg-red-600 transition font-semibold text-white"
                        >
                            Submit your track
                        </Link>

                        <Link
                            href="#services"
                            className="px-6 py-3 rounded-lg border border-slate-300 hover:border-slate-500 transition text-slate-900 font-medium"
                        >
                            Explore Services
                        </Link>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-xs text-gray-500 mt-2"
                    >
                        Trusted by independent artists, labels, and creators worldwide
                    </motion.p>

                </motion.div>

                {/* RIGHT VIDEO */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="w-full md:basis-[50%] flex items-center justify-center"
                >
                    <div className="w-full rounded-xl overflow-hidden">
                        <video
                            className="w-full h-auto"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src="/our_moto-Picsart-BackgroundRemover.webm" type="video/mp4" />
                        </video>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default HeroBanner;