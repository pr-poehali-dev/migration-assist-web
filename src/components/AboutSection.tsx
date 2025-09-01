import React from 'react';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Опытный миграционный юрист в Екатеринбурге с 2015 года
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              С 2015 года помогаем мигрантам в Екатеринбурге. Наша команда — юристы и экс-сотрудники МВД с глубоким знанием миграционного законодательства.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10 000+</div>
                <div className="text-gray-600">оформленных статусов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">98%</div>
                <div className="text-gray-600">успешных дел</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">9 лет</div>
                <div className="text-gray-600">работы в регионе</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" size={20} className="text-green-500 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Экспертная команда</div>
                  <div className="text-gray-600">Юристы и экс-сотрудники МВД</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" size={20} className="text-green-500 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Локальная экспертиза</div>
                  <div className="text-gray-600">Работаем только в Свердловской области</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" size={20} className="text-green-500 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Срочная помощь</div>
                  <div className="text-gray-600">Адвокат выезжает в течение 30 минут</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="/img/b02773c9-f6a6-4a5b-9bf8-8d852190cf27.jpg" 
                alt="Офис миграционного юриста в Екатеринбурге"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-4">Наш офис в Екатеринбурге</h3>
                  <p className="mb-4">Удобно расположен в центре города, рядом с МФЦ и отделениями МВД</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <span>ул. Ленина, 15, офис 301</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span>Пн-Пт: 9:00-18:00, экстренно 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;