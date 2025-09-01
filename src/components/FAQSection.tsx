import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "Сколько времени занимает получение РВП?",
      answer: "Рассмотрение заявления на РВП занимает до 4 месяцев с момента подачи документов. Наши юристы помогают подготовить документы правильно с первого раза, что исключает отказы и повторные подачи."
    },
    {
      question: "Какие документы нужны для ВНЖ?",
      answer: "Для ВНЖ необходимы: РВП, справка о доходах, медицинская справка, справка об отсутствии судимости, документы об образовании, знании русского языка и истории России. Полный список зависит от основания получения."
    },
    {
      question: "Можно ли получить гражданство РФ без знания русского языка?",
      answer: "От экзамена освобождаются: мужчины старше 65 лет, женщины старше 60 лет, инвалиды I группы, носители русского языка. Остальные должны сдать экзамен или предоставить документ об образовании на русском языке."
    },
    {
      question: "Что делать, если задержала полиция?",
      answer: "Немедленно свяжитесь с нами! Наш адвокат выезжает в течение 30 минут. Не подписывайте никаких документов без адвоката. Имеете право на один телефонный звонок и присутствие защитника."
    },
    {
      question: "Сколько стоит оформление патента на работу?",
      answer: "Стоимость оформления патента составляет от 3500 рублей. В услугу входит: подготовка документов, запись в МФЦ, сопровождение подачи, консультации по продлению. Срок оформления - 10 рабочих дней."
    },
    {
      question: "Можно ли подавать документы через представителя?",
      answer: "Да, через нотариально заверенную доверенность. Наши юристы могут представлять ваши интересы во всех инстанциях: МВД, МФЦ, миграционной службе. Это экономит ваше время и исключает ошибки."
    },
    {
      question: "Что такое квота на РВП и как в неё попасть?",
      answer: "Квота - ограниченное количество РВП на год по регионам. В 2024 году по Свердловской области - 1847 мест. Подача возможна с 1 июля. Мы отслеживаем открытие приёма и помогаем подать документы в первые дни."
    },
    {
      question: "Нужно ли уведомлять о проживании по РВП?",
      answer: "Да, ежегодно до 31 декабря нужно подавать уведомление о проживании с документами о доходах и времени пребывания в РФ. Несвоевременная подача грозит аннулированием РВП."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600">
            Ответы на популярные вопросы по миграционному праву
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <Icon 
                  name={openItems.includes(index) ? "ChevronUp" : "ChevronDown"} 
                  size={20} 
                  className="text-gray-400 flex-shrink-0"
                />
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <div className="border-t pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary/10 rounded-2xl p-8">
            <Icon name="MessageCircle" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Не нашли ответ на свой вопрос?
            </h3>
            <p className="text-gray-600 mb-6">
              Получите бесплатную консультацию от наших экспертов
            </p>
            <a 
              href="https://t.me/migracia_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Icon name="Send" size={20} className="mr-2" />
              Задать вопрос в Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;