import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="outline" className="bg-white">
                <Icon name="MapPin" size={14} className="mr-1" />
                Свердловская область
              </Badge>
              <Badge variant="outline" className="bg-white">
                <Icon name="Clock" size={14} className="mr-1" />
                Работаем 24/7
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Миграционные услуги и срочная помощь адвоката в <span className="text-primary">Свердловской области</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Хотите легализоваться в Екатеринбурге? Поможем с РВП, ВНЖ, гражданством РФ или защитим при задержании полицией. С 2015 года оформили 10 000+ статусов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-lg px-8">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Бесплатная консультация
              </Button>
              <Button variant="destructive" size="lg" className="text-lg px-8">
                <Icon name="AlertTriangle" size={20} className="mr-2" />
                Адвокат за 20 000 руб
              </Button>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={16} className="text-green-500" />
                <span>Фиксированные цены</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-green-500" />
                <span>98% успеха</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-green-500" />
                <span>Выезд через 30 минут</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Срочная помощь</h3>
                <p className="text-gray-600">Заполните форму для экстренного вызова адвоката</p>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Описание ситуации</label>
                  <Textarea placeholder="Кратко опишите вашу ситуацию" rows={3} />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Вызвать адвоката
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;