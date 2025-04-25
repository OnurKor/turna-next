"use client";

import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from 'next-intl';
import { setCookie, getCookie } from 'cookies-next';

const LanguageSelector = ({ className = "", isDropdown = false }: { className?: string, isDropdown?: boolean }) => {
  const t = useTranslations();
  const [currentLanguage, setCurrentLanguage] = useState('tr');

  useEffect(() => {
    const savedLanguage = getCookie('locale') as string;
    if (savedLanguage && (savedLanguage === 'tr' || savedLanguage === 'en')) {
      setCurrentLanguage(savedLanguage);
    } else {
      setCurrentLanguage('tr');
    }
  }, []);

  const changeLanguage = (language: string) => {
    setCookie('locale', language, { path: '/', maxAge: 60 * 60 * 24 * 365 }); // 1 yıl sakla
    setCurrentLanguage(language);
    window.location.reload()
   
  };

  if (isDropdown) {
    return (
      <Select value={currentLanguage} onValueChange={changeLanguage}>
        <SelectTrigger className={`w-[70px] ${className}`}>
          <SelectValue>
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-1" />
              <span>{currentLanguage.toUpperCase()}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="tr">🇹🇷 TR</SelectItem>
          <SelectItem value="en">🇬🇧 EN</SelectItem>
        </SelectContent>
      </Select>
    );
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button
        className={`flex items-center px-2 py-1 rounded text-sm transition-all ${
          currentLanguage === 'tr' 
            ? 'bg-turna-500 text-white' 
            : 'hover:bg-gray-100'
        }`}
        onClick={() => changeLanguage('tr')}
      >
        🇹🇷 {t('languageSelector.tr')}
      </button>
      <button
        className={`flex items-center px-2 py-1 rounded text-sm transition-all ${
          currentLanguage === 'en' 
            ? 'bg-turna-500 text-white' 
            : 'hover:bg-gray-100'
        }`}
        onClick={() => changeLanguage('en')}
      >
        🇬🇧 {t('languageSelector.en')}
      </button>
    </div>
  );
};

export default LanguageSelector;
