
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, CircleDot, LayoutDashboard, DollarSign, Sun, Moon, Users, Zap, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Switch } from '@/components/ui/switch';

const Header = () => {
  const [activePage, setActivePage] = useState('features');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    // Apply the theme to the document when it changes
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage(page);
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg" 
        : "bg-transparent"
    )}>
      <div className="w-full max-w-7xl mx-auto px-4 py-4">
        <header className={cn(
          "w-full py-3 px-6 md:px-8 flex items-center justify-between rounded-2xl transition-all duration-300",
          isScrolled 
            ? "bg-background/60 backdrop-blur-xl border border-border/30 shadow-2xl" 
            : "bg-transparent"
        )}>
          <div className="p-3">
            <Logo />
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-3 rounded-2xl text-muted-foreground hover:text-foreground transition-colors"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className={cn(
              "rounded-full px-1 py-1 transition-all duration-300",
              isScrolled 
                ? "backdrop-blur-xl bg-background/70 border border-border/40 shadow-lg" 
                : "backdrop-blur-md bg-background/80 border border-border shadow-lg"
            )}>
              <ToggleGroup type="single" value={activePage} onValueChange={(value) => value && setActivePage(value)}>
                <ToggleGroupItem 
                  value="features"
                  className={cn(
                    "px-4 py-2 rounded-full transition-colors relative",
                    activePage === 'features' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                  onClick={handleNavClick('features')}
                >
                  <CircleDot size={16} className="inline-block mr-1.5" /> Features
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="process" 
                  className={cn(
                    "px-4 py-2 rounded-full transition-colors relative",
                    activePage === 'process' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                  onClick={handleNavClick('process')}
                >
                  <Zap size={16} className="inline-block mr-1.5" /> Process
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="case-studies" 
                  className={cn(
                    "px-4 py-2 rounded-full transition-colors relative",
                    activePage === 'case-studies' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                  onClick={handleNavClick('case-studies')}
                >
                  <FileText size={16} className="inline-block mr-1.5" /> Case Studies
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="dashboard" 
                  className={cn(
                    "px-4 py-2 rounded-full transition-colors relative",
                    activePage === 'dashboard' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                  onClick={handleNavClick('dashboard')}
                >
                  <LayoutDashboard size={16} className="inline-block mr-1.5" /> Dashboard
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="pricing" 
                  className={cn(
                    "px-4 py-2 rounded-full transition-colors relative",
                    activePage === 'pricing' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                  onClick={handleNavClick('pricing')}
                >
                  <DollarSign size={16} className="inline-block mr-1.5" /> Pricing
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </nav>
          
          {/* Mobile navigation */}
          {mobileMenuOpen && (
            <div className={cn(
              "md:hidden absolute top-20 left-4 right-4 py-4 px-6 border rounded-2xl shadow-lg z-50 transition-all duration-300",
              isScrolled 
                ? "bg-background/90 backdrop-blur-xl border-border/40" 
                : "bg-background/95 backdrop-blur-md border-border"
            )}>
              <div className="flex flex-col gap-4">
                <a 
                  href="#features" 
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    activePage === 'features' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                  onClick={handleNavClick('features')}
                >
                  <CircleDot size={16} className="inline-block mr-1.5" /> Features
                </a>
                <a 
                  href="#process" 
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    activePage === 'process' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                  onClick={handleNavClick('process')}
                >
                  <Zap size={16} className="inline-block mr-1.5" /> Process
                </a>
                <a 
                  href="#case-studies" 
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    activePage === 'case-studies' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                  onClick={handleNavClick('case-studies')}
                >
                  <FileText size={16} className="inline-block mr-1.5" /> Case Studies
                </a>
                <a 
                  href="#dashboard" 
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    activePage === 'dashboard' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                  onClick={handleNavClick('dashboard')}
                >
                  <LayoutDashboard size={16} className="inline-block mr-1.5" /> Dashboard
                </a>
                <a 
                  href="#pricing" 
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    activePage === 'pricing' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                  onClick={handleNavClick('pricing')}
                >
                  <DollarSign size={16} className="inline-block mr-1.5" /> Pricing
                </a>
                
                {/* Add theme toggle for mobile */}
                <div className="flex items-center justify-between px-3 py-2 border-t border-border/30 mt-2 pt-4">
                  <span className="text-sm text-muted-foreground">Theme</span>
                  <div className="flex items-center gap-2">
                    <Moon size={16} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
                    <Switch 
                      checked={!isDarkMode} 
                      onCheckedChange={toggleTheme} 
                      className="data-[state=checked]:bg-primary"
                    />
                    <Sun size={16} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="hidden md:flex items-center gap-4">
            {/* Theme toggle for desktop */}
            <div className={cn(
              "flex items-center gap-2 rounded-full px-3 py-2 transition-all duration-300",
              isScrolled 
                ? "bg-background/50 backdrop-blur-sm" 
                : "bg-transparent"
            )}>
              <Moon size={18} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
              <Switch 
                checked={!isDarkMode} 
                onCheckedChange={toggleTheme} 
                className="data-[state=checked]:bg-primary"
              />
              <Sun size={18} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
            </div>
            <div className="rounded-2xl">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-muted">Log in</Button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
