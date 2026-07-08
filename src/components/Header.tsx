interface HeaderProps {
    nome: string;
}

export const Header = ({ nome }: HeaderProps) => {
    return (
        <header className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h1 className="text-xl font-bold">{nome}</h1>
            <nav>
                <ul className="flex gap-4">
                    <li>Projetos</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
    );
};