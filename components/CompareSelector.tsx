"use client";

import { useState } from "react";
import Button from "./ui/Button";

type College = {
  id: string;
  name: string;
};

type Props = {
  colleges: College[];
};

export default function CompareSelector({
  colleges,
}: Props) {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-slate-200 p-8 mb-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Compare Colleges Side-by-Side
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            College 1
          </label>
          <select
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all duration-200 bg-white text-slate-900 appearance-none cursor-pointer"
          >
            <option value="">Select a college</option>

            {colleges.map((college) => (
              <option
                key={college.id}
                value={college.id}
              >
                {college.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            College 2
          </label>
          <select
            value={second}
            onChange={(e) => setSecond(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all duration-200 bg-white text-slate-900 appearance-none cursor-pointer"
          >
            <option value="">Select a college</option>

            {colleges.map((college) => (
              <option
                key={college.id}
                value={college.id}
              >
                {college.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Button
        onClick={() => {
          if (first && second) {
            window.location.href =
              `/compare?c1=${first}&c2=${second}`;
          }
        }}
        disabled={!first || !second}
        size="lg"
        className="w-full sm:w-auto"
      >
        Compare Now
      </Button>
    </div>
  );
}
