import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Menu, X, UserCheck, ShieldAlert, Briefcase, Home, LayoutDashboard, Globe, Type } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ currentRole, setCurrentRole }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { lang, toggleLanguage, largeText, toggleLargeText } = useLanguage();

  const navLinks = [
    { name: lang === 'ar' ? 'الرئيسية' : 'Home', path: '/', icon: Home },
    { name: lang === 'ar' ? 'تمريض منزلي' : 'Home Nursing', path: '/services', icon: UserCheck },
    { name: lang === 'ar' ? 'خريطة الطوارئ' : 'ER & Hospitals', path: '/hospitals', icon: ShieldAlert },
    { name: lang === 'ar' ? 'وظائف التمريض' : 'Medical Jobs', path: '/jobs', icon: Briefcase },
    { name: lang === 'ar' ? 'لوحة التحكم' : 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-18 py-3 items-center gap-2">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="bg-primary-600 p-2 rounded-xl text-white shadow-md shadow-primary-500/20">
              <Activity className="h-6 w-6" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900">Care<span className="text-primary-600">Pulse</span></span>
              <span className="hidden sm:block text-[11px] font-semibold text-slate-500">
                {lang === 'ar' ? 'الرعاية التمريضية الذكية' : 'Smart Healthcare Network'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    isActive(item.path)
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Accessibility & Language Controls + Role Switcher */}
          <div className="flex items-center gap-2">
            {/* Senior Font Size Toggle */}
            <button
              onClick={toggleLargeText}
              title={lang === 'ar' ? 'تكبير الخط لكبار السن' : 'Increase Font Size for Seniors'}
              className={`flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-extrabold border transition ${
                largeText
                  ? 'bg-amber-100 border-amber-400 text-amber-900'
                  : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
              }`}
            >
              <Type className="w-4 h-4" />
              <span>{largeText ? (lang === 'ar' ? 'خط عادي' : 'Normal') : 'A+'}</span>
            </button>

            {/* Language Switcher (AR / EN) */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-extrabold bg-primary-50 border border-primary-200 text-primary-800 hover:bg-primary-100 transition"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
            </button>

            {/* Role Switcher */}
            <div className="hidden md:flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200">
              <select
                value={currentRole}
                onChange={(e) => setCurrentRole(e.target.value)}
                className="bg-white text-xs font-bold text-primary-700 rounded-lg px-2.5 py-1.5 border border-slate-200 focus:outline-none cursor-pointer"
              >
                <option value="patient">{lang === 'ar' ? 'حساب مريض' : 'Patient'}</option>
                <option value="nurse">{lang === 'ar' ? 'حساب ممرض' : 'Nurse'}</option>
                <option value="facility">{lang === 'ar' ? 'مستشفى / عيادة' : 'Hospital / Clinic'}</option>
                <option value="admin">{lang === 'ar' ? 'الإدارة (Admin)' : 'Administrator'}</option>
              </select>
            </div>

            <Link
              to="/login"
              className="hidden sm:inline-block bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm"
            >
              {lang === 'ar' ? 'دخول' : 'Sign In'}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-slate-700 hover:text-slate-900 p-2 rounded-xl border border-slate-200"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 space-y-2">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-bold ${
                isActive(item.path) ? 'bg-primary-50 text-primary-700' : 'text-slate-800'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
            <select
              value={currentRole}
              onChange={(e) => setCurrentRole(e.target.value)}
              className="flex-1 bg-slate-100 text-sm font-bold text-primary-800 rounded-xl px-3 py-2.5"
            >
              <option value="patient">{lang === 'ar' ? 'حساب مريض' : 'Patient'}</option>
              <option value="nurse">{lang === 'ar' ? 'حساب ممرض' : 'Nurse'}</option>
              <option value="facility">{lang === 'ar' ? 'مستشفى / عيادة' : 'Hospital / Clinic'}</option>
              <option value="admin">{lang === 'ar' ? 'الإدارة' : 'Admin'}</option>
            </select>
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="bg-slate-900 text-white text-sm font-bold px-5 py-2.5 rounded-xl"
            >
              {lang === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
