import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
            {/* Logo */}
            <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                <Image
                    src="/soundLift.jpg"
                    alt="SoundLift Logo"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Text */}
            <div className="flex flex-col leading-none">
                
                {/* FIRE TEXT */}
                <span className="text-xl font-bold tracking-tight fire-text">
                    SoundLift
                </span>

                <span className="text-xs text-slate-900 fire-subtext">
                    Music Promotion
                </span>
            </div>
        </Link>
    );
};

export default Logo;