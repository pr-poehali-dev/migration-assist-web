import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Scale" className="text-primary" size={32} />
            <span className="text-xl font-bold text-gray-900">Миграция PRO</span>
            <Badge variant="secondary" className="ml-2">Екатеринбург</Badge>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О нас</a>
            <a href="#reviews" className="text-gray-600 hover:text-primary transition-colors">Отзывы</a>
            <a href="#faq" className="text-gray-600 hover:text-primary transition-colors">FAQ</a>
            <a href="#consultation" className="text-gray-600 hover:text-primary transition-colors">Консультация</a>
            <Button variant="destructive" size="sm" asChild>
              <a href="https://t.me/migracia_bot" target="_blank" rel="noopener noreferrer">
                <Icon name="Phone" size={16} className="mr-1" />
                Срочный вызов
              </a>
            </Button>
          </nav>
          <div className="md:hidden">
            <Icon name="Menu" size={24} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;