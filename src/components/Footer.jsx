import React from 'react';
import { Activity, PhoneCall, ShieldCheck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-white mb-4">
              <div className="bg-primary-600 p-1.5 rounded-lg">
                <Activity className="h-5 w-5" />
              </div>
              <span className="font-bold text-xl">CarePulse</span>
            </div>
            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              {lang === 'ar'
                ? 'منصة ذكية متكاملة لطلب التمريض المنزلي المعتمد، تحديد أقرب مستشفيات الطوارئ والرعاية المركزة، وتوفير فرص العمل والشفتات للممرضين.'
                : 'Smart Healthcare & Nursing Platform connecting patients with verified home-care nurses, locating 24/7 emergency hospitals in real-time, and streamlining medical staffing.'}
            </p>
            <div className="flex items-center gap-4 mt-6 text-xs text-slate-300">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-primary-400" /> {lang === 'ar' ? 'ممرضون مرخصون فقط' : 'Licensed Nurses Only'}</span>
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-primary-400" /> {lang === 'ar' ? 'تتبع مباشر GPS' : 'GPS Live Tracking'}</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm">
              {lang === 'ar' ? 'أقسام المنصة' : 'Platform Modules'}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services" className="hover:text-primary-400 transition">{lang === 'ar' ? 'خدمات التمريض المنزلي' : 'Home Nursing Care (B2C)'}</Link></li>
              <li><Link to="/hospitals" className="hover:text-primary-400 transition">{lang === 'ar' ? 'دليل الطوارئ والمستشفيات' : '24/7 ER & Hospital Locator'}</Link></li>
              <li><Link to="/jobs" className="hover:text-primary-400 transition">{lang === 'ar' ? 'وظائف المستشفيات والعيادات' : 'Medical Staffing & Shifts (B2B)'}</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary-400 transition">{lang === 'ar' ? 'لوحات التحكم' : 'Role Dashboards'}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm">
              {lang === 'ar' ? 'خط الطوارئ السريع' : 'Emergency Hotline'}
            </h4>
            <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4">
              <p className="text-xs text-slate-300 mb-1">
                {lang === 'ar' ? 'الإسعاف والطوارئ الطبية' : 'National Ambulance & ER Dispatch'}
              </p>
              <a href="tel:123" className="flex items-center gap-2 text-rose-400 font-extrabold text-2xl hover:text-rose-300">
                <PhoneCall className="w-5 h-5" /> 123
              </a>
              <p className="text-xs text-slate-400 mt-2">
                {lang === 'ar' ? 'متاح على مدار 24 ساعة في جميع المحافظات' : 'Available 24/7 across all governorates'}
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400">
          <p>© 2026 CarePulse Graduation Project.</p>
          <p className="mt-2 sm:mt-0">{lang === 'ar' ? 'تصميم سهل ومناسب لجميع الأعمار' : 'Accessible & Senior-Friendly Healthcare UI'}</p>
        </div>
      </div>
    </footer>
  );
}
