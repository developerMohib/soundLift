import Link from 'next/link';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="mt-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="px-6 py-12 text-start gap-3">
                    <Logo />
                    <p className="text-slate-900 max-w-md">
                        Elevating your music to the world — powerful promotion, real results, real growth.
                    </p>
                </div>

                <div className="px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/10">

                    {/* Nav Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2 text-slate-900">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Important Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Important Links</h3>
                        <ul className="space-y-2 text-slate-900">
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/faq">FAQ</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
                        <p className="text-slate-900 mb-4">
                            Get the latest updates and music promotion tips.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-3 py-2 rounded-md bg-white/5 border border-red-500 focus:outline-none focus:border-red-500"
                            />
                            <button className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md transition text-white font-semibold">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 py-6 text-center text-slate-900 text-sm">
                    © {new Date().getFullYear()} SoundLift. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;