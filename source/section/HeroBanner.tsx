import Link from 'next/link';

const HeroBanner = () => {
    return (
        <section className="relative overflow-hidden text-slate-900">
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.25),transparent_60%)]" />

            <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">

                {/* LEFT CONTENT WRAPPER (half width) */}
                <div className="w-full md:w-1/2 flex flex-col items-start text-left gap-6">

                    {/* Small badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-900">
                        🚀 Music Promotion Platform for Independent Artists
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                        Get your music on the playlists that matter.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-slate-900 text-base md:text-lg leading-relaxed">
                        SoundLift connects independent artists with real playlist curators, music blogs, radio stations, and social media audiences. We don&apos;t just promote your music — we build your fanbase.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <Link
                            href="/get-started"
                            className="px-6 py-3 rounded-lg bg-red-500 hover:bg-red-600 transition font-semibold text-white"
                        >
                            Submit your track
                        </Link>

                        <Link
                            href="/services"
                            className="px-6 py-3 rounded-lg border border-slate-300 hover:border-slate-500 transition text-slate-900 font-medium"
                        >
                            Explore Services
                        </Link>
                    </div>

                    {/* Trust line */}
                    <p className="text-xs text-gray-500 mt-2">
                        Trusted by independent artists, labels, and creators worldwide
                    </p>

                </div>
            </div>
        </section>
    );
};

export default HeroBanner;