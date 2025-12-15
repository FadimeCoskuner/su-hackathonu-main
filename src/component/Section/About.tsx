import React from "react";
import { Target, Brain, Users } from "lucide-react";

export const AboutSection: React.FC = () => {
  const kılavuzUrl = `${process.env.PUBLIC_URL}/YarısmaKlavuzu.pdf`;

  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Amaç",
      desc: "Su kaynaklarının etkin kullanımını sağlamak ve tarımsal verimliliği artıracak dijital çözümler geliştirmek.",
      line: "bg-blue-600",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Yenilik",
      desc: "CBS, IoT ve yapay zeka teknolojileriyle veri temelli ve sürdürülebilir sistemler oluşturmak.",
      line: "bg-gray-600",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "İşbirliği",
      desc: "Kamu, özel sektör ve girişimciler arasında güçlü ve kalıcı bir ekosistem kurmak.",
      line: "bg-green-600",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Hackathon Hakkında
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Kapsül Teknoloji Platformu tarafından düzenlenen Su Hackathonu,
            gençlerin inovasyon ve problem çözme becerilerini geliştirmeyi
            hedefleyen bir etkinliktir. Katılımcılar, akıllı sulama ve su
            verimliliği temalarında teknoloji odaklı, uygulanabilir ve
            sürdürülebilir çözümler geliştirme fırsatı bulacak böylece hem
            çevresel farkındalık kazanacak hem de geleceğin su teknolojilerine
            yön verecek projeler üretebilecektir. Hackathon, kamu, özel sektör
            ve girişimcileri bir araya getirerek bilgi paylaşımı ve iş birliği
            kültürünü güçlendirmeyi de amaçlamaktadır.
          </p>
          <a
            href={kılavuzUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition"
          >
            Yarışma Kılavuzunu Görüntüle
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white p-10 rounded-lg shadow border border-gray-200 hover:shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <span
                className={`absolute left-0 top-8 h-10 w-1 ${item.line} rounded-r opacity-80`}
              />

              <div className="flex items-center gap-3 mb-4 text-gray-700">
                {item.icon}
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
