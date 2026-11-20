import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LoginPage({ setCurrentRole }) {
  const { lang } = useLanguage();
  const [role, setRole] = useState('patient');
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentRole(role);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200 shadow-lg p-8">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="bg-primary-600 p-2 rounded-xl text-white">
            <Activity className="w-6 h-6" />
          </div>
          <span className="font-extrabold text-2xl text-slate-900">CarePulse</span>
        </div>

        <h2 className="text-xl font-extrabold text-center text-slate-900">
          {isRegister
            ? lang === 'ar' ? 'إنشاء حساب جديد' : 'Create Platform Account'
            : lang === 'ar' ? 'تسجيل الدخول للمنصة' : 'Sign In to Your Account'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div>
            <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
              {lang === 'ar' ? 'نوع الحساب' : 'Account Type'}
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-slate-300 rounded-xl px-3.5 py-3 text-sm font-bold focus:outline-none focus:border-primary-600"
            >
              <option value="patient">{lang === 'ar' ? 'مريض / فرد من الأسرة' : 'Patient / Family Member'}</option>
              <option value="nurse">{lang === 'ar' ? 'ممرض / ممرضة' : 'Registered Nurse'}</option>
              <option value="facility">{lang === 'ar' ? 'مستشفى / عيادة خاصة' : 'Hospital / Medical Clinic'}</option>
              <option value="admin">{lang === 'ar' ? 'مدير النظام (Admin)' : 'Platform Administrator'}</option>
            </select>
          </div>

          {isRegister && (
            <div>
              <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                {lang === 'ar' ? 'الاسم بالكامل' : 'Full Name'}
              </label>
              <input
                type="text"
                required
                placeholder={lang === 'ar' ? 'مثال: م. أحمد عيد' : 'e.g., Eng. Ahmed'}
                className="w-full border border-slate-300 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:border-primary-600"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
              {lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
            </label>
            <input
              type="email"
              required
              defaultValue="ahmed@carepulse.com"
              className="w-full border border-slate-300 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:border-primary-600"
            />
          </div>

          <div>
            <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
              {lang === 'ar' ? 'كلمة المرور' : 'Password'}
            </label>
            <input
              type="password"
              required
              defaultValue="••••••••"
              className="w-full border border-slate-300 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:border-primary-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-extrabold py-3.5 rounded-xl shadow transition flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{isRegister ? (lang === 'ar' ? 'تسجيل ودخول' : 'Register') : (lang === 'ar' ? 'دخول' : 'Sign In')}</span>
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-xs font-extrabold text-primary-700 hover:underline"
          >
            {isRegister
              ? lang === 'ar' ? 'لديك حساب بالفعل؟ سجل دخول' : 'Already have an account? Sign In'
              : lang === 'ar' ? 'ليس لديك حساب؟ أنشئ حساباً الآن' : "Don't have an account? Register now"}
          </button>
        </div>
      </div>
    </div>
  );
}
