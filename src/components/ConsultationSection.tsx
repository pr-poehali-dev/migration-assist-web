import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ConsultationSection = () => {
  return (
    <section id="consultation" className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Бесплатная консультация миграционного юриста в Екатеринбурге
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Опишите ситуацию — дадим план за 15 минут. Срочный вызов адвоката за 20 000 руб.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button variant="secondary" size="lg" className="text-lg px-8">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Telegram консультация
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
            <Icon name="Phone" size={20} className="mr-2" />
            Позвонить сейчас
          </Button>
        </div>
        <div className="text-sm opacity-75">
          Работаем круглосуточно • Конфиденциально • Первая консультация бесплатно
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;