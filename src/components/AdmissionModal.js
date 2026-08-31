"use client";

import React, { useState } from "react";
import { Icon } from "./Icons";
import { academicPrograms, collegeInfo } from "@/data/collegeData";
import { translations } from "@/data/translations";

export default function AdmissionModal({ lang, isOpen, onClose }) {
  const t = translations[lang];

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    percentage: "",
    selectedCourse: "bcom",
    category: "General",
    gender: "Male",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [appId, setAppId] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobile) {
      alert(lang === "gu" ? "કૃપા કરીને તમારું પૂરું નામ અને મોબાઈલ નંબર દાખલ કરો." : "Please enter your Full Name and Mobile number.");
      return;
    }
    const generatedId = `UNJHA-2025-${Math.floor(100000 + Math.random() * 900000)}`;
    setAppId(generatedId);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      percentage: "",
      selectedCourse: "bcom",
      category: "General",
      gender: "Male",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-900 via-indigo-600 to-amber-500"></div>

        {!isSubmitted ? (
          <div>
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-900 text-[11px] font-bold uppercase tracking-wider mb-1">
                  Academic Year 2025-26
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                  {lang === "gu" ? "ઓનલાઇન પ્રવેશ રજીસ્ટ્રેશન ફોર્મ" : "Online Admission Inquiry Form"}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {lang === "gu" 
                    ? "HNGU પાટણ સેન્ટ્રલાઇઝ્ડ પ્રવેશ પ્રક્રિયા અંતર્ગત સીટ બુકિંગ સહાય" 
                    : "Guidance & Direct Counseling under HNGU Patan Centralized Admissions"}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <Icon name="X" className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {/* Full Name */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {lang === "gu" ? "વિદ્યાર્થીનું પૂરું નામ (માર્કશીટ મુજબ): *" : "Student Full Name (As per HSC Marksheet): *"}
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. PATEL ARYAN RAJESHBHAI"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none uppercase font-medium text-slate-800"
                />
              </div>

              {/* Mobile & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {lang === "gu" ? "મોબાઈલ નંબર (WhatsApp): *" : "Mobile Number (WhatsApp): *"}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none font-medium text-slate-800"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {lang === "gu" ? "ઈમેઇલ એડ્રેસ:" : "Email Address:"}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="student@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none font-medium text-slate-800"
                  />
                </div>
              </div>

              {/* Desired Program & 12th Marks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {lang === "gu" ? "ઇચ્છિત કોર્સ પસંદ કરો: *" : "Preferred Program: *"}
                  </label>
                  <select
                    value={formData.selectedCourse}
                    onChange={(e) => setFormData({ ...formData, selectedCourse: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none font-medium text-slate-800"
                  >
                    {academicPrograms.map((prog) => (
                      <option key={prog.id} value={prog.id}>
                        {prog.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {lang === "gu" ? "ધોરણ ૧૨ / સ્નાતક ટકાવારી:" : "12th / Graduation %:"}
                  </label>
                  <input
                    type="text"
                    value={formData.percentage}
                    onChange={(e) => setFormData({ ...formData, percentage: e.target.value })}
                    placeholder="e.g. 78.40%"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none font-medium text-slate-800"
                  />
                </div>
              </div>

              {/* Category & Gender */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {lang === "gu" ? "કેટેગરી (Category):" : "Category:"}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none font-medium text-slate-800"
                  >
                    <option value="General">General / Open</option>
                    <option value="SEBC/OBC">SEBC / OBC (Non-Creamy)</option>
                    <option value="SC">SC (Scheduled Caste)</option>
                    <option value="ST">ST (Scheduled Tribe)</option>
                    <option value="EWS">EWS (Economically Weaker)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {lang === "gu" ? "જાતિ (Gender):" : "Gender:"}
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none font-medium text-slate-800"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female (Girls' Hostel Option)</option>
                  </select>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  {lang === "gu" ? "રદ કરો" : "Cancel"}
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-900 to-indigo-800 hover:from-blue-800 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <Icon name="Sparkles" className="w-4 h-4 text-amber-400" />
                  <span>{lang === "gu" ? "ઓનલાઇન અરજી સબમિટ કરો" : "Submit Admission Inquiry"}</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
              <Icon name="CheckCircle" className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-slate-900 mb-2">
              {lang === "gu" ? "અરજી સફળતાપૂર્વક નોંધાઈ ગઈ છે!" : "Admission Inquiry Submitted!"}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6">
              {lang === "gu"
                ? `આભાર ${formData.fullName}. તમારો પ્રવેશ સંદર્ભ નંબર જનરેટ થયો છે. કોલેજ પ્રવેશ સમિતિ ટૂંક સમયમાં તમારો સંપર્ક કરશે.`
                : `Thank you, ${formData.fullName}. Your admission inquiry has been logged. Our admissions counseling desk will reach out on your mobile number.`}
            </p>

            <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200 max-w-sm mx-auto mb-6 font-mono">
              <div className="text-xs text-slate-500 uppercase font-bold">{lang === "gu" ? "સંદર્ભ ક્રમાંક (Ref ID)" : "Inquiry Reference ID"}</div>
              <div className="text-lg font-black text-blue-950 mt-1">{appId}</div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs sm:text-sm transition-all"
            >
              {lang === "gu" ? "પૂર્ણ થયું (Close)" : "Done"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
