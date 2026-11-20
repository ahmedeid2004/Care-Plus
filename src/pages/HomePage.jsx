import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Stethoscope, Building2,
  ArrowRight, ArrowLeft, PhoneCall, CheckCircle2, HeartHandshake
} from 'lucide-react';
import { NURSING_SERVICES } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export default function HomePage() {
  const { lang } = useLanguage();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-400/30 text-primary-200 px-4 py-1.5 rounded-full text-xs font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-400 animate-pulse"></span>
                {lang === 'ar' ? 'تمريض منزلي مرخص وطوارئ 24 ساعة' : 'Verified Home Nursing & 24/7 Emergency Network'}
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-snug">
                {lang === 'ar' ? (
                  <>رعاية تمريضية متكاملة <span className="text-primary-400">توصلك لحد باب البيت.</span></>
                ) : (
                  <>Hospital-Grade Nursing Care, <span className="text-primary-400">Right at Your Doorstep.</span></>
                )}
              </h1>

              <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
                {lang === 'ar'
                  ? 'اطلب ممرض أو ممرضة مرخصة للحقن، الكانيولا، الغيار على الجروح، ورعاية كبار السن مع تتبع مباشر على الخريطة—أو اعرف أقرب مستشفى طوارئ وعناية مركزة في ثواني.'
                  : 'Request licensed nurses for injections, IV cannulas, and post-op recovery with live GPS tracking—or locate the nearest emergency hospital with ICU & blood bank availability in seconds.'}
              </p>

              {/* Big High-Contrast Buttons for All Ages */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/services"
                  className="bg-primary-600 hover:bg-primary-500 text-white font-extrabold text-base px-8 py-4 rounded-2xl shadow-lg shadow-primary-600/30 flex items-center gap-2.5 transition"
                >
                  <span>{lang === 'ar' ? 'اطلب ممرض منزلي الآن' : 'Request Home Nurse'}</span>
                  <ArrowIcon className="w-5 h-5" />
                </Link>
                <Link
                  to="/hospitals"
                  className="bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-base px-8 py-4 rounded-2xl shadow-lg shadow-rose-600/25 flex items-center gap-2.5 transition"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>{lang === 'ar' ? 'أقرب مستشفى طوارئ' : 'Emergency Hospital Map'}</span>
                </Link>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
                  alt="Professional Nurse"
                  className="w-full h-[380px] object-cover opacity-90"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md text-slate-900 p-4 rounded-2xl shadow-lg">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80"
                        alt="Nurse Avatar"
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary-500"
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-sm">{lang === 'ar' ? 'ممرضة سارة محمود' : 'Sarah Mahmoud, RN'}</h4>
                          <CheckCircle2 className="w-4 h-4 text-primary-600" />
                        </div>
                        <p className="text-xs text-slate-600">{lang === 'ar' ? 'عناية مركزة ومحاليل • 4.9 ★' : 'ICU & IV Specialist • 4.9 ★'}</p>
                      </div>
                    </div>
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1.5 rounded-full">
                      {lang === 'ar' ? 'في الطريق • 8 د' : 'On The Way • 8m'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Senior-Friendly One-Tap Quick Action Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-10">
        <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-6 sm:p-8 shadow-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="bg-amber-500 text-white p-3.5 rounded-2xl shrink-0">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <div>
              <span className="bg-amber-200 text-amber-950 text-xs font-extrabold px-3 py-1 rounded-full">
                {lang === 'ar' ? 'وضع الاستخدام السهل لكبار السن' : 'Senior-Friendly Quick Assist'}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
                {lang === 'ar' ? 'محتاج مساعدة سريعة من غير خطوات كتير؟' : 'Need Immediate Help Without Filling Long Forms?'}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 mt-1">
                {lang === 'ar'
                  ? 'اضغط على الزرار المناسب ليك وهنوصلك بأقرب ممرض أو سيارة إسعاف فوراً.'
                  : 'Tap one button below to connect directly with an urgent nurse or national ambulance dispatch.'}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <Link
              to="/services"
              className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-base px-6 py-4 rounded-2xl text-center shadow"
            >
              {lang === 'ar' ? '🩺 حجز ممرض بضغطة واحدة' : '🩺 1-Tap Nurse Request'}
            </Link>
            <a
              href="tel:123"
              className="bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-base px-6 py-4 rounded-2xl text-center shadow flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-5 h-5" />
              <span>{lang === 'ar' ? 'اتصال بالإسعاف (123)' : 'Call Ambulance (123)'}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3 Core Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-4">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-2">
              {lang === 'ar' ? '1. خدمات التمريض المنزلي' : '1. Home Nursing Care (B2C)'}
            </h3>
            <p className="text-sm text-slate-700 mb-4 leading-relaxed">
              {lang === 'ar'
                ? 'حجز فوري أو مجدول، رفع صورة الروشتة، وتتبع الممرض لحظة بلحظة مع سجل كامل للضغط والسكر.'
                : 'Book immediate or scheduled home visits, upload doctor prescriptions, track your nurse live, and monitor vital signs.'}
            </p>
            <Link to="/services" className="text-primary-700 font-extrabold text-sm inline-flex items-center gap-1 hover:underline">
              {lang === 'ar' ? 'احجز خدمة تمريض' : 'Explore Services'} <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-2">
              {lang === 'ar' ? '2. دليل وخريطة الطوارئ' : '2. Emergency & ER Locator'}
            </h3>
            <p className="text-sm text-slate-700 mb-4 leading-relaxed">
              {lang === 'ar'
                ? 'خريطة تفاعلية بتحدد أقرب مستشفى فيها طوارئ 24 ساعة، عناية مركزة، حضانات أطفال، أو بنك دم.'
                : 'Interactive GPS map filtering nearest hospitals with 24/7 Emergency Rooms, ICU beds, NICU incubators, and blood banks.'}
            </p>
            <Link to="/hospitals" className="text-rose-600 font-extrabold text-sm inline-flex items-center gap-1 hover:underline">
              {lang === 'ar' ? 'افتح خريطة المستشفيات' : 'Open Emergency Map'} <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-2">
              {lang === 'ar' ? '3. توظيف المستشفيات والعيادات' : '3. Medical Staffing & Shifts (B2B)'}
            </h3>
            <p className="text-sm text-slate-700 mb-4 leading-relaxed">
              {lang === 'ar'
                ? 'فرص تعيين للممرضين في المستشفيات والعيادات الخاصة مع نظام تغطية الشفتات العاجلة.'
                : 'Hospitals and clinics recruit full-time nurses or dispatch instant Urgent Shift Replacement alerts.'}
            </p>
            <Link to="/jobs" className="text-sky-700 font-extrabold text-sm inline-flex items-center gap-1 hover:underline">
              {lang === 'ar' ? 'تصفح الوظائف المتاحة' : 'Browse Medical Jobs'} <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Nursing Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
          <div>
            <span className="text-primary-700 font-extrabold text-xs uppercase tracking-wider">
              {lang === 'ar' ? 'أسعار واضحة ومحددة مسبقاً' : 'Transparent Pricing'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              {lang === 'ar' ? 'أشهر خدمات التمريض المنزلي' : 'Popular Home Nursing Services'}
            </h2>
          </div>
          <Link to="/services" className="text-sm font-extrabold text-primary-800 bg-primary-100 px-5 py-3 rounded-xl hover:bg-primary-200 transition">
            {lang === 'ar' ? 'عرض كل الخدمات والحجز' : 'View All & Book Visit'}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NURSING_SERVICES.slice(0, 3).map((srv) => (
            <div key={srv.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition group">
              <div className="h-48 overflow-hidden relative">
                <img src={srv.image} alt={srv.name[lang]} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                <span className="absolute top-3 right-3 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-extrabold text-slate-900">
                  {srv.duration[lang]}
                </span>
              </div>
              <div className="p-5">
                <span className="text-xs font-bold text-primary-700">{srv.specialty[lang]}</span>
                <h3 className="text-lg font-extrabold text-slate-900 mt-1">{srv.name[lang]}</h3>
                <p className="text-sm text-slate-700 mt-2">{srv.description[lang]}</p>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 block">{lang === 'ar' ? 'السعر الأساسي' : 'Base Price'}</span>
                    <span className="text-lg font-extrabold text-slate-900">{srv.price} EGP</span>
                  </div>
                  <Link
                    to="/services"
                    className="bg-slate-900 hover:bg-primary-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition"
                  >
                    {lang === 'ar' ? 'اطلب الخدمة' : 'Select Service'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
