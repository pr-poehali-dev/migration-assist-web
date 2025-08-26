import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const FloatingEmergencyButton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Button 
        size="lg" 
        className="bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl border-2 border-white px-4 py-3 animate-pulse"
        asChild
      >
        <a 
          href="https://t.me/migracia_bot" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <Icon name="Shield" size={20} />
          <span className="font-semibold text-sm">Срочный вызов</span>
        </a>
      </Button>
    </div>
  );
};

export default FloatingEmergencyButton;