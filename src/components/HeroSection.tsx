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
              Миграционный юрист в Екатеринбурге: РВП, ВНЖ, Гражданство | <span className="text-primary">Срочный адвокат 24/7</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Хотите легализоваться в Екатеринбурге? Поможем с РВП, ВНЖ, гражданством РФ или защитим при задержании полицией. С 2015 года оформили 10 000+ статусов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://t.me/migracia_bot" target="_blank" rel="noopener noreferrer">Консультация 24/7</a>
              </Button>
              <Button variant="destructive" size="lg" className="text-lg px-8" asChild>
                <a href="https://t.me/migracia_bot" target="_blank" rel="noopener noreferrer">
                  <Icon name="AlertTriangle" size={20} className="mr-2" />
                  Адвокат за 20 000 руб
                </a>
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

        </div>
      </div>
    </section>
  );
};

export default HeroSection;