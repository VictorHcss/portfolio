import Image from "next/image";

export const About = () => {
  return (
    <section className="py-16">
      <div className="relative w-48 h-48 mb-6">
        <Image
          src="/photo-icon.png"
          alt="Sua Foto"
          fill
          sizes="(max-width: 768px) 100vw, 192px"
          className="object-cover rounded-full"
        />
      </div>

      <h2 className="text-2xl font-bold mb-6">Sobre Mim</h2>

      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
        <p className="text-gray-700 leading-relaxed">
          Olá! Meu nome é Victor H, sou Desenvolvedor Front-end Júnior
          apaixonado por transformar ideias em interfaces modernas, responsivas
          e intuitivas. Estou constantemente aprimorando minhas habilidades para
          desenvolver aplicações com código limpo, organizado e de fácil
          manutenção.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          Atualmente estudo tecnologias do ecossistema JavaScript, com foco em
          React, Next.js e TypeScript. Gosto de enfrentar novos desafios,
          aprender boas práticas de desenvolvimento e criar soluções que
          ofereçam uma ótima experiência para o usuário.
        </p>
      </div>
    </section>
  );
};
