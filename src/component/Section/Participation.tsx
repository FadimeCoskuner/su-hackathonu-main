import React from "react";
import {
  Users,
  Award,
  Globe,
  ShieldCheck,
  DollarSign,
  Utensils,
  Printer,
  Database,
  FileText,
} from "lucide-react";
import { Collapse } from "antd";
import "antd/dist/reset.css";

export const ParticipationSection: React.FC = () => {
  const katilimKosullari = [
    "Üniversitelerin tüm bölümlerinden önlisans, lisans, yüksek lisans ve doktora öğrencileri katılabilir",
    "Her katılımcının öğrenci olması ve öğrenci belgesi sunması gereklidir",
    "Katılımcılar şartnameyi okuyup başvuru formunu eksiksiz doldurmalıdır",
    "Projeler özgün olmalı ve daha önce başka bir yarışmaya katılmamış olmalıdır",
    "Her takım yalnızca tek bir proje ile katılabilir",
    "Jüri ve raportörlerin birinci dereceden yakınları yarışmaya katılamaz",
    "Proje teslimi dijital belgeler ile yapılmalı, kimliği açıklayan bilgiler eklenmemelidir",
    "Kurallara uymayan başvurular diskalifiye edilir",
    "Katılımcılar şartname hükümlerini kabul etmiş sayılır",
  ];

  return (
    <section id="participation" className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Katılım Şartları
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Programa kimler başvurabilir ve katılımcılara hangi destekler
            sunulur?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="relative bg-gray-50 rounded-2xl border border-gray-200 p-10">
            <span className="absolute top-0 left-0 w-full h-1 bg-blue-600 rounded-t-2xl" />
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Genel Şartlar
              </h3>
            </div>
            <ul className="space-y-5">
              {[
                {
                  icon: <Globe className="w-5 h-5 text-blue-700" />,
                  text: "Türkiye'nin tüm illerinden katılım sağlanabilir",
                },
                {
                  icon: <Users className="w-5 h-5 text-blue-700" />,
                  text: "Takımlar en az 2, en fazla 4 kişiden oluşmalıdır",
                },
                {
                  icon: <ShieldCheck className="w-5 h-5 text-blue-700" />,
                  text: "Projeler özgün olmalı ve daha önce ödül almamış olmalıdır",
                },
                {
                  icon: <DollarSign className="w-5 h-5 text-blue-700" />,
                  text: "Programa katılım tamamen ücretsizdir",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <span className="text-gray-700 leading-relaxed">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative bg-gray-50 rounded-2xl border border-gray-200 p-10">
            <span className="absolute top-0 left-0 w-full h-1 bg-emerald-600 rounded-t-2xl" />
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <Award className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Sağlanan Destekler
              </h3>
            </div>
            <ul className="space-y-5">
              {[
                {
                  icon: <Utensils className="w-5 h-5 text-emerald-700" />,
                  text: "Etkinlik süresince yemek ikramı organizasyon tarafından sağlanır",
                },
                {
                  icon: <Printer className="w-5 h-5 text-emerald-700" />,
                  text: "Prototip geliştirme için baskı ve malzeme desteği verilir",
                },
                {
                  icon: <Database className="w-5 h-5 text-emerald-700" />,
                  text: "CBS veri setlerine ve teknik kaynaklara erişim sağlanır",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <span className="text-gray-700 leading-relaxed">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative bg-gray-50 rounded-2xl border border-gray-200 p-6">
          <Collapse ghost>
            <Collapse.Panel
              header={
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
                    <FileText className="w-5 h-5 text-gray-700" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900">
                    Yarışmaya Katılım Koşulları
                  </span>
                </div>
              }
              key="1"
            >
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm leading-relaxed mt-2">
                {katilimKosullari.map((text, idx) => (
                  <li key={idx}>{text}</li>
                ))}
              </ul>
            </Collapse.Panel>
          </Collapse>
        </div>
      </div>
    </section>
  );
};
