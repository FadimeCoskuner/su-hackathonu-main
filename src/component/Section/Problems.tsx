import React from "react";
import { Droplet, Clock, Map } from "lucide-react";

export const ProblemsSection: React.FC = () => {
  const problems = [
    {
      title: "Aşırı veya Yetersiz Sulama",
      description:
        "Bitki su ihtiyacının doğru belirlenmemesi, su israfı veya verim kaybı",
      solution:
        "Gerçek zamanlı bitki su stres seviyesi tespiti ve optimal sulama miktarı",
      icon: Droplet,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Sulama Zamanlaması",
      description:
        "Yanlış zamanda sulama yapılması, buharlaşma kayıpları ve düşük verimlilik",
      solution:
        "Meteoroloji ve toprak nem verilerine dayalı optimum zamanlama algoritması",
      icon: Clock,
      color: "from-slate-500 to-slate-600",
    },
    {
      title: "Heterojen Arazi Yönetimi",
      description:
        "Farklı toprak ve eğim özelliklerine sahip parsellerde homojen sulama, verimsizlik",
      solution: "Parsel içi sulama zonları belirleme ve hassas sulama planı",
      icon: Map,
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <section id="problems" className="py-24 px-6 sm:px-8 lg:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Başlık ve süreç açıklaması */}
        <div className="mb-12 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Proje Geliştirme ve Değerlendirme Süreci
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Su Hackathonu boyunca ekipler, akıllı sulama ve su verimliliği
            teması doğrultusunda veri temelli ve uygulanabilir çözümler
            geliştirir. Başlangıçta sağlanan CBS veri setleri ve altyapı
            bilgileri ekiplerin problemi analiz etmesini ve bilimsel bir temel
            oluşturmasını sağlar. Proje geliştirme sürecinde veri analizi,
            algoritma tasarımı, karar destek modelleri ve IoT tabanlı çözümler
            gibi yöntemler kullanılır. Mentor görüşmeleri, ekiplerin teknik ve
            içerik yönlendirmesi alarak projelerinin niteliğini artırmasına
            imkân tanır. Amaç, belirlenen su yönetimi problemini yenilikçi ve
            uygulanabilir bir şekilde çözmektir.
          </p>
        </div>

        {/* Problem kartları */}
        <div className="grid md:grid-cols-3 gap-10">
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`h-1 w-full rounded-full bg-gradient-to-r ${problem.color} mb-6`}
                />

                <div className="mb-6 flex justify-center">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 group-hover:scale-105 transition">
                    <Icon className="w-7 h-7" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  {problem.title}
                </h3>

                <div className="space-y-6">
                  <div className="relative pl-4">
                    <span className="absolute left-0 top-1 h-full w-0.5 bg-red-100" />
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Mevcut Durum
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {problem.description}
                    </p>
                  </div>

                  <div className="relative pl-4">
                    <span className="absolute left-0 top-1 h-full w-0.5 bg-green-100" />
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Önerilen Yaklaşım
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {problem.solution}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
