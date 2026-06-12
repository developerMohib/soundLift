"use client";

import React from "react";

const PrivacyPolicy = () => {
    return (
        <section className="py-20 bg-white text-slate-900">
            <div className="max-w-4xl mx-auto px-6">

                {/* Heading */}
                <div className="mb-12">
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="mt-4 text-sm text-slate-500">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-10 text-slate-700 leading-relaxed text-sm md:text-base">

                    {/* 1 */}
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">1. Introduction</h2>
                        <p>
                            We respect your privacy and are committed to protecting your personal data.
                            This Privacy Policy explains how we collect, use, and safeguard your information
                            when you use our music promotion services.
                        </p>
                    </div>

                    {/* 2 */}
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">2. Information We Collect</h2>
                        <p>
                            We may collect personal information such as your name, email address, social media
                            profiles, music links, and campaign-related details you provide when submitting your track.
                        </p>
                    </div>

                    {/* 3 */}
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">3. How We Use Your Information</h2>
                        <p>
                            Your information is used to process campaigns, communicate updates, improve services,
                            and connect your music with relevant curators, playlists, and promotional channels.
                        </p>
                    </div>

                    {/* 4 */}
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">4. Data Protection</h2>
                        <p>
                            We implement industry-standard security measures to protect your data.
                            However, no method of transmission over the internet is 100% secure.
                        </p>
                    </div>

                    {/* 5 */}
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">5. Sharing of Information</h2>
                        <p>
                            We do not sell your personal data. Information is only shared with trusted partners,
                            such as playlist curators or media outlets, strictly for promotional purposes.
                        </p>
                    </div>

                    {/* 6 */}
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">6. Cookies</h2>
                        <p>
                            We may use cookies to improve website performance, analyze traffic, and enhance user experience.
                            You can disable cookies in your browser settings.
                        </p>
                    </div>

                    {/* 7 */}
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">7. Your Rights</h2>
                        <p>
                            You may request access, correction, or deletion of your personal data at any time
                            by contacting our support team.
                        </p>
                    </div>

                    {/* 8 */}
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">8. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at{" "}
                            <span className="text-red-500 font-medium">
                                privacy@soundlift.com
                            </span>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;