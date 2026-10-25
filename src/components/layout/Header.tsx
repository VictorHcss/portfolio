"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
];

interface HeaderProps {
    nome: string;
}

export const Header = ({ nome }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="py-6 md:py-8 border-b border-neutral-800 flex justify-between items-center relative z-50 animate-fade-down">
      <Link href="/" className="text-2xl font-bold tracking-tight text-white hover:text-neutral-300 transition-colors">
        {nome}
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 lg:gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition-colors duration-300 relative group ${
                  pathname === item.href ? "text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
                  pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 -mr-2 text-neutral-400 hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-neutral-950 border-b border-neutral-800 py-4 shadow-2xl shadow-black/60 animate-fade-down">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-4 -mx-4 text-sm font-medium transition-colors duration-300 ${
                    pathname === item.href ? "text-white" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
