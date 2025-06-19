
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
    <>
      <div className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "backdrop-blur-xl bg-background/20 border-b border-white/10 shadow-2xl" 
          : "bg-transparent"
      )}>
        <div className="w-full max-w-7xl mx-auto px-4 py-4">
          <header className={cn(
            "w-full py-4 px-6 md:px-8 flex items-center justify-between rounded-3xl transition-all duration-500",
            isScrolled 
              ? "backdrop-blur-2xl bg-background/15 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)]" 
              : "backdrop-blur-xl bg-background/10 border border-white/10"
          )}>
            <div className="flex items-center">
              <Logo />
            </div>
            
            {/* Mobile menu button */}
            <button 
              className={cn(
                "md:hidden p-3 rounded-2xl transition-all duration-300 backdrop-blur-md",
                "text-foreground/80 hover:text-foreground hover:bg-white/10 hover:scale-110"
              )}
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
              <div className={cn(
                "rounded-full px-2 py-2 transition-all duration-500",
                "backdrop-blur-2xl bg-background/20 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
              )}>
                <ToggleGroup type="single" value={activePage} onValueChange={(value) => value && setActivePage(value)}>
                  <ToggleGroupItem 
                    value="features"
                    className={cn(
                      "px-4 py-2.5 rounded-full transition-all duration-300 relative backdrop-blur-sm",
                      activePage === 'features' 
                        ? 'text-foreground bg-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.1)]' 
                        : 'text-foreground/70 hover:text-foreground hover:bg-white/10'
                    )}
                    onClick={handleNavClick('features')}
                  >
                    <CircleDot size={16} className="inline-block mr-1.5" /> Features
                  </ToggleGroupItem>
                  <ToggleGroupItem 
                    value="process" 
                    className={cn(
                      "px-4 py-2.5 rounded-full transition-all duration-300 relative backdrop-blur-sm",
                      activePage === 'process' 
                        ? 'text-foreground bg-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.1)]' 
                        : 'text-foreground/70 hover:text-foreground hover:bg-white/10'
                    )}
                    onClick={handleNavClick('process')}
                  >
                    <Zap size={16} className="inline-block mr-1.5" /> Process
                  </ToggleGroupItem>
                  <ToggleGroupItem 
                    value="case-studies" 
                    className={cn(
                      "px-4 py-2.5 rounded-full transition-all duration-300 relative backdrop-blur-sm",
                      activePage === 'case-studies' 
                        ? 'text-foreground bg-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.1)]' 
                        : 'text-foreground/70 hover:text-foreground hover:bg-white/10'
                    )}
                    onClick={handleNavClick('case-studies')}
                  >
                    <FileText size={16} className="inline-block mr-1.5" /> Case Studies
                  </ToggleGroupItem>
                  <ToggleGroupItem 
                    value="dashboard" 
                    className={cn(
                      "px-4 py-2.5 rounded-full transition-all duration-300 relative backdrop-blur-sm",
                      activePage === 'dashboard' 
                        ? 'text-foreground bg-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.1)]' 
                        : 'text-foreground/70 hover:text-foreground hover:bg-white/10'
                    )}
                    onClick={handleNavClick('dashboard')}
                  >
                    <LayoutDashboard size={16} className="inline-block mr-1.5" /> Dashboard
                  </ToggleGroupItem>
                  <ToggleGroupItem 
                    value="pricing" 
                    className={cn(
                      "px-4 py-2.5 rounded-full transition-all duration-300 relative backdrop-blur-sm",
                      activePage === 'pricing' 
                        ? 'text-foreground bg-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.1)]' 
                        : 'text-foreground/70 hover:text-foreground hover:bg-white/10'
                    )}
                    onClick={handleNavClick('pricing')}
                  >
                    <DollarSign size={16} className="inline-block mr-1.5" /> Pricing
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </nav>
            
            <div className="hidden md:flex items-center gap-4">
              {/* Theme toggle for desktop */}
              <div className={cn(
                "flex items-center gap-3 rounded-full px-4 py-2.5 transition-all duration-300",
                "backdrop-blur-xl bg-background/15 border border-white/20"
              )}>
                <Moon size={18} className={`transition-colors ${isDarkMode ? 'text-foreground' : 'text-foreground/50'}`} />
                <Switch 
                  checked={!isDarkMode} 
                  onCheckedChange={toggleTheme} 
                  className="data-[state=checked]:bg-primary"
                />
                <Sun size={18} className={`transition-colors ${!isDarkMode ? 'text-foreground' : 'text-foreground/50'}`} />
              </div>
              <div className="rounded-2xl backdrop-blur-xl bg-background/15 border border-white/20">
                <Button variant="ghost" className="text-foreground/80 hover:text-foreground hover:bg-white/10">Log in</Button>
              </div>
            </div>
          </header>
        </div>
      </div>

      {/* Mobile navigation overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Mobile menu */}
          <div className={cn(
            "absolute top-24 left-4 right-4 rounded-3xl transition-all duration-500 transform",
            "backdrop-blur-2xl bg-background/25 border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.2)]",
            "animate-in slide-in-from-top-4 fade-in-0 duration-300"
          )}>
            <div className="p-6 space-y-1">
              {[
                { id: 'features', icon: CircleDot, label: 'Features' },
                { id: 'process', icon: Zap, label: 'Process' },
                { id: 'case-studies', icon: FileText, label: 'Case Studies' },
                { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
                { id: 'pricing', icon: DollarSign, label: 'Pricing' }
              ].map(({ id, icon: Icon, label }) => (
                <a 
                  key={id}
                  href={`#${id}`}
                  className={cn(
                    "flex items-center px-4 py-3 text-sm rounded-2xl transition-all duration-300",
                    "backdrop-blur-sm hover:bg-white/15 hover:scale-[1.02] hover:shadow-lg",
                    activePage === id 
                      ? 'bg-white/20 text-foreground shadow-[0_4px_20px_rgba(0,0,0,0.1)]' 
                      : 'text-foreground/70 hover:text-foreground'
                  )}
                  onClick={handleNavClick(id)}
                >
                  <Icon size={18} className="mr-3" />
                  {label}
                </a>
              ))}
              
              {/* Theme toggle for mobile */}
              <div className={cn(
                "flex items-center justify-between px-4 py-3 mt-4 pt-4",
                "border-t border-white/20 backdrop-blur-sm rounded-2xl bg-white/5"
              )}>
                <span className="text-sm text-foreground/70 font-medium">Theme</span>
                <div className="flex items-center gap-3">
                  <Moon size={18} className={`transition-colors ${isDarkMode ? 'text-foreground' : 'text-foreground/50'}`} />
                  <Switch 
                    checked={!isDarkMode} 
                    onCheckedChange={toggleTheme} 
                    className="data-[state=checked]:bg-primary"
                  />
                  <Sun size={18} className={`transition-colors ${!isDarkMode ? 'text-foreground' : 'text-foreground/50'}`} />
                </div>
              </div>
              
              {/* Login button for mobile */}
              <div className="pt-2">
                <Button 
                  variant="ghost" 
                  className={cn(
                    "w-full text-foreground/80 hover:text-foreground rounded-2xl py-3",
                    "backdrop-blur-sm hover:bg-white/15 hover:scale-[1.02] transition-all duration-300"
                  )}
                >
                  Log in
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
