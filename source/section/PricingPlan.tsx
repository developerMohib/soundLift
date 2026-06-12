"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const plans = [
    {
        name: "Starter",
        price: "$49",
        period: "per release",
        button: "Get started",
        popular: false,
        features: [
            { text: "Spotify playlist pitching", included: true },
            { text: "Up to 15 curator submissions", included: true },
            { text: "Campaign results report", included: true },
            { text: "7-day campaign window", included: true },
            { text: "Blog/press coverage", included: false },
            { text: "Social media campaign", included: false },
        ],
    },
    {
        name: "Pro",
        price: "$119",
        period: "per release",
        button: "Start Pro campaign",
        popular: true,
        features: [
            { text: "Spotify + Apple Music pitching", included: true },
            { text: "Up to 40 curator submissions", included: true },
            { text: "1 music blog feature", included: true },
            { text: "Social media shoutout", included: true },
            { text: "14-day campaign window", included: true },
            { text: "Priority review (48 hrs)", included: true },
        ],
    },
    {
        name: "Premium",
        price: "$249",
        period: "per release",
        button: "Go Premium",
        popular: false,
        features: [
            { text: "All platforms incl. TikTok", included: true },
            { text: "Unlimited curator submissions", included: true },
            { text: "3 blog/press features", included: true },
            { text: "Full social media campaign", included: true },
            { text: "Radio pitching", included: true },
            { text: "Dedicated account manager", included: true },
        ],
    },
];

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const card = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

const PricingSection = () => {
    const router = useRouter();
    const redirectToCheckout = () => {
        router.push('/book')
    }
    return (
        <section id="pricing" className="py-20 bg-white text-slate-900">
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
                        Simple pricing. No hidden fees.
                    </h2>

                    <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
                        Choose the plan that fits your release. All plans include real human review, placement reporting, and our satisfaction guarantee.
                    </p>
                </motion.div>

                {/* Pricing Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            variants={card}
                            whileHover={{ y: -6, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className={`relative rounded-2xl border p-6 bg-white transition ${plan.popular
                                    ? "border-red-500 shadow-lg scale-[1.02]"
                                    : "border-slate-200 hover:border-red-500 hover:shadow-md"
                                }`}
                        >
                            {/* Popular badge */}
                            {plan.popular && (
                                <span className="absolute -top-3 left-6 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                                    Most popular
                                </span>
                            )}

                            {/* Plan name */}
                            <h3 className="text-xl font-bold">{plan.name}</h3>

                            {/* Price */}
                            <div className="mt-3 flex items-end gap-2">
                                <span className="text-4xl font-extrabold text-red-500">
                                    {plan.price}
                                </span>
                                <span className="text-sm text-slate-500">
                                    {plan.period}
                                </span>
                            </div>

                            {/* Features */}
                            <ul className="mt-6 space-y-2 text-sm">
                                {plan.features.map((f, i) => (
                                    <li
                                        key={i}
                                        className={`flex items-start gap-2 ${f.included
                                                ? "text-slate-700"
                                                : "text-slate-400 line-through"
                                            }`}
                                    >
                                        <span className={f.included ? "text-red-500" : ""}>
                                            {f.included ? "✓" : "✗"}
                                        </span>
                                        {f.text}
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <button onClick={redirectToCheckout} className="mt-6 w-full py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition">
                                {plan.button}
                            </button>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default PricingSection;