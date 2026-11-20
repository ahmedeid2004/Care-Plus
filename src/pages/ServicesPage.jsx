import React, { useState } from 'react';
import {
  Check, Clock, FileUp, Calendar, Zap,
  CreditCard, Banknote, ShieldCheck, CheckCircle2, Navigation
} from 'lucide-react';
import { NURSING_SERVICES } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export default function ServicesPage() {
  const { lang } = useLanguage();
  const [selectedIds, setSelectedIds] = useState([1]);
  const [bookingType, setBookingType] = useState('urgent');
  const [scheduledDate, setScheduledDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [prescriptionName, setPrescriptionName] = useState('');
  const [notes, setNotes] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const toggleService = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedServices = NURSING_SERVICES.filter((s) => selectedIds.includes(s.id));
  const subtotal = selectedServices.reduce((sum, item) => sum + item.price, 0);
  const urgentFee = bookingType === 'urgent' ? 50 : 0;
  const totalCost = subtotal + urgentFee;

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (selectedIds.length === 0) return;
    setOrderSubmitted(true);
  };

  if (orderSubmitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-14">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <span className="bg-amber-100 text-amber-900 text-xs font-extrabold px-3.5 py-1.5 rounded-full">
            {lang === 'ar' ? 'الحالة: الممرض في الطريق إليك (تتبع مباشر)' : 'Status: On The Way (Live GPS Active)'}
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 mt-3">
            {lang === 'ar' ? 'تم تأكيد الطلب وتعيين الممرض!' : 'Nurse Assigned & En Route!'}
          </h2>
          <p className="text-slate-700 text-sm mt-2 max-w-md mx-auto">
            {lang === 'ar'
              ? 'الممرضة سارة محمود (مرخصة ومعتمدة) قبلت طلبك وستصل خلال 14 دقيقة تقريباً.'
              : 'Sarah Mahmoud, RN (Verified ICU & IV Specialist) accepted your request and is arriving in ~14 minutes.'}
          </p>

          <div className="bg-slate-50 rounded-2xl p-5 mt-6 text-start border border-slate-200 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">{lang === 'ar' ? 'الخدمات المطلوبة:' : 'Selected Services:'}</span>
              <span className="font-bold text-slate-900">{selectedServices.map(s => s.name[lang]).join(' + ')}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">{lang === 'ar' ? 'الروشتة الطبية:' : 'Prescription:'}</span>
              <span className="font-bold text-primary-700">{prescriptionName || (lang === 'ar' ? 'تم الإرفاق' : 'Attached')}</span>
            </div>
            <div className="flex justify-between text-base border-t border-slate-200 pt-2">
              <span className="text-slate-700 font-bold">{lang === 'ar' ? 'الإجمالي المطلوب:' : 'Total Amount:'}</span>
              <span className="font-extrabold text-lg text-primary-700">{totalCost} EGP</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a
              href="/dashboard"
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm flex items-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              {lang === 'ar' ? 'تتبع الممرض والمحادثة المباشرة' : 'Track Live on Dashboard'}
            </a>
            <button
              onClick={() => setOrderSubmitted(false)}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3.5 rounded-xl text-sm"
            >
              {lang === 'ar' ? 'حجز زيارة أخرى' : 'Book Another Visit'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900">
          {lang === 'ar' ? 'طلب زيارة تمريض منزلي' : 'Request Home Nursing Care'}
        </h1>
        <p className="text-slate-700 mt-1 text-base">
          {lang === 'ar'
            ? 'اختر الخدمة المطلوبة، ارفع صورة الروشتة، وحدد الموعد المناسب بسهولة.'
            : 'Select one or multiple clinical services, attach your doctor prescription, and confirm.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Services Catalog */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="font-extrabold text-lg text-slate-900">
            {lang === 'ar' ? '1. اختر الخدمات التمريضية (يمكن اختيار أكثر من خدمة)' : '1. Choose Nursing Services'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {NURSING_SERVICES.map((service) => {
              const selected = selectedIds.includes(service.id);
              return (
                <div
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`cursor-pointer rounded-2xl border-2 p-5 transition-all ${
                    selected
                      ? 'border-primary-600 bg-primary-50/50 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xs font-bold text-primary-800 bg-primary-100 px-2.5 py-1 rounded-lg">
                      {service.specialty[lang]}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center ${
                        selected ? 'bg-primary-600 text-white' : 'border-2 border-slate-300 text-transparent'
                      }`}
                    >
                      <Check className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-base mt-3">{service.name[lang]}</h3>
                  <p className="text-xs text-slate-700 mt-1.5 leading-relaxed">{service.description[lang]}</p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-base font-extrabold text-slate-900">{service.price} EGP</span>
                    <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {service.duration[lang]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Booking Form */}
        <div className="lg:col-span-5">
          <form onSubmit={handleConfirmBooking} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sticky top-24 space-y-5">
            <h2 className="font-extrabold text-lg text-slate-900 border-b border-slate-100 pb-3">
              {lang === 'ar' ? '2. تفاصيل الزيارة والروشتة' : '2. Visit Details & Prescription'}
            </h2>

            {/* Booking Type */}
            <div>
              <label className="block text-xs font-extrabold text-slate-700 mb-2">
                {lang === 'ar' ? 'موعد الزيارة' : 'Booking Urgency'}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setBookingType('urgent')}
                  className={`p-3.5 rounded-xl border-2 text-start transition ${
                    bookingType === 'urgent'
                      ? 'border-rose-500 bg-rose-50 text-rose-950'
                      : 'border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-extrabold text-sm">
                    <Zap className="w-4 h-4 text-rose-600" />
                    <span>{lang === 'ar' ? 'زيارة فورية' : 'Immediate'}</span>
                  </div>
                  <span className="text-xs block mt-1">
                    {lang === 'ar' ? 'خلال 25 دقيقة (+50 ج.م)' : 'Arrives in ~25m (+50 EGP)'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setBookingType('scheduled')}
                  className={`p-3.5 rounded-xl border-2 text-start transition ${
                    bookingType === 'scheduled'
                      ? 'border-primary-600 bg-primary-50 text-primary-950'
                      : 'border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-extrabold text-sm">
                    <Calendar className="w-4 h-4 text-primary-600" />
                    <span>{lang === 'ar' ? 'حجز بموعد' : 'Scheduled'}</span>
                  </div>
                  <span className="text-xs block mt-1">
                    {lang === 'ar' ? 'اختر اليوم والساعة' : 'Pick exact date & time'}
                  </span>
                </button>
              </div>
              {bookingType === 'scheduled' && (
                <input
                  type="datetime-local"
                  required
                  value={scheduledDate}
                  onChange={(e) => setScheduledDate(e.target.value)}
                  className="mt-3 w-full border border-slate-300 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:border-primary-600"
                />
              )}
            </div>

            {/* Medical Prescription Upload */}
            <div>
              <label className="block text-xs font-extrabold text-slate-700 mb-2">
                {lang === 'ar' ? 'ارفع صورة الروشتة الطبية (اختياري للمتابعة)' : 'Upload Medical Prescription (Rosheta)'}
              </label>
              <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 hover:border-primary-500 rounded-xl p-4 cursor-pointer bg-slate-50 transition">
                <FileUp className="w-6 h-6 text-primary-600 mb-1" />
                <span className="text-xs font-bold text-slate-800">
                  {prescriptionName
                    ? `${lang === 'ar' ? 'تم إرفاق:' : 'Attached:'} ${prescriptionName}`
                    : lang === 'ar'
                    ? 'اضغط هنا لرفع صورة الروشتة أو التقرير الطبي'
                    : 'Click to upload prescription image or PDF'}
                </span>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  className="hidden"
                  onChange={(e) => setPrescriptionName(e.target.files?.[0]?.name || '')}
                />
              </label>
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                {lang === 'ar' ? 'العنوان بالتفصيل وملاحظات الحالة' : 'Address & Patient Notes'}
              </label>
              <textarea
                rows="2"
                required
                placeholder={lang === 'ar' ? 'اسم الشارع، رقم العمارة، الدور، وأي ملاحظات للممرض...' : 'Street, building, floor, or condition notes...'}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary-600"
              ></textarea>
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-xs font-extrabold text-slate-700 mb-2">
                {lang === 'ar' ? 'طريقة الدفع' : 'Payment Method'}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cash')}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-bold ${
                    paymentMethod === 'cash' ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 text-slate-800'
                  }`}
                >
                  <Banknote className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'كاش عند الزيارة' : 'Cash'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('online')}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-bold ${
                    paymentMethod === 'online' ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 text-slate-800'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'دفع أونلاين' : 'Online Card'}</span>
                </button>
              </div>
            </div>

            {/* Total Summary */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>{lang === 'ar' ? `الخدمات المختارة (${selectedServices.length})` : `Selected Services (${selectedServices.length})`}</span>
                <span>{subtotal} EGP</span>
              </div>
              {urgentFee > 0 && (
                <div className="flex justify-between text-xs text-rose-700 font-bold">
                  <span>{lang === 'ar' ? 'رسوم الاستجابة الفورية' : 'Urgent Priority Fee'}</span>
                  <span>+{urgentFee} EGP</span>
                </div>
              )}
              <div className="flex justify-between text-base font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                <span>{lang === 'ar' ? 'التكلفة الإجمالية' : 'Total Cost'}</span>
                <span className="text-primary-700">{totalCost} EGP</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={selectedIds.length === 0}
              className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-slate-300 text-white font-extrabold text-base py-4 rounded-2xl shadow-md transition flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-5 h-5" />
              <span>{lang === 'ar' ? 'تأكيد الطلب وإرسال الممرض' : 'Confirm & Dispatch Nurse'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
