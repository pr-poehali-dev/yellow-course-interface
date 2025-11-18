import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Icon name="GraduationCap" size={20} className="text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">EduFlow</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Образовательная платформа нового поколения
            </p>
          </div>

          <div className="space-y-4 animate-fade-in">
            <h3 className="font-semibold">Навигация</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Главная
              </Link>
              <Link to="/courses" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Курсы
              </Link>
              <Link to="/dashboard" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Личный кабинет
              </Link>
            </div>
          </div>

          <div className="space-y-4 animate-fade-in">
            <h3 className="font-semibold">Контакты</h3>
            <div className="space-y-2">
              <a href="mailto:support@eduflow.ru" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={16} />
                support@eduflow.ru
              </a>
              <a href="tel:+79001234567" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Phone" size={16} />
                +7 (900) 123-45-67
              </a>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="MapPin" size={16} />
                Москва, Россия
              </p>
            </div>
          </div>

          <div className="space-y-4 animate-fade-in">
            <h3 className="font-semibold">Социальные сети</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 EduFlow. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;