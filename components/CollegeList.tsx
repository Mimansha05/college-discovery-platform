"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Star, IndianRupee, TrendingUp } from "lucide-react";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import Card from "./ui/Card";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  avgPackage: number;
};

type Props = {
  colleges: College[];
};

export default function CollegeList({ colleges }: Props) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("");

  const filteredColleges = colleges.filter((college) => {
    const matchesSearch = college.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLocation =
      location === "" || college.location === location;

    const matchesRating =
      rating === "" || college.rating >= Number(rating);

    return (
      matchesSearch &&
      matchesLocation &&
      matchesRating
    );
  });

  return (
    <div className="w-full">
      <div className="mb-8 space-y-4">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <Filters
          location={location}
          setLocation={setLocation}
          rating={rating}
          setRating={setRating}
        />

        <p className="text-sm text-slate-600 font-medium">
          {filteredColleges.length} college{filteredColleges.length !== 1 ? 's' : ''} found
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredColleges.map((college) => (
          <Link
            key={college.id}
            href={`/college/${college.id}`}
            className="block group"
          >
            <Card hoverable className="h-full p-5 flex flex-col">
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                  {college.name}
                </h3>
                <div className="flex items-center gap-1 text-sm text-slate-600">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  {college.location}
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-3 flex-1">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Rating</span>
                  </div>
                  <span className="font-semibold text-slate-900">{college.rating}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Fees</span>
                  </div>
                  <span className="font-semibold text-slate-900">₹{(college.fees / 100000).toFixed(1)}L</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Avg Package</span>
                  </div>
                  <span className="font-semibold text-slate-900">₹{college.avgPackage} LPA</span>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 pt-4 border-t border-slate-200">
                <span className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all gap-1">
                  View Details →
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {filteredColleges.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-600 font-medium">No colleges found matching your filters.</p>
        </div>
      )}
    </div>
  );
}
