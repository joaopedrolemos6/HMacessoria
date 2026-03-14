import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-foreground/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Hexis" className="h-8 w-auto" />
          </div>

          <p className="text-muted-foreground text-sm text-center font-light max-w-md">
            Inteligência comercial e tráfego de alta performance para empresas que querem crescer de forma previsível.
          </p>

          <p className="text-muted-foreground/50 text-xs">
            © {new Date().getFullYear()} Hexis. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
