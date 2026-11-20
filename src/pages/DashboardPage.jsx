import React, { useState } from 'react';
import {
  CheckCircle, XCircle, Star,
  MessageSquare, Send, ShieldCheck, HeartPulse
} from 'lucide-react';
import { VITALS_HISTORY, VERIFICATION_QUEUE, ATS_APPLICANTS } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export default function DashboardPage({ currentRole, setCurrentRole }) {
  const { lang } = useLanguage();

  const [chatMessages, setChatMessages] = useState([
    { sender: 'nurse', text: 'أهلاً بحضرتك، أنا راجعت الروشتة وفي الطريق ليكم خلال 10 دقائق.' },
    { sender: 'patient', text: 'شكراً يا ممرضة سارة، العمارة رقم 14 الدور الثالث.' }
  ]);
  const [newMsg, setNewMsg] = useState('');
  const [nurseOnline, setNurseOnline] = useState(true);
  const [verifications, setVerifications] = useState(VERIFICATION_QUEUE);
  const [applicants, setApplicants] = useState(ATS_APPLICANTS);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!newMsg.trim()) return;
    setChatMessages([...chatMessages, { sender: 'patient', text: newMsg }]);
    setNewMsg('');
  };

  const handleVerifyAction = (id, newStatus) => {
    setVerifications(verifications.map(v => v.id === id ? { ...v, status: newStatus } : v));
  };

  const updateApplicantStage = (id, stage) => {
    setApplicants(applicants.map(a => a.id === id ? { ...a, stage } : a));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Role Selector Header Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-wider text-primary-700">
            {lang === 'ar' ? 'مساحة العمل حسب الصلاحية' : 'Multi-Role Workspace'}
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900">
            {lang === 'ar'
              ? currentRole === 'patient'
                ? 'لوحة تحكم المريض'
                : currentRole === 'nurse'
                ? 'لوحة تحكم الممرض'
                : currentRole === 'facility'
                ? 'لوحة تحكم المستشفى / العيادة'
                : 'لوحة تحكم مدير المنصة (Admin)'
              : `${currentRole.toUpperCase()} Dashboard`}
          </h1>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'patient', label: lang === 'ar' ? 'المريض' : 'Patient View' },
            { id: 'nurse', label: lang === 'ar' ? 'الممرض' : 'Nurse View' },
            { id: 'facility', label: lang === 'ar' ? 'المستشفى' : 'Hospital / Clinic' },
            { id: 'admin', label: lang === 'ar' ? 'الإدارة' : 'Admin Control' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCurrentRole(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition ${
                currentRole === tab.id
                  ? 'bg-slate-900 text-white shadow'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 1. PATIENT DASHBOARD */}
      {currentRole === 'patient' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <div>
                  <span className="bg-amber-100 text-amber-900 text-xs font-extrabold px-3 py-1 rounded-full">
                    {lang === 'ar' ? 'في الطريق • الوصول خلال 10 دقائق' : 'On The Way • ETA 10 mins'}
                  </span>
                  <h3 className="font-extrabold text-lg text-slate-900 mt-2">
                    {lang === 'ar' ? 'الزيارة الحالية: كانيولا ومحاليل' : 'Active Visit: IV Cannula & Vitals'}
                  </h3>
                  <p className="text-xs text-slate-600">
                    {lang === 'ar' ? 'الممرضة: سارة محمود (4.9 ★)' : 'Assigned Nurse: Sarah Mahmoud, RN (4.9 ★)'}
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80"
                  alt="Nurse"
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary-500"
                />
              </div>

              <div className="mt-4">
                <h4 className="text-xs font-extrabold text-slate-600 mb-2 flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'محادثة مباشرة مع الممرض' : 'In-App Direct Chat'}</span>
                </h4>
                <div className="bg-slate-50 rounded-xl p-3 h-48 overflow-y-auto space-y-2.5 border border-slate-200">
                  {chatMessages.map((m, idx) => (
                    <div
                      key={idx}
                      className={`max-w-[80%] rounded-xl px-3.5 py-2.5 text-xs font-medium ${
                        m.sender === 'patient'
                          ? 'bg-primary-600 text-white mr-auto'
                          : 'bg-white border border-slate-200 text-slate-900'
                      }`}
                    >
                      {m.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <form onSubmit={sendMessage} className="mt-3 flex gap-2">
              <input
                type="text"
                placeholder={lang === 'ar' ? 'اكتب رسالتك للممرض هنا...' : 'Message your nurse...'}
                value={newMsg}
                onChange={(e) => setNewMsg(e.target.value)}
                className="flex-1 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary-600"
              />
              <button type="submit" className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-1.5">
                <Send className="w-4 h-4" />
                <span>{lang === 'ar' ? 'إرسال' : 'Send'}</span>
              </button>
            </form>
          </div>

          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
                  <HeartPulse className="w-5 h-5 text-rose-500" />
                  <span>{lang === 'ar' ? 'سجل العلامات الحيوية للمريض' : 'Patient Vitals Log'}</span>
                </h3>
                <p className="text-xs text-slate-600">
                  {lang === 'ar' ? 'متابعة قياسات الضغط والسكر المسجلة بعد كل زيارة' : 'Recorded across recent home visits'}
                </p>
              </div>
              <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg">
                {lang === 'ar' ? 'مؤشر مستقر' : 'Stable Trend'}
              </span>
            </div>

            <div className="grid grid-cols-5 gap-3 items-end h-44 bg-slate-50 p-4 rounded-xl border border-slate-100 mt-4">
              {VITALS_HISTORY.map((v, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5 h-full justify-end">
                  <span className="text-[11px] font-bold text-slate-800">{v.systolic}/{v.diastolic}</span>
                  <div
                    style={{ height: `${(v.systolic / 160) * 100}%` }}
                    className="w-full max-w-[36px] bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-lg"
                  ></div>
                  <span className="text-[11px] font-semibold text-slate-600">{v.date}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 mt-4 text-center">
              <div className="bg-slate-50 p-3 rounded-xl">
                <span className="text-xs text-slate-600 block">{lang === 'ar' ? 'آخر قياس ضغط' : 'Latest BP'}</span>
                <span className="font-extrabold text-slate-900 text-sm">118/78</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl">
                <span className="text-xs text-slate-600 block">{lang === 'ar' ? 'قياس السكر' : 'Blood Sugar'}</span>
                <span className="font-extrabold text-slate-900 text-sm">105 mg/dL</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl">
                <span className="text-xs text-slate-600 block">{lang === 'ar' ? 'الحرارة' : 'Temp'}</span>
                <span className="font-extrabold text-slate-900 text-sm">36.6 °C</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. NURSE DASHBOARD */}
      {currentRole === 'nurse' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-600 font-bold">{lang === 'ar' ? 'حالة التواجد' : 'Availability'}</p>
                <p className={`text-base font-extrabold mt-1 ${nurseOnline ? 'text-emerald-600' : 'text-slate-500'}`}>
                  {nurseOnline ? (lang === 'ar' ? 'متاح لاستقبال الطلبات' : 'Online') : (lang === 'ar' ? 'غير متاح' : 'Offline')}
                </p>
              </div>
              <button
                onClick={() => setNurseOnline(!nurseOnline)}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold text-white transition ${
                  nurseOnline ? 'bg-emerald-600' : 'bg-slate-500'
                }`}
              >
                {lang === 'ar' ? 'تغيير' : 'Toggle'}
              </button>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <p className="text-xs text-slate-600 font-bold">{lang === 'ar' ? 'رصيد المحفظة' : 'Wallet Balance'}</p>
              <p className="text-2xl font-extrabold text-slate-900 mt-1">4,850 EGP</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <p className="text-xs text-slate-600 font-bold">{lang === 'ar' ? 'الزيارات المكتملة' : 'Completed Visits'}</p>
              <p className="text-2xl font-extrabold text-slate-900 mt-1">64</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <p className="text-xs text-slate-600 font-bold">{lang === 'ar' ? 'التقييم العام' : 'Overall Rating'}</p>
              <p className="text-2xl font-extrabold text-amber-500 mt-1 flex items-center gap-1">
                4.92 <Star className="w-5 h-5 fill-amber-400" />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="font-extrabold text-lg text-slate-900 mb-4">
              {lang === 'ar' ? 'طلبات التمريض المنزلي القريبة منك' : 'Incoming Home Nursing Requests Nearby'}
            </h3>
            <div className="border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-50">
              <div>
                <span className="bg-rose-100 text-rose-800 text-xs font-extrabold px-2.5 py-1 rounded-full">
                  {lang === 'ar' ? 'طلب عاجل • على بعد 1.4 كم' : 'Urgent Request • 1.4 km away'}
                </span>
                <h4 className="font-extrabold text-slate-900 mt-2">
                  {lang === 'ar' ? 'تركيب كانيولا + محلول مضاد حيوي' : 'IV Cannula Insertion + Antibiotic Infusion'}
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  {lang === 'ar' ? 'المريض: أحمد ع. • الروشتة مرفقة • صافي الربح: 255 ج.م' : 'Patient: Ahmed E. • Prescription Verified • Payout: 255 EGP'}
                </p>
              </div>
              <div className="flex gap-2">
                <button className="bg-primary-600 hover:bg-primary-700 text-white text-xs font-extrabold px-5 py-3 rounded-xl">
                  {lang === 'ar' ? 'قبول الزيارة' : 'Accept Visit'}
                </button>
                <button className="bg-white border border-slate-300 text-slate-800 text-xs font-extrabold px-5 py-3 rounded-xl">
                  {lang === 'ar' ? 'رفض' : 'Decline'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. HEALTHCARE FACILITY */}
      {currentRole === 'facility' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="font-extrabold text-lg text-slate-900 mb-4">
              {lang === 'ar' ? 'نظام متابعة المتقدمين للوظائف (Mini ATS)' : 'Applicant Tracking System (Mini ATS)'}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-start border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-xs text-slate-500">
                    <th className="py-3 px-4">{lang === 'ar' ? 'اسم الممرض' : 'Nurse Name'}</th>
                    <th className="py-3 px-4">{lang === 'ar' ? 'التخصص' : 'Specialty'}</th>
                    <th className="py-3 px-4">{lang === 'ar' ? 'الخبرة' : 'Experience'}</th>
                    <th className="py-3 px-4">{lang === 'ar' ? 'التقييم' : 'Rating'}</th>
                    <th className="py-3 px-4">{lang === 'ar' ? 'حالة الطلب' : 'Stage'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {applicants.map((app) => (
                    <tr key={app.id}>
                      <td className="py-3.5 px-4 font-extrabold text-slate-900">{app.name}</td>
                      <td className="py-3.5 px-4 text-slate-700">{app.specialty}</td>
                      <td className="py-3.5 px-4 text-slate-700">{app.exp}</td>
                      <td className="py-3.5 px-4 font-bold text-amber-500">{app.rating} ★</td>
                      <td className="py-3.5 px-4">
                        <select
                          value={app.stage}
                          onChange={(e) => updateApplicantStage(app.id, e.target.value)}
                          className="border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-extrabold bg-slate-50"
                        >
                          <option value="Under Review">Under Review</option>
                          <option value="Interview">Interview</option>
                          <option value="Accepted">Accepted</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 4. ADMINISTRATOR DASHBOARD */}
      {currentRole === 'admin' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <p className="text-xs text-slate-600 font-bold">{lang === 'ar' ? 'إجمالي المرضى' : 'Total Patients'}</p>
              <p className="text-2xl font-extrabold text-slate-900 mt-1">1,420</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <p className="text-xs text-slate-600 font-bold">{lang === 'ar' ? 'الممرضون المعتمدون' : 'Verified Nurses'}</p>
              <p className="text-2xl font-extrabold text-primary-600 mt-1">318</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <p className="text-xs text-slate-600 font-bold">{lang === 'ar' ? 'المستشفيات والعيادات' : 'Facilities'}</p>
              <p className="text-2xl font-extrabold text-sky-600 mt-1">46</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <p className="text-xs text-slate-600 font-bold">{lang === 'ar' ? 'إيرادات المنصة' : 'Revenue'}</p>
              <p className="text-2xl font-extrabold text-emerald-600 mt-1">84,500 EGP</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="font-extrabold text-lg text-slate-900 mb-1 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary-600" />
              <span>{lang === 'ar' ? 'مراجعة وتوثيق تراخيص الممرضين' : 'Nurse Credential Verification Queue'}</span>
            </h3>
            <p className="text-xs text-slate-600 mb-5">
              {lang === 'ar'
                ? 'مراجعة كارنيه مزاولة المهنة والمؤهل الدراسي قبل تفعيل حساب الممرض.'
                : 'Review practice licenses and academic certificates before approving nurse accounts.'}
            </p>

            <div className="space-y-4">
              {verifications.map((nurse) => (
                <div key={nurse.id} className="border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-3.5">
                    <img src={nurse.avatar} alt={nurse.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-extrabold text-slate-900">{nurse.name} <span className="text-xs text-slate-400">({nurse.id})</span></h4>
                      <p className="text-xs text-slate-600">{nurse.specialty} • {nurse.experience} • {nurse.licenseNo}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {nurse.status === 'Pending' ? (
                      <>
                        <button
                          onClick={() => handleVerifyAction(nurse.id, 'Approved')}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold px-4 py-2.5 rounded-xl flex items-center gap-1"
                        >
                          <CheckCircle className="w-4 h-4" />
                          <span>{lang === 'ar' ? 'اعتماد' : 'Approve'}</span>
                        </button>
                        <button
                          onClick={() => handleVerifyAction(nurse.id, 'Rejected')}
                          className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold px-4 py-2.5 rounded-xl flex items-center gap-1"
                        >
                          <XCircle className="w-4 h-4" />
                          <span>{lang === 'ar' ? 'رفض' : 'Reject'}</span>
                        </button>
                      </>
                    ) : (
                      <span className={`text-xs font-extrabold px-3.5 py-1.5 rounded-xl ${
                        nurse.status === 'Approved' ? 'bg-emerald-100 text-emerald-900' : 'bg-rose-100 text-rose-900'
                      }`}>
                        {nurse.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
