const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-foreground/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-primary rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-primary-foreground rotate-45" />
            </div>
            <span className="text-lg font-bold tracking-tighter uppercase text-foreground">
              Nexus<span className="text-primary">.</span>
            </span>
          </div>

          <p className="text-muted-foreground text-sm text-center font-light max-w-md">
            Inteligência comercial e tráfego de alta performance para empresas que querem crescer de forma previsível.
          </p>

          <p className="text-muted-foreground/50 text-xs">
            © {new Date().getFullYear()} Nexus. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
