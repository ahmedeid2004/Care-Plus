import React, { useState } from 'react';
import { Briefcase, Zap, MapPin, Clock, Building2, CheckCircle2, Search } from 'lucide-react';
import { JOBS } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export default function JobsPage() {
  const { lang } = useLanguage();
  const [filterType, setFilterType] = useState('All');
  const [appliedIds, setAppliedIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleApply = (id) => {
    if (!appliedIds.includes(id)) {
      setAppliedIds([...appliedIds, id]);
    }
  };

  const filteredJobs = JOBS.filter((job) => {
    const matchesType =
      filterType === 'All' ||
      (filterType === 'Urgent Shift' && job.isUrgent) ||
      job.type === filterType;
    const matchesSearch =
      job.title[lang].toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.facility[lang].toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <span className="text-sky-700 font-extrabold text-xs uppercase tracking-wider">
          {lang === 'ar' ? 'توظيف الكوادر الطبية B2B' : 'B2B Medical Staffing'}
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-1">
          {lang === 'ar' ? 'وظائف المستشفيات والعيادات والشفتات العاجلة' : 'Nursing Jobs & Urgent Shift Replacements'}
        </h1>
        <p className="text-slate-700 text-sm mt-1">
          {lang === 'ar'
            ? 'يمكن للممرضين الموثقين التقديم على وظائف دائمة أو قبول شفتات طوارئ فورية.'
            : 'Verified nurses can apply to full-time hospital roles, clinic positions, or accept instant locum shifts.'}
        </p>
      </div>

      {/* Search & Filter */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 right-3.5 top-3.5" />
          <input
            type="text"
            placeholder={lang === 'ar' ? 'ابحث بالتخصص (عناية مركزة، طوارئ، أطفال) أو اسم المستشفى...' : 'Search by specialty or hospital...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-10 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-primary-600"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {[
            { id: 'All', label: lang === 'ar' ? 'الكل' : 'All' },
            { id: 'Urgent Shift', label: lang === 'ar' ? '⚡ شفتات عاجلة' : '⚡ Urgent Shifts' },
            { id: 'Full-Time', label: lang === 'ar' ? 'دوام كامل' : 'Full-Time' },
            { id: 'Part-Time', label: lang === 'ar' ? 'دوام جزئي' : 'Part-Time' },
          ].map((type) => (
            <button
              key={type.id}
              onClick={() => setFilterType(type.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition ${
                filterType === type.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredJobs.map((job) => {
          const isApplied = appliedIds.includes(job.id);
          return (
            <div
              key={job.id}
              className={`rounded-2xl border-2 p-6 bg-white transition shadow-sm ${
                job.isUrgent ? 'border-amber-400' : 'border-slate-200'
              }`}
            >
              <div className="flex justify-between items-start gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg leading-snug">{job.title[lang]}</h3>
                    <p className="text-xs font-bold text-slate-600">{job.facility[lang]} • {job.facilityType}</p>
                  </div>
                </div>
                {job.isUrgent ? (
                  <span className="bg-amber-100 text-amber-900 text-xs font-extrabold px-3 py-1 rounded-full flex items-center gap-1 shrink-0">
                    <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
                    <span>{lang === 'ar' ? 'شفت عاجل' : 'Urgent'}</span>
                  </span>
                ) : (
                  <span className="bg-sky-50 text-sky-800 text-xs font-bold px-3 py-1 rounded-full shrink-0">
                    {job.type}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 mt-5 text-xs font-semibold text-slate-700 bg-slate-50 p-3.5 rounded-xl">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-400" /> {job.location[lang]}
                </div>
                <div className="flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-slate-400" /> {job.experience[lang]}
                </div>
                <div className="flex items-center gap-1.5 font-extrabold text-emerald-700">
                  💰 {job.salary}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-400" /> {job.postedAt[lang]}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs font-bold text-primary-800 bg-primary-50 px-3 py-1 rounded-lg">
                  {job.specialty}
                </span>
                <button
                  onClick={() => handleApply(job.id)}
                  disabled={isApplied}
                  className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 ${
                    isApplied
                      ? 'bg-emerald-100 text-emerald-900 cursor-default'
                      : job.isUrgent
                      ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-sm'
                      : 'bg-slate-900 hover:bg-primary-600 text-white'
                  }`}
                >
                  {isApplied ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{lang === 'ar' ? 'تم التقديم بنجاح' : 'Application Sent'}</span>
                    </>
                  ) : job.isUrgent ? (
                    lang === 'ar' ? 'قبول الشفت العاجل' : 'Accept Urgent Shift'
                  ) : (
                    lang === 'ar' ? 'تقديم الآن' : 'Apply Now'
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
