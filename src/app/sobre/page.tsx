import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/home/About";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Formação, foco e experiência de Victor Henrique.",
};

export default function SobrePage() {
  return (
    <main id="conteudo" className="max-w-6xl mx-auto px-4 md:px-6 relative">
      <Header nome="VH" />
      <About />
      <Footer />
    </main>
  );
}
