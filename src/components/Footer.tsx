import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-6 px-4">
      <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">Home</Link>
          <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About</Link>
          <Link to="/upload" className="text-muted-foreground hover:text-primary transition-colors text-sm">Upload</Link>
        </div>
        <p className="text-muted-foreground text-sm">
          © 2026 prodAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
