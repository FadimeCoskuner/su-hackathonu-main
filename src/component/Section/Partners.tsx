import React from "react";
import { Landmark, Building2, Briefcase } from "lucide-react";

export const PartnersSection: React.FC = () => {
  type PartnerColor = "blue" | "gray" | "green";

  const colorMap: Record<
    PartnerColor,
    {
      bar: string;
      iconBg: string;
      iconText: string;
    }
  > = {
    blue: {
      bar: "bg-blue-500",
      iconBg: "bg-blue-50",
      iconText: "text-blue-600",
    },
    gray: {
      bar: "bg-gray-500",
      iconBg: "bg-gray-50",
      iconText: "text-gray-600",
    },
    green: {
      bar: "bg-green-500",
      iconBg: "bg-green-50",
      iconText: "text-green-600",
    },
  };

  const partners: {
    title: string;
    color: PartnerColor;
    icon: React.ElementType;
    items: string[];
  }[] = [
    {
      title: "Bakanlıklar",
      color: "blue",
      icon: Landmark,
      items: [
        "Çevre, Şehircilik ve İklim Değişikliği Bakanlığı",
        "Sanayi ve Teknoloji Bakanlığı",
      ],
    },
    {
      title: "Yerel Yönetimler",
      color: "gray",
      icon: Building2,
      items: ["Konya Büyükşehir Belediyesi", "Kapsül Teknoloji Platformu"],
    },
    {
      title: "Özel Sektör",
      color: "green",
      icon: Briefcase,
      items: ["Tarım Teknolojileri Firmaları"],
    },
  ];

  return (
    <section id="partners" className="py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Paydaşlar ve İş Birlikleri
          </h2>
          <p className="text-lg text-gray-600">
            Hackathon sürecini güçlü kurumlar ve stratejik iş birlikleriyle
            destekliyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {partners.map((partner, idx) => {
            const colors = colorMap[partner.color];
            const Icon = partner.icon;

            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl ${colors.bar}`}
                />

                <div
                  className={`w-12 h-12 mb-6 rounded-xl flex items-center justify-center ${colors.iconBg} ${colors.iconText}`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {partner.title}
                </h3>

                <ul className="space-y-3">
                  {partner.items.map((item, i) => (
                    <li key={i} className="text-gray-700 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
