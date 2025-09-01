import React from 'react';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Scale" className="text-primary" size={24} />
              <span className="text-xl font-bold">Миграция PRO</span>
            </div>
            <p className="text-gray-400 mb-4">
              Эксперты по миграционным услугам в Свердловской области с 2015 года
            </p>
            <div className="flex space-x-3">
              <Icon name="MessageCircle" size={24} className="text-gray-400 hover:text-primary cursor-pointer" />
              <Icon name="Phone" size={24} className="text-gray-400 hover:text-primary cursor-pointer" />
              <Icon name="Mail" size={24} className="text-gray-400 hover:text-primary cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white">РВП</a></li>
              <li><a href="#services" className="hover:text-white">ВНЖ</a></li>
              <li><a href="#services" className="hover:text-white">Гражданство РФ</a></li>
              <li><a href="#services" className="hover:text-white">Срочный адвокат</a></li>
              <li><a href="#services" className="hover:text-white">Патент на работу</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white">О компании</a></li>
              <li><a href="#reviews" className="hover:text-white">Отзывы</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href="#consultation" className="hover:text-white">Консультация</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#consultation" className="hover:text-white">Помощь</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href="#services" className="hover:text-white">Документы</a></li>
              <li><a href="#consultation" className="hover:text-white">Консультация</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Миграция PRO. Все права защищены.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Лицензия на осуществление юридической деятельности
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;