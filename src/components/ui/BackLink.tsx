import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const BackLink = () => (
  <Link
    href="/"
    className="group inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-wider text-muted uppercase transition-colors hover:text-text"
  >
    <ArrowLeft size={14} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-x-1" />
    Página inicial
  </Link>
);
