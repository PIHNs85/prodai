import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X, Upload, Bell, User, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-[1800px] mx-auto px-4 py-2 flex items-center gap-4">
          {/* Left: Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              className="md:hidden text-foreground hover:text-primary transition-colors mr-1"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-serif text-foreground hidden sm:inline">prodAI</span>
            </Link>
          </div>

          {/* Center: Search */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-auto flex">
            <Input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-r-none border-r-0 bg-secondary focus-visible:ring-1"
            />
            <button
              type="submit"
              className="px-5 bg-secondary hover:bg-muted border border-input rounded-r-full transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-foreground" />
            </button>
          </form>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <Link
              to="/shorts"
              className="flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-full transition-colors"
            >
              <Zap className="w-5 h-5" />
              <span className="hidden lg:inline">Minis</span>
            </Link>
            <Link
              to="/upload"
              className="flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-full transition-colors"
            >
              <Upload className="w-5 h-5" />
              <span className="hidden lg:inline">Upload</span>
            </Link>
            <button className="p-2 text-foreground hover:bg-secondary rounded-full transition-colors" aria-label="Notifications">
              <Bell className="w-5 h-5" />
            </button>
            <Link to="/profile" className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center hover:bg-primary/30 transition-colors" aria-label="Profile">
              <User className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-background flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <span className="text-xl font-serif text-foreground">prodAI</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="text-foreground hover:text-primary"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col p-4 space-y-1">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-lg text-foreground hover:bg-secondary transition-colors">
              Home
            </Link>
            <Link to="/shorts" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-lg text-foreground hover:bg-secondary transition-colors">
              Minis
            </Link>
            <Link to="/upload" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-lg text-foreground hover:bg-secondary transition-colors">
              Upload
            </Link>
            <Link to="/profile" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-lg text-foreground hover:bg-secondary transition-colors">
              Profile
            </Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-lg text-foreground hover:bg-secondary transition-colors">
              About
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
