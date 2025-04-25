

import { MapPin, Phone, Mail } from '@/lib/icons'; // ✅ optimize edilmiş import
import Logo from "@/assets/images/turna.io_Logo-2.png";
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Footer = () => {
const t = useTranslations("footer")
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-300 text-gray-700 pt-8 pb-3">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
          {/* Column 1: Logo and Contact */}
          <div className="space-y-1">
            <Link href="/" className="flex items-center w-full h-24 -mt-7 max-w-[240px]">
              <Image
                src={Logo}
                alt="turna.io logo"
                className="object-cover" 
              />
            </Link>
            <div className="space-y-3 text-gray-900"> 
              <p className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-turna-500 flex-shrink-0 mt-1" />
                <span className="text-md">Ostim OSB Mahallesi Cevat Dündar Caddesi No: 1/1 İç Kapı No: 10 Yenimahalle/ANKARA</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-turna-500 flex-shrink-0" />
                <span className="text-md">+90 (312) 387 37 77</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-turna-500 flex-shrink-0" />
                <span className="text-md">turna.bilisim.io@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{t('solutions')}</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/cozumler" className="text-md hover:text-turna-500 transition-colors">
                  {t('indoorSolutions')}
                </Link>
              </li>
              <li>
                <Link href="/cozumler" className="text-md hover:text-turna-500 transition-colors">
                  {t('sectoralSolutions')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{t('company')}</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/kurumsal-kimlik" className="text-md hover:text-turna-500 transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-md hover:text-turna-500 transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{t('legal')}</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/gizlilik-politikasi" className="text-md hover:text-turna-500 transition-colors">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href="/kullanim-kosullari" className="text-md hover:text-turna-500 transition-colors">
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-500 text-center text-sm">
            {t('copyright').replace('2024', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
