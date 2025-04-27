"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import {
  Menu,
  X,
  MapPin,
  ShieldCheck,
  HardHat,
  PackagePlus,
  Truck,
  Hospital,
  Music,
  Bell,
  ShoppingCart,
  User,
  HelpCircle,
  Mail,
  FileText,
} from "@/lib/icons";

import LanguageSelector from "./LanguageSelector";
import Logo from "@/assets/images/turna.io_Logo-2.png";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations();
  const pathname = usePathname();

  const isDarkTextPage = [
    "/kaynak",
    "/sss",
    "/iletisim",
    "/kullanim-kosullari",
    "/gizlilik-politikasi",
    "/cozumler",
    "/kurumsal-kimlik",
  ].includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getTextColor = () => {
    if (isDarkTextPage) return "text-gray-800";
    return isScrolled ? "text-gray-800" : "text-white";
  };

  const indoorSolutions = [
    {
      title: t("indoorSolutions.realTimeNavigation"),
      icon: <MapPin className="h-3.5 w-3.5 mr-2" />,
      path: "/cozumler/bina-ici-cozumler/gercek-zamanli-navigasyon",
    },
    {
      title: t("indoorSolutions.employeeSafety"),
      icon: <ShieldCheck className="h-3.5 w-3.5 mr-2" />,
      path: "/cozumler/bina-ici-cozumler/calisan-guvenligi",
    },
    {
      title: t("indoorSolutions.forkliftTracking"),
      icon: <HardHat className="h-3.5 w-3.5 mr-2" />,
      path: "/cozumler/bina-ici-cozumler/forklift-takip",
    },
    {
      title: t("indoorSolutions.forkliftAccidentPrevention"),
      icon: <ShieldCheck className="h-3.5 w-3.5 mr-2" />,
      path: "/cozumler/bina-ici-cozumler/forklift-kaza-onleme",
    },
    {
      title: t("indoorSolutions.assetTracking"),
      icon: <PackagePlus className="h-3.5 w-3.5 mr-2" />,
      path: "/cozumler/bina-ici-cozumler/varlik-takibi",
    },
    {
      title: t("indoorSolutions.personnelTracking"),
      icon: <User className="h-3.5 w-3.5 mr-2" />,
      path: "/cozumler/bina-ici-cozumler/personel-takibi",
    },
  ];

  const sectoralSolutions = [
    {
      title: t("sectoralSolutions.manufacturing"),
      icon: <HardHat className="h-3.5 w-3.5 mr-2" />,
      path: "/cozumler/sektorel-rtls-uygulamalari/uretim-sektoru",
    },
    {
      title: t("sectoralSolutions.logistics"),
      icon: <Truck className="h-3.5 w-3.5 mr-2" />,
      path: "/cozumler/sektorel-rtls-uygulamalari/lojistik-ve-depolama",
    },
    {
      title: t("sectoralSolutions.healthcare"),
      icon: <Hospital className="h-3.5 w-3.5 mr-2" />,
      path: "/cozumler/sektorel-rtls-uygulamalari/saglik-sektoru",
    },
    {
      title: t("sectoralSolutions.entertainment"),
      icon: <Music className="h-3.5 w-3.5 mr-2" />,
      path: "/cozumler/sektorel-rtls-uygulamalari/eglence",
    },
    {
      title: t("sectoralSolutions.security"),
      icon: <Bell className="h-3.5 w-3.5 mr-2" />,
      path: "/cozumler/sektorel-rtls-uygulamalari/guvenlik-acil-durum",
    },
    {
      title: t("sectoralSolutions.retail"),
      icon: <ShoppingCart className="h-3.5 w-3.5 mr-2" />,
      path: "/cozumler/sektorel-rtls-uygulamalari/perakende-alisveris",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isDarkTextPage ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center w-64 h-24">
            <Image
              src={Logo}
              alt="turna.io logo"
              className="object-contain"
              width={300}
              height={60}
              priority
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {/* Desktop Menü */}
            <div className="relative group">
              <Link
                href="/cozumler"
                className={`hover:text-turna-500 transition-colors text-base font-medium ${getTextColor()}`}
              >
                {t("navbar.solutions")}
              </Link>
              <div className="absolute left-0 mt-2 w-[600px] bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="grid grid-cols-2 gap-1 p-2">
                  <div>
                    <div className="font-medium text-gray-700 mb-1 pb-1 border-b text-xs">
                      {t("indoorSolutions.title")}
                    </div>
                    <ul className="grid gap-1">
                      {indoorSolutions.map((solution, index) => (
                        <li key={index}>
                          <Link
                            href={solution.path}
                            className="flex items-center text-xs text-gray-600 hover:text-turna-500 hover:bg-gray-50 rounded px-2 py-1"
                          >
                            {solution.icon}
                            {solution.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium text-gray-700 mb-1 pb-1 border-b text-xs">
                      {t("sectoralSolutions.title")}
                    </div>
                    <ul className="grid gap-1">
                      {sectoralSolutions.map((solution, index) => (
                        <li key={index}>
                          <Link
                            href={solution.path}
                            className="flex items-center text-xs text-gray-600 hover:text-turna-500 hover:bg-gray-50 rounded px-2 py-1"
                          >
                            {solution.icon}
                            {solution.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Diğer menüler */}
            <Link
              href="/kaynak"
              className={`hover:text-turna-500 transition-colors text-base font-medium flex items-center ${getTextColor()}`}
            >
              <FileText className="h-4 w-4 mr-1" />
              {t("navbar.resources")}
            </Link>
            <Link
              href="/kurumsal-kimlik"
              className={`hover:text-turna-500 transition-colors text-base font-medium ${getTextColor()}`}
            >
              {t("navbar.company")}
            </Link>
            <Link
              href="/sss"
              className={`hover:text-turna-500 transition-colors text-base font-medium flex items-center ${getTextColor()}`}
            >
              <HelpCircle className="h-4 w-4 mr-1" />
              {t("navbar.faq")}
            </Link>
            <Link
              href="/iletisim"
              className={`hover:text-turna-500 transition-colors text-base font-medium flex items-center ${getTextColor()}`}
            >
              <Mail className="h-4 w-4 mr-1" />
              {t("navbar.contact")}
            </Link>

            <LanguageSelector className={getTextColor()} />

            <Link
              href="https://web.turna.io/auth"
              className="turna-button-primary"
            >
              {t("navbar.demo")}
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden ${getTextColor()}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white mt-4 py-4 px-2 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              {/* Accordion Menü Başlangıcı */}
              <details className="group">
                <summary className="flex items-center justify-between py-2 cursor-pointer text-gray-800 hover:text-turna-500 text-base font-medium">
                  {t("navbar.solutions")}
                  <span className="ml-2 transition-transform group-open:rotate-180">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="pl-4 mt-2 flex flex-col space-y-2">
                  <div>
                    <div className="text-xs font-semibold text-gray-500 mb-1">
                      {t("indoorSolutions.title")}
                    </div>
                    {indoorSolutions.map((solution, index) => (
                      <Link
                        key={index}
                        href={solution.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center text-gray-700 hover:text-turna-500 text-sm py-1"
                      >
                        {solution.icon}
                        {solution.title}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3">
                    <div className="text-xs font-semibold text-gray-500 mb-1">
                      {t("sectoralSolutions.title")}
                    </div>
                    {sectoralSolutions.map((solution, index) => (
                      <Link
                        key={index}
                        href={solution.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center text-gray-700 hover:text-turna-500 text-sm py-1"
                      >
                        {solution.icon}
                        {solution.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </details>
              {/* Accordion Menü Bitişi */}

              {/* Diğer Normal Menüler */}
              <Link
                href="/kaynak"
                className="text-gray-800 hover:text-turna-500 py-2 text-base font-medium flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FileText className="h-4 w-4 mr-1" />
                {t("navbar.resources")}
              </Link>
              <Link
                href="/kurumsal-kimlik"
                className="text-gray-800 hover:text-turna-500 py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("navbar.company")}
              </Link>
              <Link
                href="/sss"
                className="text-gray-800 hover:text-turna-500 py-2 text-base font-medium flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <HelpCircle className="h-4 w-4 mr-1" />
                {t("navbar.faq")}
              </Link>
              <Link
                href="/iletisim"
                className="text-gray-800 hover:text-turna-500 py-2 text-base font-medium flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Mail className="h-4 w-4 mr-1" />
                {t("navbar.contact")}
              </Link>

              <LanguageSelector isDropdown={true} className="w-full" />

              <Link
                href="https://web.turna.io/auth"
                className="turna-button-primary text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("navbar.demo")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
