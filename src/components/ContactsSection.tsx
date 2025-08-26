import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Контакты: Миграционные услуги и адвокат в Екатеринбурге
          </h2>
          <p className="text-xl text-gray-600">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="text-center p-8">
            <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Адрес офиса</h3>
            <p className="text-gray-600">
              г. Екатеринбург<br />
              ул. Ленина, 15, офис 301<br />
              (рядом с МФЦ)
            </p>
          </Card>

          <Card className="text-center p-8">
            <Icon name="Phone" size={48} className="text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Телефон</h3>
            <p className="text-gray-600 mb-2">
              <a href="tel:+73433334455" className="text-primary hover:underline text-lg font-semibold">
                +7 (343) 333-44-55
              </a>
            </p>
            <p className="text-sm text-gray-500">Работаем 24/7 в экстренных случаях</p>
          </Card>

          <Card className="text-center p-8">
            <Icon name="Clock" size={48} className="text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Режим работы</h3>
            <p className="text-gray-600">
              Пн-Пт: 9:00 — 18:00<br />
              Сб: 10:00 — 16:00<br />
              Вс: по договорённости
            </p>
            <p className="text-sm text-green-600 font-semibold mt-2">Экстренно: круглосуточно</p>
          </Card>
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Срочная помощь в Свердловской области
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="AlertTriangle" size={20} className="text-red-500" />
                  <span className="text-gray-700">Задержала полиция? Адвокат выезжает за 20 000 руб</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-green-500" />
                  <span className="text-gray-700">Прибытие в течение 30 минут по Екатеринбургу</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" size={20} className="text-blue-500" />
                  <span className="text-gray-700">Проверяем состояние задержанных для родственников</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="text-4xl font-bold text-red-600 mb-2">20 000 ₽</div>
              <div className="text-gray-600 mb-4">Фиксированная стоимость вызова</div>
              <Button variant="destructive" size="lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Вызвать адвоката сейчас
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;