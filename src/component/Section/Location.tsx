import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5">
            Konum
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Hackathon etkinliği, Konya'nın teknoloji ve girişimcilik
            ekosisteminin merkezinde yer alan{" "}
            <span className="font-semibold text-gray-900">
              Kapsül Teknoloji Platformu
            </span>
            'nda gerçekleştirilecektir.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="w-7 h-7 text-blue-600 flex-shrink-0" />
                  <h3 className="text-3xl font-bold text-gray-900">
                    Kapsül Teknoloji Platformu
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Konya Büyükşehir Belediyesi tarafından gençleri teknolojiyle
                  buluşturmak, Milli Teknoloji Hamlesi'ne katkı sağlamak ve
                  yenilikçi projelerin gelişimini desteklemek amacıyla kurulmuş
                  modern bir inovasyon merkezidir.
                </p>
              </div>

              <div className="space-y-4 border-l-2 border-gray-200 pl-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-800 font-medium">
                    Konya, Türkiye
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-800 font-medium">
                    iletisim@kapsul.org.tr
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-800 font-medium">
                    +90 (332) 205 39 81
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 h-[460px]">
            <div className="w-full h-full border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.274548913998!2d32.485035!3d37.873501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08507521b7681%3A0xa28592fb726c0101!2sKaps%C3%BCl%20Teknoloji%20Platformu!5e0!3m2!1str!2str!4v999999999"
                className="w-full h-full grayscale-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
