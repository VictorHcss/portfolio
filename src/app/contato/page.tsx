import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/home/Contact";

export default function ContatoPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-6 relative">
      <Header nome="VH" />
      <Contact full />
      <Footer />
    </main>
  );
}
