"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";

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

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="grid gap-4">
        {filteredColleges.map((college) => (
          <div
            key={college.id}
            className="border rounded-lg p-4 shadow"
          >
            <h2 className="text-xl font-semibold">
              {college.name}
            </h2>

            <p>{college.location}</p>

            <p>Rating: {college.rating}</p>

            <p>Fees: ₹{college.fees}</p>

            <p>Average Package: ₹{college.avgPackage} LPA</p>
          </div>
        ))}
      </div>
    </>
  );
}