import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
        >
            <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                <Image
                    src="/soundLift.jpg"
                    alt="SoundLift Logo"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tight text-black">
                    SoundLift
                </span>
                <span className="text-xs text-slate-900">
                    Music Promotion
                </span>
            </div>
        </Link>
    );
};

export default Logo;