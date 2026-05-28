"use client";

import { useState } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import Filters from "./Filters";

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
    <>
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

      <div className="grid gap-4">
        {filteredColleges.map((college) => (
          <Link
            key={college.id}
            href={`/college/${college.id}`}
            className="border rounded-lg p-4 shadow block hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold">
              {college.name}
            </h2>

            <p>{college.location}</p>

            <p>Rating: {college.rating}</p>

            <p>Fees: ₹{college.fees}</p>

            <p>
              Average Package: ₹{college.avgPackage} LPA
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}