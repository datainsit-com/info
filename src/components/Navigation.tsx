import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Career', path: '/Career' },
    { name: 'Services', path: '/Services' },
    { name: 'Contact', path: '/contact' },
  ];

  const aboutItems = [
    { name: 'How we work', path: '/about' },
    { name: 'Who we are', path: '/about/team' },
    { name: 'Our commitments', path: '/about/mission' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DTS</span>
            </div>
            <span className="text-xl font-semibold text-foreground">DataIns Technology LLS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link text-sm font-medium transition-smooth ${
                  isActive(item.path) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth flex items-center space-x-1">
                <span>About</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-sm border border-border shadow-medium">
                {aboutItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.path}
                      className="text-sm text-muted-foreground hover:text-foreground transition-smooth cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-smooth ${
                    isActive(item.path) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t border-border pt-4">
                <p className="text-sm font-medium text-muted-foreground mb-2">About</p>
                <div className="pl-4 space-y-2">
                  {aboutItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-smooth"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;