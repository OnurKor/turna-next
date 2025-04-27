"use client";

import { useTranslations } from "next-intl";
import { FileText, Bluetooth, Download } from "@/lib/icons";
import { toast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type ResourceItem = {
  name: string;
  size: string;
  format: string;
  path: string;
  external?: boolean;
};

const ResourcesSection = () => {
  const t = useTranslations();

  const detailedResources = {
    technicalDocs: [
      {
        name: t("resources.doc1Name"),
        size: "2.3 MB",
        format: "PDF",
        path: "/documents/technical/rtls-overview.pdf",
      },
      {
        name: t("resources.doc2Name"),
        size: "1.8 MB",
        format: "PDF",
        path: "/documents/technical/indoor-positioning.pdf",
      },
      {
        name: t("resources.doc3Name"),
        size: "3.4 MB",
        format: "PDF",
        path: "/documents/technical/api-documentation.pdf",
      },
      {
        name: t("resources.doc4Name"),
        size: "3.9 MB",
        format: "PDF",
        path: "/documents/technical/system-integration.pdf",
      },
    ] as ResourceItem[],
    bluetoothTech: [
      {
        name: t("resources.bluetooth1Name"),
        size: "3.1 MB",
        format: "PDF",
        path: "/documents/bluetooth/bluetooth-beacons.pdf",
      },
      {
        name: t("resources.bluetooth2Name"),
        size: "2.9 MB",
        format: "PDF",
        path: "/documents/bluetooth/bluetooth-applications.pdf",
      },
      {
        name: t("resources.bluetooth3Name"),
        size: "1.5 MB",
        format: "PDF",
        path: "/documents/bluetooth/asset-tracking.pdf",
      },
    ] as ResourceItem[],
  };

  const handleDownload = (resource: ResourceItem) => {
    const link = document.createElement("a");
    link.href = resource.path;
    link.download = resource.name; // Dosyayı kaydederken adı
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: t("resources.downloadStarted"),
      description: `${resource.name} (${resource.size})`,
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {t("resources.title")}
          </h2>
          <div className="w-24 h-1 bg-turna-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("resources.subtitle")}
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md">
            <Accordion type="single" collapsible className="w-full">
              {/* Teknik Dokümanlar */}
              <AccordionItem value="technicalDocs" className="border-b border-gray-200">
                <AccordionTrigger className="py-4 px-6 hover:no-underline hover:bg-gray-50 transition-colors">
                  <div className="flex items-center text-left">
                    <FileText className="h-5 w-5 text-turna-500 mr-2" />
                    <span className="font-medium text-gray-800">
                      {t("resources.technicalDocs")}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2">
                  <div className="pl-7 space-y-3">
                    {detailedResources.technicalDocs.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 text-turna-500 mr-2" />
                          <span>{item.name}</span>
                        </div>
                        <button
                          className="flex items-center text-sm text-turna-600 hover:text-turna-700"
                          onClick={() => handleDownload(item)}
                        >
                          {item.size && (
                            <span className="mr-2">
                              {item.size} • {item.format}
                            </span>
                          )}
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Bluetooth Teknolojisi */}
              <AccordionItem value="bluetoothTech" className="border-b border-gray-200">
                <AccordionTrigger className="py-4 px-6 hover:no-underline hover:bg-gray-50 transition-colors">
                  <div className="flex items-center text-left">
                    <Bluetooth className="h-5 w-5 text-turna-500 mr-2" />
                    <span className="font-medium text-gray-800">
                      {t("resources.bluetoothTech")}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2">
                  <div className="pl-7 space-y-3">
                    {detailedResources.bluetoothTech.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 text-turna-500 mr-2" />
                          <span>{item.name}</span>
                        </div>
                        <button
                          className="flex items-center text-sm text-turna-600 hover:text-turna-700"
                          onClick={() => handleDownload(item)}
                        >
                          {item.size && (
                            <span className="mr-2">
                              {item.size} • {item.format}
                            </span>
                          )}
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Destek Kutusu */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              {t("resources.needHelp")}
            </h3>
            <p className="mb-6 text-gray-600">
              {t("resources.contactSupport")}
            </p>
            <button className="bg-turna-500 hover:bg-turna-600 text-white px-4 py-2 rounded">
              {t("resources.contactUs")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
