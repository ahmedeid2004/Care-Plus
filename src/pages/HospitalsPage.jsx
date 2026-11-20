import React, { useState, useEffect, useRef } from 'react';
import { PhoneCall, MapPin, Navigation, Filter, Star, AlertCircle } from 'lucide-react';
import { HOSPITALS } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export default function HospitalsPage() {
  const { lang } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeHospital, setActiveHospital] = useState(HOSPITALS[0]);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  const filters = [
    { id: 'All', label: lang === 'ar' ? 'الكل' : 'All' },
    { id: '24/7 ER', label: lang === 'ar' ? 'طوارئ 24 ساعة' : '24/7 ER' },
    { id: 'ICU', label: lang === 'ar' ? 'عناية مركزة (ICU)' : 'ICU' },
    { id: 'NICU/Incubators', label: lang === 'ar' ? 'حضانات أطفال' : 'NICU/Incubators' },
    { id: 'Blood Bank', label: lang === 'ar' ? 'بنك دم' : 'Blood Bank' },
  ];

  const filteredHospitals = selectedFilter === 'All'
    ? HOSPITALS
    : HOSPITALS.filter((h) => h.capabilities.includes(selectedFilter));

  useEffect(() => {
    if (typeof window !== 'undefined' && window.L && mapRef.current && !mapInstanceRef.current) {
      const L = window.L;
      const map = L.map(mapRef.current).setView([30.0561, 31.2394], 12);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      HOSPITALS.forEach((hospital) => {
        const marker = L.marker([hospital.lat, hospital.lng]).addTo(map);
        marker.bindPopup(`
          <strong>${hospital.name.ar}</strong><br/>
          <span>${hospital.distance}</span><br/>
          <a href="tel:${hospital.phone}" style="color:#e11d48;font-weight:bold;">Call: ${hospital.phone}</a>
        `);
      });

      mapInstanceRef.current = map;
    }
  }, []);

  const focusHospitalOnMap = (hospital) => {
    setActiveHospital(hospital);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([hospital.lat, hospital.lng], 14);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Emergency Top Banner */}
      <div className="bg-rose-600 text-white rounded-3xl p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg shadow-rose-600/20">
        <div className="flex items-center gap-3.5">
          <div className="bg-white/20 p-3 rounded-2xl">
            <AlertCircle className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold">
              {lang === 'ar' ? 'دليل وخريطة مستشفيات الطوارئ 24/7' : '24/7 Emergency & Hospital Locator'}
            </h1>
            <p className="text-rose-100 text-xs sm:text-sm mt-0.5">
              {lang === 'ar'
                ? 'اعرف أقرب مستشفى فيها طوارئ، عناية مركزة، حضانات أطفال، أو بنك دم حسب موقعك الحالي.'
                : 'Locate nearest hospitals with active ICU, NICU incubators, and Blood Banks based on GPS.'}
            </p>
          </div>
        </div>
        <a
          href="tel:123"
          className="bg-white text-rose-700 hover:bg-rose-50 font-extrabold px-6 py-3.5 rounded-2xl text-sm flex items-center gap-2 shrink-0 shadow"
        >
          <PhoneCall className="w-5 h-5" />
          <span>{lang === 'ar' ? 'اتصال بالإسعاف (123)' : 'Call Ambulance (123)'}</span>
        </a>
      </div>

      {/* Capability Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
        <span className="text-xs font-extrabold text-slate-700 flex items-center gap-1 ml-2 mr-2">
          <Filter className="w-4 h-4" />
          <span>{lang === 'ar' ? 'فلترة حسب الإمكانيات:' : 'Capabilities:'}</span>
        </span>
        {filters.map((cap) => (
          <button
            key={cap.id}
            onClick={() => setSelectedFilter(cap.id)}
            className={`px-4 py-2.5 rounded-full text-xs font-extrabold whitespace-nowrap transition ${
              selectedFilter === cap.id
                ? 'bg-slate-900 text-white'
                : 'bg-white border border-slate-200 text-slate-800 hover:bg-slate-100'
            }`}
          >
            {cap.label}
          </button>
        ))}
      </div>

      {/* Map + Facilities Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 space-y-4 max-h-[600px] overflow-y-auto px-1">
          {filteredHospitals.map((hospital) => (
            <div
              key={hospital.id}
              onClick={() => focusHospitalOnMap(hospital)}
              className={`cursor-pointer rounded-2xl border-2 p-4 transition bg-white ${
                activeHospital?.id === hospital.id
                  ? 'border-rose-500 shadow-md'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex gap-4">
                <img
                  src={hospital.image}
                  alt={hospital.name[lang]}
                  className="w-20 h-20 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-primary-800 bg-primary-50 px-2.5 py-0.5 rounded">
                      {hospital.type[lang]}
                    </span>
                    <span className="text-xs font-extrabold text-amber-500 flex items-center gap-0.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400" /> {hospital.rating}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base mt-1">{hospital.name[lang]}</h3>
                  <p className="text-xs text-slate-600 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" /> {hospital.address[lang]}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {hospital.capabilities.map((c) => (
                  <span key={c} className="text-xs font-bold bg-slate-100 text-slate-800 px-2.5 py-1 rounded-md">
                    {c}
                  </span>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-primary-600" />
                  <span>{hospital.distance}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-emerald-700">{hospital.driveTime[lang]}</span>
                </div>
                <a
                  href={`tel:${hospital.phone}`}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold px-4 py-2.5 rounded-xl flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? `اتصال ${hospital.phone}` : `Call ${hospital.phone}`}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl border border-slate-200 p-2 shadow-sm h-[520px] lg:h-[600px] relative">
            <div ref={mapRef} className="w-full h-full rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
