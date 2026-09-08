"use client";

import React, { useState } from "react";
import { Icon } from "./Icons";

export default function UrbanStudentLoginModal({ lang, isOpen, onClose }) {
  const [enrollment, setEnrollment] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (!enrollment) {
      alert("Please enter your Student Enrollment No. / Seat No.");
      return;
    }
    // Simulate successful login
    setUserProfile({
      name: "PATEL PRIYA SURESHBHAI",
      enrollment: enrollment || "HNGU-2024-101",
      course: "B.Com. (Semester - 4)",
      rollNo: "101",
      attendance: "89.4%",
      pendingFees: "Nil (Paid)",
      libraryIssued: "2 Books",
    });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserProfile(null);
    setEnrollment("");
    setPassword("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn font-sans">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative overflow-hidden">
        {/* Top Header Strip (Mehsana Urban Red) */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#800000]"></div>

        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#800000] text-amber-300">
              <Icon name="Users" className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-[#1b3557]">
                {lang === "gu" ? "વિદ્યાર્થી પોર્ટલ લોગીન" : "Student Portal Login"}
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                Dr. Ashaben Patel Govt. Science College / HNGU Access
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <Icon name="X" className="w-5 h-5" />
          </button>
        </div>

        {!isLoggedIn ? (
          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                {lang === "gu" ? "એનરોલમેન્ટ નંબર / સીટ નંબર: *" : "Enrollment No. / Roll No: *"}
              </label>
              <input
                type="text"
                required
                value={enrollment}
                onChange={(e) => setEnrollment(e.target.value)}
                placeholder="e.g. 101 or HNGU-2024-101"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none uppercase font-bold text-slate-800"
              />
              <span className="text-[10px] text-slate-400 mt-0.5 block">Demo test: Type 101, 102, or 103</span>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                {lang === "gu" ? "પાસવર્ડ / જન્મતારીખ (DD/MM/YYYY): *" : "Password / Date of Birth: *"}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none text-slate-800"
              />
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded border-slate-300" />
                <span>Remember me</span>
              </label>
              <span className="text-[#800000] font-bold cursor-pointer hover:underline">Forgot password?</span>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-[#800000] hover:bg-[#600000] text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-1.5"
              >
                <Icon name="Users" className="w-4 h-4" />
                <span>{lang === "gu" ? "સાઇન ઇન કરો" : "Sign In to Portal"}</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="text-xs space-y-4">
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-900 flex items-center gap-3">
              <Icon name="CheckCircle" className="w-6 h-6 text-emerald-600 shrink-0" />
              <div>
                <div className="font-bold text-sm">{userProfile.name}</div>
                <div className="text-[11px] text-emerald-700 font-mono">{userProfile.enrollment} • {userProfile.course}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="text-slate-500 text-[10px] uppercase font-bold">Attendance</div>
                <div className="text-sm font-black text-blue-950 mt-0.5">{userProfile.attendance}</div>
              </div>
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="text-slate-500 text-[10px] uppercase font-bold">Semester Fee</div>
                <div className="text-sm font-black text-emerald-700 mt-0.5">{userProfile.pendingFees}</div>
              </div>
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="text-slate-500 text-[10px] uppercase font-bold">Library Books</div>
                <div className="text-sm font-black text-slate-800 mt-0.5">{userProfile.libraryIssued}</div>
              </div>
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="text-slate-500 text-[10px] uppercase font-bold">Internal Exam</div>
                <div className="text-sm font-black text-amber-700 mt-0.5">Cleared (Pass)</div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-200">
              <button
                onClick={handleLogout}
                className="text-slate-500 hover:text-red-700 font-bold text-xs"
              >
                Sign Out
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-[#1b3557] text-white text-xs font-bold"
              >
                Close Portal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
