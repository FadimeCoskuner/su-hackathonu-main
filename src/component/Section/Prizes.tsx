import React from "react";
import { Trophy } from "lucide-react";

export const PrizesSection: React.FC = () => {
  const prizes = [
    {
      place: "Birincilik",
      amount: "50.000",
      color: "text-amber-600",
      bg: "bg-amber-50",
      line: "bg-amber-500",
    },
    {
      place: "İkincilik",
      amount: "30.000",
      color: "text-gray-500",
      bg: "bg-gray-100",
      line: "bg-gray-400",
    },
    {
      place: "Üçüncülük",
      amount: "15.000",
      color: "text-orange-600",
      bg: "bg-orange-50",
      line: "bg-orange-500",
    },
  ];

  return (
    <section id="prizes" className="py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Ödüller
          </h2>
          <p className="text-gray-500 text-lg">
            Kapsül Teknoloji Platformu tarafından sağlanacaktır
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {prizes.map((prize, idx) => (
            <div
              key={idx}
              className="relative bg-white border border-gray-200 rounded-xl px-10 py-12 text-center transition hover:border-gray-300"
            >
              <div
                className={`mx-auto mb-8 w-16 h-16 rounded-full flex items-center justify-center ${prize.bg}`}
              >
                <Trophy className={`w-8 h-8 ${prize.color}`} />
              </div>

              <h3 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">
                {prize.place}
              </h3>

              <div className="text-4xl font-extrabold text-gray-900 mb-1">
                {prize.amount} ₺
              </div>

              <p className="text-sm text-gray-500">Ödül Tutarı</p>

              <div
                className={`mt-10 h-1 w-14 mx-auto rounded-full ${prize.line}`}
              />
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-20 border border-gray-200 rounded-xl px-6 py-5">
          <p className="text-center text-gray-600 text-sm leading-relaxed">
            <span className="font-semibold text-gray-900">Not:</span>{" "}
            Yarışmacılara staj, mentorluk ve ticarileşme destekleri paydaş
            kurumlar tarafından ayrıca sağlanabilir.
          </p>
        </div>
      </div>
    </section>
  );
};
