"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Results", href: "#results" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
            <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6">

                {/* Logo */}
                <Logo />

                {/* Desktop Nav */}
                <nav className="hidden md:block" aria-label="Main Navigation">
                    <ul className="flex items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    className="text-sm font-medium text-black transition-colors hover:text-red-500"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Link
                        href="/book"
                        className="rounded-full bg-red-500 px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                        Start Your Track
                    </Link>
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden flex flex-col gap-1"
                >
                    <span className="w-6 h-0.5 bg-black" />
                    <span className="w-6 h-0.5 bg-black" />
                    <span className="w-6 h-0.5 bg-black" />
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden border-t border-neutral-200 bg-white px-6 py-4 space-y-4 animate-in fade-in slide-in-from-top-2">

                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block text-sm font-medium text-black hover:text-red-500"
                        >
                            {item.label}
                        </Link>
                    ))}

                    <Link
                        href="/book"
                        onClick={() => setOpen(false)}
                        className="block w-full text-center rounded-full bg-red-500 px-5 py-2 text-sm font-semibold text-white"
                    >
                        Start Your Track
                    </Link>
                </div>
            )}
        </header>
    );
}