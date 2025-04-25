
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LanguageSelector = ({ className = "", isDropdown = false }: { className?: string, isDropdown?: boolean }) => {
  const { i18n, t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'tr');

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
    localStorage.setItem('turnaLanguage', language);
  };

  // Mobile dropdown version
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

  // Desktop version with buttons
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
