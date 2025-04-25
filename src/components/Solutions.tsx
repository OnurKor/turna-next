import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Solutions = () => {
  const t = useTranslations("solutions");

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {t("title")}
          </h2>
          <div className="w-24 h-1 bg-turna-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              {t("indoorSolutions")}
            </h3>
            <p className="text-gray-600 mb-4">{t("indoorDescription")}</p>
            <Link
              href="/cozumler/bina-ici-cozumler/gercek-zamanli-navigasyon"
              className="inline-flex items-center text-turna-600 hover:text-turna-700"
            >
              {t("learnMore")} <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              {t("sectoralSolutions")}
            </h3>
            <p className="text-gray-600 mb-4">{t("sectoralDescription")}</p>
            <Link
              href="/cozumler/sektorel-rtls-uygulamalari/uretim-sektoru"
              className="inline-flex items-center text-turna-600 hover:text-turna-700"
            >
              {t("learnMore")} <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/cozumler"
            className="inline-flex items-center px-6 py-3 bg-turna-500 text-white rounded-md hover:bg-turna-600 transition-colors"
          >
            {t("allSolutions")} <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
