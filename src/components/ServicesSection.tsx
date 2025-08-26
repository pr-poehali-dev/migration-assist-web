import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги в Свердловской области
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр миграционных услуг и юридическая защита для иностранных граждан
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow border-primary/20">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="FileText" size={32} className="text-primary" />
              </div>
              <CardTitle className="text-xl mb-2">РВП</CardTitle>
              <CardDescription>Разрешение на временное проживание</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-primary mb-2">от 15 000 ₽</div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="CheckCircle" size={14} className="text-green-500" />
                    <span>Сопровождение</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="CheckCircle" size={14} className="text-green-500" />
                    <span>98% успеха</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <a href="https://t.me/migracia_bot" target="_blank" rel="noopener noreferrer">Подробнее</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-primary/20">
            <CardHeader>
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Home" size={32} className="text-secondary" />
              </div>
              <CardTitle className="text-xl mb-2">ВНЖ</CardTitle>
              <CardDescription>Вид на жительство в РФ</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-secondary mb-2">от 20 000 ₽</div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="CheckCircle" size={14} className="text-green-500" />
                    <span>4-6 месяцев</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="CheckCircle" size={14} className="text-green-500" />
                    <span>Без очередей</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <a href="https://t.me/migracia_bot" target="_blank" rel="noopener noreferrer">Подробнее</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-primary/20">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-green-600" />
              </div>
              <CardTitle className="text-xl mb-2">Гражданство</CardTitle>
              <CardDescription>Гражданство РФ</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-green-600 mb-2">от 25 000 ₽</div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="CheckCircle" size={14} className="text-green-500" />
                    <span>Полный цикл</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="CheckCircle" size={14} className="text-green-500" />
                    <span>1-3 года</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <a href="https://t.me/migracia_bot" target="_blank" rel="noopener noreferrer">Подробнее</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-red-200 bg-red-50">
            <CardHeader>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Scale" size={32} className="text-red-600" />
              </div>
              <CardTitle className="text-xl mb-2 text-red-700">Срочный адвокат</CardTitle>
              <CardDescription>Защита при задержании</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-red-600 mb-2">20 000 ₽</div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="Clock" size={14} className="text-red-500" />
                    <span>Выезд 30 минут</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="Shield" size={14} className="text-red-500" />
                    <span>24/7 защита</span>
                  </div>
                </div>
                <Button variant="destructive" className="w-full mt-4" asChild>
                  <a href="https://t.me/migracia_bot" target="_blank" rel="noopener noreferrer">Вызвать сейчас</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;