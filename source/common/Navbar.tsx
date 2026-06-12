import Link from 'next/link';
import Logo from './Logo';

const navItems = [
   { label: 'Services', href: '#services' },
   { label: 'How It Works', href: '#how-it-works' },
   { label: 'Pricing', href: '#pricing' },
   { label: 'Results', href: '#results' },
   { label: 'Blog', href: '#blog' },
];

export default function Navbar() {
   return (
      <header className="sticky top-0 z-50 border-b border-neutral-800 backdrop-blur">
         <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
            {/* Logo */}
            <Logo />

            {/* Navigation */}
            <nav aria-label="Main Navigation">
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

            {/* CTA */}
            <Link
               href="#pricing"
               className="rounded-full bg-red-500 px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
               Start Your Track
            </Link>
         </div>
      </header>
   );
}