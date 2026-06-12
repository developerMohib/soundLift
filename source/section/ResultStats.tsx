"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
    { value: "220M+", label: "Total streams generated across all campaigns" },
    { value: "8,500+", label: "Independent artists promoted worldwide" },
    { value: "4,300+", label: "Confirmed playlist placements" },
    { value: "500+", label: "Music blogs & press outlets in our network" },
    { value: "60+", label: "Countries reached by our campaigns" },
    { value: "3–5", label: "Business days average campaign launch time" },
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
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1 },
};

const ResultsStats = () => {
    return (
        <section id="results" className="py-20 bg-white text-slate-900">
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
                        Numbers that speak for themselves
                    </h2>

                    <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
                        Since 2019, we&apos;ve helped thousands of independent artists grow audiences they never thought possible — without a label, without a manager, without a massive budget.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={card}
                            whileHover={{ y: -6, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="group rounded-2xl border border-slate-200 p-6 bg-white hover:border-red-500 hover:shadow-md transition"
                        >
                            {/* Value */}
                            <h3 className="text-3xl md:text-4xl font-extrabold text-red-500">
                                {item.value}
                            </h3>

                            {/* Label */}
                            <p className="mt-3 text-sm text-slate-600 leading-relaxed group-hover:text-slate-900 transition">
                                {item.label}
                            </p>

                            {/* decoration */}
                            <div className="mt-4 h-1 w-12 bg-red-500/20 group-hover:bg-red-500 transition" />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default ResultsStats;