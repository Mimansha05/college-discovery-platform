"use client";

import { MapPin, Star } from 'lucide-react';

type FilterProps = {
  location: string;
  setLocation: (value: string) => void;
  rating: string;
  setRating: (value: string) => void;
};

export default function Filters({
  location,
  setLocation,
  rating,
  setRating,
}: FilterProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="relative">
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Location</label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all duration-200 bg-white text-slate-900 appearance-none cursor-pointer"
          >
            <option value="">All Locations</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Telangana">Telangana</option>
          </select>
        </div>
      </div>

      <div className="relative">
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Minimum Rating</label>
        <div className="relative">
          <Star className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all duration-200 bg-white text-slate-900 appearance-none cursor-pointer"
          >
            <option value="">All Ratings</option>
            <option value="4.5">4.5+</option>
            <option value="4.7">4.7+</option>
            <option value="4.8">4.8+</option>
          </select>
        </div>
      </div>
    </div>
  );
}
