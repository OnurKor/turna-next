import { Button } from "@/components/ui/button";
import { Mail } from "@/lib/icons";
import { useTranslations } from "next-intl";
import Link from "next/link";

const ContactCTA = () => {
  const t = useTranslations("contactCTA");

  return (
    <section className="py-16 bg-turna-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-lg mb-8 text-turna-100">{t("description")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/iletisim">
              <Button className="bg-white text-turna-600 hover:bg-turna-50">
                <Mail className="mr-2 h-5 w-5" />
                {t("contactUs")}
              </Button>
            </Link>
            {/* <Link to="/iletisim">
              <Button variant="outline" className="border-white text-white hover:bg-turna-500">
                <Presentation className="mr-2 h-5 w-5" />
                {t('contactCTA.demo')}
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
