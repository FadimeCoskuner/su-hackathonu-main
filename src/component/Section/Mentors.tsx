import React from "react";

export const MentorsSection: React.FC = () => {
  const mentors = [
    { name: "Dr. Gökhan Yılmaz", title: "Daire Başkanı, TAGEM/TRGM" },
    { name: "Afife Sever", title: "Su Yönetimi Genel Müdürlüğü" },
    { name: "Prof. Dr. Gökşen Çapar", title: "Su Yönetimi Enstitüsü Müdürü" },
    { name: "Ayşegül Selışık", title: "FAO Türkiye Temsilcisi" },
    { name: "Prof. Dr. Ahmet Mete Saatçi", title: "Türk Su Enstitüsü" },
    { name: "Oğuzhan Bektaş", title: "DSİ Sulama Dairesi Başkanı" },
    { name: "İsmail Sevim", title: "Yeraltısuları Dairesi Başkanı" },
    { name: "Sadullah Uzun", title: "Milli Teknoloji Genel Müdürü" },
    { name: "Prof. Dr. İsmail Koyuncu", title: "İTÜ Eski Rektörü" },
  ];

  const getInitials = (name: string): string => {
    const bannedWords: string[] = ["Dr.", "Prof.", "Doç.", "Yrd.", "Arş."];

    return name
      .split(" ")
      .filter((word: string) => !bannedWords.includes(word))
      .slice(0, 3)
      .map((word: string) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section id="mentors" className="py-28 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Mentor & Jüri
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Alanında uzman akademisyenler ve sektör profesyonelleri
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {mentors.map((person, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-200 rounded-2xl p-8 text-center transition duration-300 hover:border-gray-300 hover:shadow-lg"
            >
              <div className="relative mx-auto mb-6 w-16 h-16">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-white text-lg font-semibold tracking-wide">
                  {getInitials(person.name)}
                </div>

                <span className="absolute inset-0 rounded-full ring-4 ring-gray-100"></span>
              </div>

              <h4 className="text-lg font-semibold text-gray-900">
                {person.name}
              </h4>

              <p className="text-sm text-gray-600 mt-2 leading-snug">
                {person.title}
              </p>

              <div className="mt-6 h-px w-12 mx-auto bg-gray-200"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
