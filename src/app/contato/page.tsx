import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/home/Contact";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com Victor Henrique: e-mail, GitHub e LinkedIn.",
};

export default function ContatoPage() {
  return (
    <main id="conteudo" className="max-w-6xl mx-auto px-4 sm:px-6 relative">
      <Header nome="VH" />
      <Contact full />
      <Footer />
    </main>
  );
}
