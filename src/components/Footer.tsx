import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="font-display text-4xl text-primary">
            KMGD
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} KM Gnana Deepak. Made with{" "}
            <Heart size={14} className="text-primary fill-primary" /> and code , All Rights Reserved.
          </p>
           <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with React , TypeScript & Tailwind CSS
            <Heart size={14} className="text-primary fill-primary" />.
          </p>
          

          {/* Back to Top */}
          <a
            href="#home"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
