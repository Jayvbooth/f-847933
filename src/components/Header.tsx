
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

  // Close mobile menu when clicking outside or on overlay
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('[data-mobile-menu]')) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);
  
  const handleNavClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage(page);
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {/* Header with glassmorphism */}
      <header className={cn(
        "fixed top-4 left-4 right-4 z-50 transition-all duration-500",
        "py-3 md:py-4 px-4 md:px-6 lg:px-8 flex items-center justify-between rounded-3xl",
        "backdrop-blur-xl bg-background/8 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
      )}>
        <div className="flex items-center">
          <Logo />
        </div>
        
        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          {/* Theme toggle for mobile */}
          <div className={cn(
            "flex items-center gap-2 rounded-full px-2 py-1 transition-all duration-300",
            "backdrop-blur-xl bg-background/10 border border-white/15"
          )}>
            <Moon size={14} className={`transition-colors ${isDarkMode ? 'text-foreground' : 'text-foreground/50'}`} />
            <Switch 
              checked={!isDarkMode} 
              onCheckedChange={toggleTheme} 
              className="data-[state=checked]:bg-primary scale-75"
            />
            <Sun size={14} className={`transition-colors ${!isDarkMode ? 'text-foreground' : 'text-foreground/50'}`} />
          </div>
          
          {/* Mobile menu button */}
          <button 
            className={cn(
              "p-2 rounded-2xl transition-all duration-300",
              "text-foreground/80 hover:text-foreground hover:bg-white/10 hover:scale-110",
              "backdrop-blur-xl bg-background/10 border border-white/15"
            )}
            onClick={toggleMobileMenu}
            data-mobile-menu="trigger"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
          <div className={cn(
            "rounded-full px-2 py-2 transition-all duration-500",
            "backdrop-blur-2xl bg-background/15 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
          )}>
            <ToggleGroup type="single" value={activePage} onValueChange={(value) => value && setActivePage(value)}>
              <ToggleGroupItem 
                value="features"
                className={cn(
                  "px-4 py-2.5 rounded-full transition-all duration-300 relative backdrop-blur-sm",
                  activePage === 'features' 
                    ? 'text-foreground bg-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.1)]' 
                    : 'text-foreground/70 hover:text-foreground hover:bg-white/8'
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
                    ? 'text-foreground bg-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.1)]' 
                    : 'text-foreground/70 hover:text-foreground hover:bg-white/8'
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
                    ? 'text-foreground bg-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.1)]' 
                    : 'text-foreground/70 hover:text-foreground hover:bg-white/8'
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
                    ? 'text-foreground bg-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.1)]' 
                    : 'text-foreground/70 hover:text-foreground hover:bg-white/8'
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
                    ? 'text-foreground bg-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.1)]' 
                    : 'text-foreground/70 hover:text-foreground hover:bg-white/8'
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
            "backdrop-blur-xl bg-background/10 border border-white/15"
          )}>
            <Moon size={18} className={`transition-colors ${isDarkMode ? 'text-foreground' : 'text-foreground/50'}`} />
            <Switch 
              checked={!isDarkMode} 
              onCheckedChange={toggleTheme} 
              className="data-[state=checked]:bg-primary"
            />
            <Sun size={18} className={`transition-colors ${!isDarkMode ? 'text-foreground' : 'text-foreground/50'}`} />
          </div>
          <div className="rounded-2xl backdrop-blur-xl bg-background/10 border border-white/15">
            <Button variant="ghost" className="text-foreground/80 hover:text-foreground hover:bg-white/10">Log in</Button>
          </div>
        </div>
      </header>

      {/* Mobile navigation - uniform with header */}
      {mobileMenuOpen && (
        <div 
          className={cn(
            "md:hidden fixed top-20 left-4 right-4 z-40 transition-all duration-300",
            "backdrop-blur-xl bg-background/8 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)]",
            "rounded-3xl py-4 px-4"
          )}
          data-mobile-menu="menu"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="space-y-1">
            {[
              { id: 'features', icon: CircleDot, label: 'Features' },
              { id: 'process', icon: Zap, label: 'Process' },
              { id: 'case-studies', icon: FileText, label: 'Case Studies' },
              { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
              { id: 'pricing', icon: DollarSign, label: 'Pricing' }
            ].map(({ id, icon: Icon, label }) => (
              <button 
                key={id}
                className={cn(
                  "w-full flex items-center px-4 py-3 text-sm rounded-2xl transition-all duration-300",
                  "backdrop-blur-sm hover:bg-white/10 hover:scale-[1.02]",
                  activePage === id 
                    ? 'bg-white/15 text-foreground shadow-[0_4px_20px_rgba(0,0,0,0.1)]' 
                    : 'text-foreground/70 hover:text-foreground'
                )}
                onClick={handleNavClick(id)}
              >
                <Icon size={18} className="mr-3" />
                {label}
              </button>
            ))}
            
            {/* Login button for mobile */}
            <div className="pt-3 mt-3 border-t border-white/10">
              <Button 
                variant="ghost" 
                className={cn(
                  "w-full text-foreground/80 hover:text-foreground rounded-2xl py-3",
                  "backdrop-blur-sm hover:bg-white/10 hover:scale-[1.02] transition-all duration-300"
                )}
              >
                Log in
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop overlay */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
