import React from "react";

export const ScheduleSection: React.FC = () => {
  const schedule = {
    day1: [
      { time: "09:00 – 09:30", activity: "Açılış ve Tanıtım" },
      {
        time: "09:30 – 10:30",
        activity: "Problem Başlıklarının Hatırlatılması ve Takım Yönlendirmesi",
      },
      {
        time: "10:30 – 12:30",
        activity: "CBS anlatımı ve veri setlerine dair bilgilendirme",
      },
      { time: "12:30 – 13:30", activity: "Öğle Yemeği" },
      {
        time: "13:30 – 18:00",
        activity: "Proje Geliştirme ve Mentor Buluşması",
      },
      { time: "18:00 – 19:00", activity: "Akşam Yemeği" },
      { time: "19:00 – 23:00", activity: "Proje Geliştirme" },
      { time: "23:00 – 23:30", activity: "Gece İkramı" },
    ],
    day2: [
      { time: "00:00 – 08:00", activity: "Gece Çalışması" },
      { time: "08:00 – 09:00", activity: "Kahvaltı" },
      { time: "09:00 – 12:30", activity: "Proje Tamamlama ve Sunum Hazırlığı" },
      { time: "12:30 – 13:30", activity: "Öğle Yemeği" },
      { time: "13:30 – 16:00", activity: "Proje Tamamlama ve Sunum Hazırlığı" },
      { time: "16:00 – 17:00", activity: "Akşam Yemeği" },
      { time: "17:00 – 20:00", activity: "Jüri Sunumları ve Değerlendirme" },
      { time: "20:00 – 21:00", activity: "Ödül Töreni ve Kapanış" },
    ],
  };

  const days = [
    {
      day: "1. GÜN | BAŞLANGIÇ",
      schedule: schedule.day1,
      dotColor: "bg-blue-500",
      headerBg: "bg-blue-50",
      headerText: "text-blue-800",
    },
    {
      day: "2. GÜN | FİNAL",
      schedule: schedule.day2,
      dotColor: "bg-green-500",
      headerBg: "bg-green-50",
      headerText: "text-green-800",
    },
  ];

  return (
    <section id="schedule" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-3">
          Program Akışı
        </h2>
        <p className="text-center text-gray-600 mb-10 text-base font-light">
          36 saatlik etkinlik ajandası
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {days.map((day, idx) => (
            <div
              key={idx}
              className="relative bg-white shadow-lg rounded-xl border border-gray-100 overflow-hidden"
            >
              <div
                className={`text-lg font-bold uppercase tracking-wide ${day.headerText} ${day.headerBg} mb-0 p-4`}
              >
                {day.day}
              </div>

              <div className="p-5">
                {day.schedule.map((item, i) => (
                  <div key={i} className="relative pl-6 pb-4 last:pb-0">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 ml-1.5 last:hidden"></div>

                    <div
                      className={`absolute left-0 top-1 w-3 h-3 ${day.dotColor} rounded-full`}
                    ></div>

                    <div className="ml-4">
                      <span className="text-xs font-extrabold block text-gray-800 tracking-wide">
                        {item.time}
                      </span>

                      <p className="text-sm text-gray-600 mt-0.5 leading-snug">
                        {item.activity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
