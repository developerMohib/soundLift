"use client";

import React from "react";
import { motion } from "framer-motion";

export const services = [
    {
        id: 1,
        title: "Spotify playlist pitching",
        subtitle: "Spotify playlist pitching",
        description:
            "We pitch your track directly to independent playlist curators across every genre. Get placed on playlists with real, active followers — no bots, no fake streams, just genuine listeners who love your sound.",
        badge: "Most popular",
    },
    {
        id: 2,
        title: "YouTube promotion",
        subtitle: "YouTube music promotion",
        description:
            "Boost your official audio or music video with targeted YouTube channel placements, editorial mentions, and subscriber audience reach. We get your visuals in front of viewers who are already searching for your genre.",
        badge: "High growth",
    },
    {
        id: 3,
        title: "Social media campaigns",
        subtitle: "Social media campaigns",
        description:
            "Organic TikTok, Instagram Reels, and Facebook reach campaigns designed for musicians. Our team creates short-form content around your music, reaches active music communities, and drives profile visits that convert to followers.",
        badge: "Trending",
    },
    {
        id: 4,
        title: "Music blog & press",
        subtitle: "Music blog & press coverage",
        description:
            "Get featured in respected music blogs, online magazines, and editorial playlists. Our PR network spans 500+ music journalists and blog editors who actively write about emerging artists.",
        badge: "Credibility builder",
    },
    {
        id: 5,
        title: "Radio plugging",
        subtitle: "Radio plugging & airplay",
        description:
            "We submit your track to internet radio stations, podcast playlists, and independent FM stations in the US, UK, and Europe. Radio airplay still drives discovery.",
        badge: "Licensing ready",
    },
    {
        id: 6,
        title: "TikTok seeding",
        subtitle: "TikTok sound seeding",
        description:
            "We connect your track with real TikTok creators who use it as background audio in their content. When a sound spreads organically, streams follow.",
        badge: "Viral potential",
    },
    {
        id: 7,
        title: "Email newsletter features",
        subtitle: "Email newsletter features",
        description:
            "Get your release featured in curated music discovery newsletters with audiences in the tens of thousands. A single feature can drive hundreds of saves overnight.",
        badge: "High conversion",
    },
    {
        id: 8,
        title: "Streaming strategy & analytics",
        subtitle: "Streaming strategy & analytics",
        description:
            "Our team analyzes your streaming data and builds a custom promotion plan. Includes full report after each campaign with insights and growth strategy.",
        badge: "Consultation included",
    },
];

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const card = {
    hidden: { opacity: 0, y: 25, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1 },
};

const ServiceSection = () => {
    return (
        <section id="services" className="py-20 bg-white text-slate-900">
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
                        Everything your music career needs
                    </h2>

                    <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
                        From first release to full-scale fanbase — we cover every channel of music promotion under one roof.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={card}
                            whileHover={{ y: -6, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="group rounded-2xl border border-slate-200 p-6 bg-white hover:border-red-500 hover:shadow-md transition"
                        >
                            {/* Badge */}
                            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-red-500/10 text-red-500 mb-4">
                                {service.badge}
                            </span>

                            {/* Title */}
                            <h3 className="text-lg font-bold mb-1 group-hover:text-red-500 transition">
                                {service.title}
                            </h3>

                            {/* Subtitle */}
                            <p className="text-sm text-slate-500 mb-3">
                                {service.subtitle}
                            </p>

                            {/* Description */}
                            <p className="text-sm text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default ServiceSection;