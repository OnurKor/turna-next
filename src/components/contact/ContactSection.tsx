"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const ContactSection = () => {
  const t = useTranslations();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object({
    firstName: Yup.string().required(t("contactUs.form.errors.firstName")),
    lastName: Yup.string().required(t("contactUs.form.errors.lastName")),
    email: Yup.string()
      .email(t("contactUs.form.errors.emailInvalid"))
      .required(t("contactUs.form.errors.emailRequired")),
    phone: Yup.string(),
    company: Yup.string(),
    message: Yup.string()
      .min(10, t("contactUs.form.errors.message"))
      .required(t("contactUs.form.errors.messageRequired")),
  });

  const handleSubmit = (
    values: ContactFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    setIsSubmitting(true);

    // Simulated API call
    setTimeout(() => {
      console.log(values);
      toast({
        title: t("contactUs.form.submitSuccess"),
        duration: 5000,
      });
      resetForm();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {t("contactUs.title")}
          </h2>
          <div className="w-24 h-1 bg-turna-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("contactUs.subtitle")}
          </p>
        </div>

        {/* Form ve İletişim Bilgileri */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-2">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                company: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting: formikSubmitting }) => (
                <FormikForm className="space-y-6">
                  {/* İsimler */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium leading-none"
                      >
                        {t("contactUs.form.firstName")}
                      </label>
                      <Field
                        as={Input}
                        id="firstName"
                        name="firstName"
                        placeholder={t("contactUs.form.firstNamePlaceholder")}
                      />
                      <ErrorMessage
                        name="firstName"
                        component="p"
                        className="text-sm font-medium text-destructive"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="lastName"
                        className="text-sm font-medium leading-none"
                      >
                        {t("contactUs.form.lastName")}
                      </label>
                      <Field
                        as={Input}
                        id="lastName"
                        name="lastName"
                        placeholder={t("contactUs.form.lastNamePlaceholder")}
                      />
                      <ErrorMessage
                        name="lastName"
                        component="p"
                        className="text-sm font-medium text-destructive"
                      />
                    </div>
                  </div>

                  {/* Email ve Telefon */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none"
                      >
                        {t("contactUs.form.email")}
                      </label>
                      <Field
                        as={Input}
                        id="email"
                        type="email"
                        name="email"
                        placeholder={t("contactUs.form.emailPlaceholder")}
                      />
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-sm font-medium text-destructive"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none"
                      >
                        {t("contactUs.form.phone")}
                      </label>
                      <Field
                        as={Input}
                        id="phone"
                        name="phone"
                        placeholder={t("contactUs.form.phonePlaceholder")}
                      />
                      <ErrorMessage
                        name="phone"
                        component="p"
                        className="text-sm font-medium text-destructive"
                      />
                    </div>
                  </div>

                  {/* Şirket */}
                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium leading-none"
                    >
                      {t("contactUs.form.company")}
                    </label>
                    <Field
                      as={Input}
                      id="company"
                      name="company"
                      placeholder={t("contactUs.form.companyPlaceholder")}
                    />
                    <ErrorMessage
                      name="company"
                      component="p"
                      className="text-sm font-medium text-destructive"
                    />
                  </div>

                  {/* Mesaj */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none"
                    >
                      {t("contactUs.form.message")}
                    </label>
                    <Field
                      as={Textarea}
                      id="message"
                      name="message"
                      placeholder={t("contactUs.form.messagePlaceholder")}
                      className="min-h-[120px]"
                    />
                    <ErrorMessage
                      name="message"
                      component="p"
                      className="text-sm font-medium text-destructive"
                    />
                  </div>

                  {/* Gönder Butonu */}
                  <Button
                    type="submit"
                    className="w-full md:w-auto bg-turna-500 hover:bg-turna-600"
                    disabled={isSubmitting || formikSubmitting}
                  >
                    {isSubmitting
                      ? t("contactUs.form.sending")
                      : t("contactUs.form.submit")}
                  </Button>
                </FormikForm>
              )}
            </Formik>
          </div>

          {/* İletişim Bilgileri */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              {t("contactUs.officeInfo.title")}
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-turna-500 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-600">
                  Ostim OSB Mahallesi Cevat Dündar Caddesi No: 1/1 İç Kapı No:
                  10 Yenimahalle/ANKARA
                </p>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-turna-500 mr-3 flex-shrink-0" />
                <p className="text-gray-600">0312 387 37 77</p>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-turna-500 mr-3 flex-shrink-0" />
                <p className="text-gray-600">bilgi@turna.io</p>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 text-turna-500 mr-3 flex-shrink-0" />
                <p className="text-gray-600">
                  {t("contactUs.officeInfo.hours")}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
