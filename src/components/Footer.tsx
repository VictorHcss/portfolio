export const Footer = () => {
  return (
    <footer className="py-10 border-t border-gray-200 mt-16 text-center">
      <p className="text-gray-600">
        © {new Date().getFullYear()} VH. “Faith is taking the first step even when you can't see the whole staircase.”― Martin Luther King Jr.
      </p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="https://github.com/VictorHcss" className="text-sm hover:text-blue-600 transition-colors">GitHub</a>
        <a href="mailto:henvictor2@gmail.com" className="text-sm hover:text-blue-600 transition-colors">E-mail</a>
        <a href="https://www.linkedin.com/in/victor-henrique-155842377/" className="text-sm hover:text-blue-600 transition-colors">Linkedin</a>
      </div>
    </footer>
  );
};