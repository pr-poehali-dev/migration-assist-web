import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
              <a href="#consultation" className="text-gray-600 hover:text-primary transition-colors">Консультация</a>
              <a href="#reviews" className="text-gray-600 hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
              <Button variant="destructive" size="sm">
                <Icon name="Phone" size={16} className="mr-1" />
                Срочный вызов
              </Button>
            </nav>
            <div className="md:hidden">
              <Icon name="Menu" size={24} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Services Section */}
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
                  <Button variant="outline" className="w-full mt-4">Подробнее</Button>
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
                  <Button variant="outline" className="w-full mt-4">Подробнее</Button>
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
                  <Button variant="outline" className="w-full mt-4">Подробнее</Button>
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
                  <Button variant="destructive" className="w-full mt-4">Вызвать сейчас</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Миграция PRO: Эксперты по миграции в Свердловской области
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
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
                <Icon name="Building" size={64} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Наш офис в Екатеринбурге</h3>
                <p className="text-gray-600 mb-6">
                  Удобно расположен в центре города, рядом с МФЦ и отделениями МВД
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="MapPin" size={16} />
                    <span>ул. Ленина, 15, офис 301</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="Clock" size={16} />
                    <span>Пн-Пт: 9:00-18:00, экстренно 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
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

      {/* Consultation Section */}
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

      {/* Contacts Section */}
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

      {/* Footer */}
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
                <li><a href="#" className="hover:text-white">РВП</a></li>
                <li><a href="#" className="hover:text-white">ВНЖ</a></li>
                <li><a href="#" className="hover:text-white">Гражданство РФ</a></li>
                <li><a href="#" className="hover:text-white">Срочный адвокат</a></li>
                <li><a href="#" className="hover:text-white">Патент на работу</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">О компании</a></li>
                <li><a href="#" className="hover:text-white">Отзывы</a></li>
                <li><a href="#" className="hover:text-white">Контакты</a></li>
                <li><a href="#" className="hover:text-white">Политика конфиденциальности</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (343) 333-44-55</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>ул. Ленина, 15, офис 301</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span>24/7 экстренная помощь</span>
                </li>
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
    </div>
  );
};

export default Index;