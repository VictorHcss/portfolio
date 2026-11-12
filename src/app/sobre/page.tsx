import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { Stack } from "@/components/sections/Stack";
import { BeyondCode } from "@/components/sections/BeyondCode";
import { BackLink } from "@/components/ui/BackLink";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Trajetória, formação, forma de trabalhar e stack de Victor Henrique.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <div className="pt-24 md:pt-32 [&>section:first-of-type]:pt-10 md:[&>section:first-of-type]:pt-14">
      <BackLink />
      <About standalone />
      <Stack />
      <BeyondCode />
    </div>
  );
}
