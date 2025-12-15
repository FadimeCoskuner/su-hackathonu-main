import React from "react";
import pattern from "../../assets/pattern.png";
import droneTarimGorseli from "../../assets/görsel.png";

interface HeroSectionProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export const HeroSection: React.FC<HeroSectionProps> = ({ timeLeft }) => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center bg-gray-50 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-80" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-green-200/20 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute inset-0 opacity-10 bg-center bg-cover"
          style={{ backgroundImage: `url(${pattern})` }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-gray-900 font-extrabold text-6xl md:text-7xl leading-tight">
              Su Hackathonu
            </h1>

            <p className="text-gray-700 text-lg max-w-lg leading-relaxed">
              Su kaynaklarını korumak, akıllı sulama sistemleri geliştirmek ve
              sürdürülebilir tarım için yenilikçi çözümler üretin.
            </p>

            <div>
              <p className="text-gray-600 font-medium mb-3 text-sm uppercase">
                Etkinliğe kalan süre (15 Ocak 2026)
              </p>

              <div className="grid grid-cols-4 gap-4 max-w-sm">
                {[
                  { label: "Gün", value: timeLeft.days },
                  { label: "Saat", value: timeLeft.hours },
                  { label: "Dakika", value: timeLeft.minutes },
                  { label: "Sn", value: timeLeft.seconds },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg py-4 text-center shadow border border-gray-200 hover:shadow-lg transition-transform transform hover:-translate-y-1"
                  >
                    <div className="text-2xl font-semibold text-gray-900">
                      {item.value}
                    </div>
                    <div className="text-xs text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeBqewoT19-iKrf0ekUoYI2bqc121yG-AKm9G9CXe57wMyBQw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-8 inline-block px-8 py-3 rounded-lg text-lg font-semibold
                bg-gray-900 text-white border border-gray-800 shadow
                hover:bg-white hover:text-gray-900 hover:shadow-lg
                transform hover:scale-105 transition-all duration-300 no-underline
              "
            >
              Hemen Başvur
            </a>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-300/20 blur-3xl rounded-full animate-pulse-slow" />
            <img
              src={droneTarimGorseli}
              alt="Drone"
              className="w-72 sm:w-[28rem] lg:w-[32rem] drop-shadow-2xl opacity-100 transform transition-transform duration-500 hover:scale-105 animate-floating"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
