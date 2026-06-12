"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const platforms = [
    { name: 'Spotify', logo: '/Spotify-Logo.png' },
    { name: 'Apple Music', logo: '/apple-music-logo.png' },
    { name: 'YouTube Music', logo: '/YouTube-Music-Logo.jpg' },
    { name: 'SoundCloud', logo: '/SoundCloud-Logo.png' },
    { name: 'TikTok', logo: '/TikTok-Logo.jpg' },
];

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

const PlatformCards = () => {
    return (
        <section className="text-slate-900 py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-10 text-center"
                >
                    Trusted by artists promoted on
                </motion.p>

                {/* Platform Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-5 gap-6"
                >
                    {platforms.map((platform, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -6, scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="group rounded-2xl border border-slate-200 bg-white p-6 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md hover:border-red-500 transition"
                        >
                            <div className="relative w-12 h-12">
                                <Image
                                    src={platform.logo}
                                    alt={platform.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <p className="text-sm font-semibold text-slate-900 group-hover:text-red-500 transition">
                                {platform.name}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center"
                >
                    <div>
                        <h3 className="text-3xl font-extrabold text-red-500">
                            8,500+
                        </h3>
                        <p className="text-sm text-slate-600 mt-2">
                            Artists promoted
                        </p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-extrabold text-red-500">
                            220M+
                        </h3>
                        <p className="text-sm text-slate-600 mt-2">
                            Streams generated
                        </p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-extrabold text-red-500">
                            4,300+
                        </h3>
                        <p className="text-sm text-slate-600 mt-2">
                            Playlist placements
                        </p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-extrabold text-red-500">
                            98%
                        </h3>
                        <p className="text-sm text-slate-600 mt-2">
                            Client satisfaction
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default PlatformCards;