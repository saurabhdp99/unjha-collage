"use client";

import React, { useState } from "react";
import { Icon } from "./Icons";
import { mockStudentsResults, collegeInfo } from "@/data/collegeData";
import { translations } from "@/data/translations";

export default function ResultPortal({ lang }) {
  const t = translations[lang];
  const [seatInput, setSeatInput] = useState("101");
  const [selectedCourse, setSelectedCourse] = useState("bcom");
  const [selectedSemester, setSelectedSemester] = useState("sem4");
  const [searchedResult, setSearchedResult] = useState(mockStudentsResults["HNGU-2024-101"]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const sampleSeats = [
    { seat: "101", key: "HNGU-2024-101", name: "Priya Patel (B.Com Sem-4)" },
    { seat: "102", key: "HNGU-2024-102", name: "Rahul Prajapati (B.A. Sem-6)" },
    { seat: "103", key: "HNGU-2024-103", name: "Jignesh Choudhary (M.Com Sem-2)" },
  ];

  const handleSearch = (seatToSearch) => {
    const query = (seatToSearch || seatInput).trim();
    if (!query) {
      setErrorMsg(lang === "gu" ? "કૃપા કરીને સીટ નંબર અથવા એનરોલમેન્ટ નંબર દાખલ કરો." : "Please enter a valid Seat Number or Enrollment ID.");
      return;
    }

    setIsSearching(true);
    setErrorMsg("");

    setTimeout(() => {
      setIsSearching(false);
      // Look up in mock data by seatNo or by enrollment key
      const foundKey = Object.keys(mockStudentsResults).find(
        (key) =>
          mockStudentsResults[key].seatNo === query ||
          mockStudentsResults[key].enrollmentNo.toLowerCase() === query.toLowerCase() ||
          key.toLowerCase().includes(query.toLowerCase())
      );

      if (foundKey) {
        setSearchedResult(mockStudentsResults[foundKey]);
        setErrorMsg("");
      } else {
        // Fallback demo result generation for any seat number entered by user
        setSearchedResult({
          seatNo: query,
          enrollmentNo: `HNGU-2025-${query}`,
          studentName: `STUDENT ROLL NO #${query}`,
          collegeName: collegeInfo.name,
          course: selectedCourse === "bsc-chem" ? "Bachelor of Science (B.Sc.) - Chemistry" : selectedCourse === "bsc-phy" ? "Bachelor of Science (B.Sc.) - Physics" : selectedCourse === "bsc-math" ? "Bachelor of Science (B.Sc.) - Mathematics" : "Bachelor of Science (B.Sc.) - Botany",
          semester: `Semester - ${selectedSemester.replace("sem", "")}`,
          examSession: "Summer 2025 (HNGU Patan)",
          resultStatus: "PASS - FIRST CLASS",
          sgpa: "8.15",
          cgpa: "8.02",
          percentage: "74.8%",
          subjects: [
            { code: "CC-101", name: "Core Science Theory Paper - I", maxMarks: 100, intMarks: 27, extMarks: 56, totalMarks: 83, grade: "A" },
            { code: "CC-102", name: "Core Science Theory Paper - II", maxMarks: 100, intMarks: 26, extMarks: 53, totalMarks: 79, grade: "B+" },
            { code: "CC-103", name: "Core Science Subsidiary Course", maxMarks: 100, intMarks: 28, extMarks: 60, totalMarks: 88, grade: "A+" },
            { code: "CC-104", name: "Environmental Science & Ethics", maxMarks: 100, intMarks: 25, extMarks: 52, totalMarks: 77, grade: "B+" },
            { code: "PR-101", name: "Laboratory Practical & Viva Voce", maxMarks: 100, intMarks: 29, extMarks: 62, totalMarks: 91, grade: "O" }
          ]
        });
      }
    }, 400);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="results" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Icon name="TrendingUp" className="w-3.5 h-3.5" />
            <span>{lang === "gu" ? "ઓનલાઇન યુનિવર્સિટી પરિણામ પોર્ટલ" : "HNGU Examination Result Portal"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === "gu" ? "હેમચંદ્રાચાર્ય ઉત્તર ગુજરાત યુનિવર્સિટી પરિણામ ચકાસણી" : "Instant HNGU Semester Result & Grade Sheet"}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {lang === "gu"
              ? "તમારો સીટ નંબર અથવા એનરોલમેન્ટ નંબર દાખલ કરીને સેમેસ્ટર ગુણપત્રક (Marksheet) ઓનલાઇન મેળવો અને પ્રિન્ટ કરો."
              : "Search your semester marksheet online using your Seat Number. Download and print official provisional grade records."}
          </p>
        </div>

        {/* Search Console Card */}
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md mb-10 no-print">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {/* Course Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {lang === "gu" ? "કોર્સ પસંદ કરો" : "Select Program / Stream"}
              </label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              >
                <option value="bsc-chem">B.Sc. (Chemistry)</option>
                <option value="bsc-phy">B.Sc. (Physics)</option>
                <option value="bsc-math">B.Sc. (Mathematics)</option>
                <option value="bsc-bot">B.Sc. (Botany / Biosciences)</option>
              </select>
            </div>

            {/* Semester Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {lang === "gu" ? "સેમેસ્ટર" : "Select Semester"}
              </label>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              >
                <option value="sem1">Semester - 1</option>
                <option value="sem2">Semester - 2</option>
                <option value="sem3">Semester - 3</option>
                <option value="sem4">Semester - 4</option>
                <option value="sem5">Semester - 5</option>
                <option value="sem6">Semester - 6</option>
              </select>
            </div>

            {/* Seat Number Input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {lang === "gu" ? "સીટ નંબર / Enrollment No" : "Seat No. / Enrollment"}
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={seatInput}
                  onChange={(e) => setSeatInput(e.target.value)}
                  placeholder="e.g. 101"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm font-bold text-blue-950 focus:ring-2 focus:ring-blue-600 focus:outline-none uppercase"
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <button
                  onClick={() => handleSearch()}
                  disabled={isSearching}
                  className="px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm shadow-md transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <Icon name="Search" className="w-4 h-4" />
                  <span>{isSearching ? "..." : (lang === "gu" ? "શોધો" : "Search")}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Demo Pre-filled Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200 text-xs">
            <span className="font-bold text-slate-500 mr-1">
              {lang === "gu" ? "ડેમો સીટ નંબર ચકાસો:" : "Try Sample Marksheets:"}
            </span>
            {sampleSeats.map((sample) => (
              <button
                key={sample.seat}
                onClick={() => {
                  setSeatInput(sample.seat);
                  handleSearch(sample.seat);
                }}
                className={`px-2.5 py-1 rounded-lg border text-xs font-semibold transition-all ${
                  seatInput === sample.seat
                    ? "bg-blue-900 text-white border-blue-900 shadow-sm"
                    : "bg-white text-slate-700 border-slate-300 hover:border-blue-400 hover:text-blue-900"
                }`}
              >
                {sample.name}
              </button>
            ))}
          </div>

          {errorMsg && (
            <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <Icon name="AlertCircle" className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}
        </div>

        {/* Marksheet Display Area */}
        {searchedResult && (
          <div className="max-w-4xl mx-auto print-area bg-white border-2 border-slate-300 rounded-2xl shadow-xl overflow-hidden animate-fadeIn">
            {/* Marksheet Official Header */}
            <div className="bg-gradient-to-r from-blue-950 via-indigo-900 to-blue-900 text-white p-6 border-b-4 border-amber-400">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white text-blue-950 flex items-center justify-center font-bold shadow-md shrink-0 border-2 border-amber-400">
                    <Icon name="GraduationCap" className="w-8 h-8 text-blue-950" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
                      Hemchandracharya North Gujarat University, Patan
                    </div>
                    <div className="text-base sm:text-lg font-black tracking-tight leading-snug">
                      {searchedResult.collegeName}
                    </div>
                    <div className="text-xs text-slate-300 font-mono mt-0.5">
                      College Code: {collegeInfo.hnguCode} | AISHE: {collegeInfo.aisheCode} | MRS Highschool Campus, Unjha, Dist. Mehsana
                    </div>
                  </div>
                </div>

                <div className="no-print">
                  <button
                    onClick={handlePrint}
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 shrink-0"
                  >
                    <Icon name="Printer" className="w-4 h-4" />
                    <span>{lang === "gu" ? "ગુણપત્રક પ્રિન્ટ કરો" : "Print Marksheet"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Student Metadata Table */}
            <div className="p-6 bg-slate-50 border-b border-slate-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <div className="text-slate-500 font-medium">{lang === "gu" ? "વિદ્યાર્થીનું નામ" : "Candidate Name"}</div>
                  <div className="font-bold text-slate-900 mt-0.5">{searchedResult.studentName}</div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <div className="text-slate-500 font-medium">{lang === "gu" ? "સીટ નંબર / Enrollment" : "Seat No / Enrollment"}</div>
                  <div className="font-bold text-blue-950 font-mono mt-0.5">
                    {searchedResult.seatNo} / {searchedResult.enrollmentNo}
                  </div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <div className="text-slate-500 font-medium">{lang === "gu" ? "અભ્યાસક્રમ / સેમેસ્ટર" : "Program & Semester"}</div>
                  <div className="font-bold text-slate-900 mt-0.5">{searchedResult.course} ({searchedResult.semester})</div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <div className="text-slate-500 font-medium">{lang === "gu" ? "પરીક્ષા સત્ર" : "Exam Session"}</div>
                  <div className="font-bold text-slate-900 mt-0.5">{searchedResult.examSession}</div>
                </div>
              </div>
            </div>

            {/* Subject Marks Table */}
            <div className="p-6 overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-300 text-slate-700 font-bold uppercase text-[11px] tracking-wider">
                    <th className="py-3 px-4">Subject Code</th>
                    <th className="py-3 px-4">Subject Description</th>
                    <th className="py-3 px-3 text-center">Max</th>
                    <th className="py-3 px-3 text-center">Internal (30)</th>
                    <th className="py-3 px-3 text-center">External (70)</th>
                    <th className="py-3 px-3 text-center">Total (100)</th>
                    <th className="py-3 px-3 text-center">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium text-slate-800">
                  {searchedResult.subjects.map((sub, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-blue-900">{sub.code}</td>
                      <td className="py-3 px-4 font-semibold">{sub.name}</td>
                      <td className="py-3 px-3 text-center text-slate-500">{sub.maxMarks}</td>
                      <td className="py-3 px-3 text-center font-mono">{sub.intMarks}</td>
                      <td className="py-3 px-3 text-center font-mono">{sub.extMarks}</td>
                      <td className="py-3 px-3 text-center font-bold text-slate-900 font-mono">{sub.totalMarks}</td>
                      <td className="py-3 px-3 text-center">
                        <span className="inline-block px-2 py-0.5 rounded font-bold text-xs bg-emerald-100 text-emerald-800">
                          {sub.grade}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary Grade Footer */}
            <div className="p-6 bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-center sm:text-left">
                <div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{lang === "gu" ? "પરિણામ સ્થિતિ" : "Result Status"}</div>
                  <div className="text-base sm:text-lg font-black text-amber-400 mt-0.5">
                    {searchedResult.resultStatus}
                  </div>
                </div>
                <div className="h-8 w-px bg-slate-700 hidden sm:block"></div>
                <div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">SGPA</div>
                  <div className="text-base sm:text-lg font-mono font-bold text-emerald-400 mt-0.5">{searchedResult.sgpa}</div>
                </div>
                <div className="h-8 w-px bg-slate-700 hidden sm:block"></div>
                <div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">CGPA</div>
                  <div className="text-base sm:text-lg font-mono font-bold text-emerald-400 mt-0.5">{searchedResult.cgpa}</div>
                </div>
                <div className="h-8 w-px bg-slate-700 hidden sm:block"></div>
                <div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{lang === "gu" ? "ટકાવારી" : "Percentage"}</div>
                  <div className="text-base sm:text-lg font-mono font-bold text-white mt-0.5">{searchedResult.percentage}</div>
                </div>
              </div>

              <div className="text-xs text-slate-400 text-center md:text-right max-w-xs">
                <span className="text-amber-300 font-semibold block mb-0.5">
                  {lang === "gu" ? "નોંધ: આ પ્રોવિઝનલ પરિણામ છે." : "Note: Provisional Web Grade Sheet."}
                </span>
                {lang === "gu" 
                  ? "મૂળ ગુણપત્રક કોલેજ ઓફિસમાંથી મેળવવું."
                  : "Original signed marksheet should be collected from the college examination branch."}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
