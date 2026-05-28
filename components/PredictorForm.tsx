"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Button from "./ui/Button";

export default function PredictorForm() {
  const [rank, setRank] = useState("");

  const handlePredict = () => {
    if (!rank) return;

    window.location.href = `/predictor?rank=${rank}`;
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-slate-200 p-8 md:p-12 max-w-2xl mx-auto mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 text-center">
        Get Your College Recommendations
      </h2>
      <p className="text-slate-600 text-center mb-8">
        Enter your JEE Main rank to discover which colleges you&apos;re eligible for
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Your JEE Main Rank
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
            <input
              type="number"
              placeholder="e.g., 5000"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all duration-200 bg-white text-slate-900 placeholder:text-slate-500"
            />
          </div>
        </div>

        <div className="flex items-end">
          <Button
            onClick={handlePredict}
            disabled={!rank}
            size="lg"
            className="w-full sm:w-auto"
          >
            Predict Colleges
          </Button>
        </div>
      </div>
    </div>
  );
}
