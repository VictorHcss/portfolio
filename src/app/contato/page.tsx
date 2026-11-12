import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { BackLink } from "@/components/ui/BackLink";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com Victor Henrique: e-mail, GitHub e LinkedIn.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <div className="pt-24 md:pt-32 [&>section:first-of-type]:pt-10 md:[&>section:first-of-type]:pt-14">
      <BackLink />
      <Contact standalone />
    </div>
  );
}
