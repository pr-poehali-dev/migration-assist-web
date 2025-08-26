import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Отзывы о миграционных услугах в Свердловской области
          </h2>
          <p className="text-xl text-gray-600">
            Что говорят наши клиенты о работе с нами
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Адвокат помог при задержании за 20 000 руб. — всё решили за день! Профессионально и быстро."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <Icon name="User" size={20} />
                </div>
                <div>
                  <div className="font-semibold">Азиз М.</div>
                  <div className="text-sm text-gray-500">Узбекистан</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Получили РВП всей семьёй через 3 месяца. Юристы объяснили каждый шаг, никаких неожиданностей."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <Icon name="User" size={20} />
                </div>
                <div>
                  <div className="font-semibold">Ли Вэй</div>
                  <div className="text-sm text-gray-500">Китай</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Оформили ВНЖ за 5 месяцев. Цена как договорились, без доплат. Рекомендую всем знакомым."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <Icon name="User" size={20} />
                </div>
                <div>
                  <div className="font-semibold">Джамшед А.</div>
                  <div className="text-sm text-gray-500">Таджикистан</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;