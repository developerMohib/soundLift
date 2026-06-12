import React from 'react';
import Image from 'next/image';

const platforms = [
    {
        name: 'Spotify',
        logo: '/Spotify-Logo.png',
    },
    {
        name: 'Apple Music',
        logo: '/apple-music-logo.png',
    },
    {
        name: 'YouTube Music',
        logo: '/YouTube-Music-Logo.jpg',
    },
    {
        name: 'SoundCloud',
        logo: '/SoundCloud-Logo.png',
    },
    {
        name: 'TikTok',
        logo: '/TikTok-Logo.jpg',
    },
];

const PlatformCards = () => {
    return (
        <section className="py-16 bg-white text-slate-900">
            <div className="max-w-7xl mx-auto px-6">

                {/* Label */}
                <p className="text-sm text-slate-500 mb-6 text-center">
                    Trusted by artists promoted on
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

                    {platforms.map((platform, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl border border-slate-200 bg-white p-6 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md hover:border-red-500 transition"
                        >
                            {/* Logo */}
                            <div className="relative w-12 h-12">
                                <Image
                                    src={platform.logo}
                                    alt={platform.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Name */}
                            <p className="text-sm font-semibold text-slate-900 group-hover:text-red-500 transition">
                                {platform.name}
                            </p>
                        </div>
                    ))}

                </div>

                {/* Optional stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">

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

                </div>
            </div>
        </section>
    );
};

export default PlatformCards;