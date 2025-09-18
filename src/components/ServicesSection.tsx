import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import OrderForm from '@/components/OrderForm';

const ServicesSection = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  const [orderForm, setOrderForm] = useState<{ serviceName: string; servicePrice: string } | null>(null);

  const services = {
    rvp: {
      title: 'РВП - Разрешение на временное проживание',
      description: 'Консультации и полное сопровождение получения РВП в Свердловской области',
      items: [
        {
          title: 'Старт: Что делать приехав в РФ?',
          price: '1 500 ₽',
          features: [
            'Консультация 30 мин (Telegram/WhatsApp)',
            'Проверка статуса: патент, карта, НДФЛ',
            'Ответы на 5 главных вопросов',
            'Ссылки на гос. сайты'
          ]
        },
        {
          title: 'Пошаговый план: Патент за 5 дней',
          price: '4 900 ₽',
          features: [
            'Подробная инструкция: где, когда, сколько платить',
            'Чек-лист: 7 шагов от А до Я',
            'Шаблоны: заявление на патент, уведомление о работе',
            'Срок: план за 24 часа'
          ]
        },
        {
          title: 'Спасение: Патент просрочен?',
          price: '7 900 ₽',
          features: [
            'Анализ рисков (депортация, штраф)',
            'Что делать: срочные шаги',
            'Как минимизировать последствия',
            'Шаблон заявления о восстановлении срока'
          ]
        },
        {
          title: 'РВП: План действий',
          price: '9 900 ₽',
          features: [
            'Пошаговая инструкция для Свердловской области',
            'Список документов (с актуальными требованиями)',
            'Где подавать в Екатеринбурге, сколько ждать',
            'Шаблоны заявлений и согласий'
          ]
        }
      ]
    },
    vnzh: {
      title: 'ВНЖ - Вид на жительство в РФ',
      description: 'Оформление вида на жительство в Свердловской области за 4-6 месяцев',
      items: [
        {
          title: 'Консультация по ВНЖ',
          price: '3 000 ₽',
          features: [
            'Оценка ваших шансов на получение ВНЖ',
            'Требования для Свердловской области',
            'Сроки и стоимость процедуры',
            'Пошаговый план действий'
          ]
        },
        {
          title: 'Подготовка документов ВНЖ',
          price: '9 900 ₽',
          features: [
            'Полный пакет документов',
            'Заполнение заявления',
            'Проверка справок и переводов',
            'Письменный план действий'
          ]
        },
        {
          title: 'Полное сопровождение ВНЖ',
          price: '20 000 ₽',
          features: [
            'Консультация и подготовка документов',
            'Контроль прохождения',
            'Получение готового ВНЖ',
            'Юридическая поддержка на всех этапах'
          ]
        }
      ]
    },
    citizenship: {
      title: 'Гражданство РФ',
      description: 'Получение российского гражданства в Свердловской области за 1-3 года',
      items: [
        {
          title: 'Анализ перспектив гражданства',
          price: '3 000 ₽',
          features: [
            'Оценка возможности получения гражданства',
            'Сроки для вашей ситуации',
            'Требования и документы',
            'Альтернативные пути получения'
          ]
        },
        {
          title: 'Подготовка к экзаменам',
          price: '9 900 ₽',
          features: [
            'Материалы для подготовки к экзаменам',
            'Тесты по русскому языку и истории',
            'Консультации по сложным вопросам',
            'Индивидуальный план подготовки'
          ]
        },
        {
          title: 'Полное сопровождение гражданства',
          price: '29 990 ₽',
          features: [
            'Весь процесс от А до Я',
            'Подготовка всех документов',
            'Сопровождение на всех этапах',
            'Получение паспорта РФ'
          ]
        }
      ]
    },
    lawyer: {
      title: 'Срочная помощь адвоката',
      description: 'Экстренная правовая защита мигрантов в Свердловской области 24/7',
      items: [
        {
          title: 'Вызов адвоката при задержании',
          price: '20 000 ₽',
          features: [
            'Выезд адвоката в течение 30 минут',
            'Защита прав при задержании полицией',
            'Присутствие при допросе',
            'Составление жалоб и ходатайств',
            'Работаем по всей Свердловской области'
          ]
        },
        {
          title: 'Проверка задержанного для родственников',
          price: '20 000 ₽',
          features: [
            'Выяснение местонахождения задержанного',
            'Проверка состояния здоровья',
            'Передача необходимых вещей',
            'Информирование родственников о ситуации',
            'Организация освобождения'
          ]
        },
        {
          title: 'Защита от депортации',
          price: '20 000 ₽',
          features: [
            'Анализ оснований для депортации',
            'Подготовка возражений',
            'Представительство в суде',
            'Обжалование решений',
            'Срочные меры защиты'
          ]
        }
      ]
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Миграционные услуги в Екатеринбурге и Свердловской области
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональная помощь в оформлении документов для мигрантов: РВП от 1500₽, ВНЖ от 3000₽, Гражданство от 3000₽, Срочный адвокат 20000₽
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
                <div className="text-2xl font-bold text-primary mb-2">от 1 500 ₽</div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="CheckCircle" size={14} className="text-green-500" />
                    <span>Консультации</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="CheckCircle" size={14} className="text-green-500" />
                    <span>Полное сопровождение</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => setOpenDialog('rvp')}
                >
                  Подробнее
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
                <div className="text-2xl font-bold text-secondary mb-2">от 3 000 ₽</div>
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
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => setOpenDialog('vnzh')}
                >
                  Подробнее
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
                <div className="text-2xl font-bold text-green-600 mb-2">от 3 000 ₽</div>
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
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => setOpenDialog('citizenship')}
                >
                  Подробнее
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
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => setOpenDialog('lawyer')}
                >
                  Подробнее
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dialogs for each service */}
        {Object.entries(services).map(([key, service]) => (
          <Dialog key={key} open={openDialog === key} onOpenChange={() => setOpenDialog(null)}>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-2">{service.title}</DialogTitle>
                <DialogDescription className="text-lg text-gray-600 mb-6">
                  {service.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid md:grid-cols-2 gap-6">
                {service.items.map((item, index) => (
                  <Card key={index} className="border-2 hover:border-primary/30 transition-colors">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <div className="text-2xl font-bold text-primary">{item.price}</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <Icon name="CheckCircle" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className="w-full mt-4"
                        onClick={() => setOrderForm({ serviceName: item.title, servicePrice: item.price })}
                      >
                        Заказать услугу
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 text-center">
                  <Icon name="MapPin" size={16} className="inline mr-1" />
                  Все услуги предоставляются на территории Свердловской области
                </p>
              </div>
            </DialogContent>
          </Dialog>
        ))}
        
        {/* Order Form Modal */}
        {orderForm && (
          <OrderForm
            serviceName={orderForm.serviceName}
            servicePrice={orderForm.servicePrice}
            onClose={() => setOrderForm(null)}
          />
        )}
      </div>
    </section>
  );
};

export default ServicesSection;