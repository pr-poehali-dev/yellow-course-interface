import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 animate-fade-in">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Icon name="GraduationCap" size={24} className="text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">EduFlow</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/courses" className="text-sm font-medium hover:text-primary transition-colors">
              Курсы
            </Link>
            <Link to="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
              Личный кабинет
            </Link>
            <Link to="/contacts" className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/dashboard">Войти</Link>
            </Button>
            <Button asChild className="animate-pulse-glow">
              <Link to="/dashboard">Начать обучение</Link>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 animate-slide-in">
            <Link to="/" className="block py-2 hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/courses" className="block py-2 hover:text-primary transition-colors">
              Курсы
            </Link>
            <Link to="/dashboard" className="block py-2 hover:text-primary transition-colors">
              Личный кабинет
            </Link>
            <Link to="/contacts" className="block py-2 hover:text-primary transition-colors">
              Контакты
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" asChild className="w-full">
                <Link to="/dashboard">Войти</Link>
              </Button>
              <Button asChild className="w-full">
                <Link to="/dashboard">Начать обучение</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;