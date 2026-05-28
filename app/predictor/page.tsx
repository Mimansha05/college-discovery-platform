import Link from "next/link";
import type { College } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import {
  ArrowLeft,
  MapPin,
  Star,
  IndianRupee,
  TrendingUp,
  Award,
} from "lucide-react";

import PredictorForm from "@/components/PredictorForm";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const dynamic = "force-dynamic";

type Props = {
  searchParams: Promise<{
    rank?: string;
  }>;
};

export default async function PredictorPage({
  searchParams,
}: Props) {
  const { rank } = await searchParams;

  let recommendations: College[] = [];

  if (rank) {
    const rankNumber = Number(rank);

    if (Number.isFinite(rankNumber) && rankNumber > 0) {
      recommendations = await prisma.college.findMany({
        where: {
          maxRank: {
            gte: rankNumber,
          },
        },
        orderBy: {
          maxRank: "asc",
        },
      });
    }
  }

  return (
    <main className="min-h-screen pb-12">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          College Predictor
        </h1>

        <p className="text-lg text-slate-600 mb-12">
          Discover which colleges you&apos;re eligible for based on your JEE Main
          rank.
        </p>

        {/* Predictor Form */}
        <PredictorForm />

        {/* Results */}
        {recommendations.length > 0 && (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Eligible Colleges
              </h2>

              <p className="text-slate-600">
                You are eligible for{" "}
                <span className="font-bold text-blue-600">
                  {recommendations.length}
                </span>{" "}
                college
                {recommendations.length !== 1 ? "s" : ""} based on rank{" "}
                <span className="font-bold text-slate-900">{rank}</span>
              </p>
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {recommendations.map((college) => (
                <Link
                  key={college.id}
                  href={`/college/${college.id}`}
                  className="block group"
                >
                  <Card hoverable className="p-6 h-full flex flex-col">
                    {/* College Name */}
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                        {college.name}
                      </h3>

                      <div className="flex items-center gap-1 text-sm text-slate-600">
                        <MapPin className="w-4 h-4" />
                        {college.location}
                      </div>
                    </div>

                    {/* Rank Badge */}
                    <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-sm text-green-700 font-medium">
                        ✓ Eligible up to rank{" "}
                        <span className="font-bold">
                          {college.maxRank}
                        </span>
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center justify-between p-2 rounded">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-amber-500" />
                          <span className="text-sm text-slate-600">
                            Rating
                          </span>
                        </div>

                        <span className="font-semibold text-slate-900">
                          {college.rating}
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded">
                        <div className="flex items-center gap-2">
                          <IndianRupee className="w-4 h-4 text-blue-600" />
                          <span className="text-sm text-slate-600">
                            Fees
                          </span>
                        </div>

                        <span className="font-semibold text-slate-900">
                          ₹{(college.fees / 100000).toFixed(1)}L
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-slate-600">
                            Avg Package
                          </span>
                        </div>

                        <span className="font-semibold text-slate-900">
                          ₹{college.avgPackage} LPA
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-amber-600" />
                          <span className="text-sm text-slate-600">
                            Placement
                          </span>
                        </div>

                        <span className="font-semibold text-slate-900">
                          {college.placement}%
                        </span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <span className="inline-flex items-center text-blue-600 font-medium text-sm">
                        View Details →
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Compare Section */}
            <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Want to compare colleges?
              </h3>

              <p className="text-slate-600 mb-6">
                Select any two colleges to see a detailed comparison.
              </p>

              <Link href="/compare">
                <Button>
                  Compare Colleges Now
                </Button>
              </Link>
            </div>
          </>
        )}

        {/* No Results */}
        {rank && recommendations.length === 0 && (
          <Card className="p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                No matches found
              </h2>

              <p className="text-slate-600">
                No colleges found for rank {rank}.
              </p>
            </div>
          </Card>
        )}

        {/* Initial State */}
        {!rank && (
          <Card className="p-12 text-center">
            <p className="text-slate-600 text-lg">
              Enter your JEE Main rank above to see which colleges you&apos;re
              eligible for.
            </p>
          </Card>
        )}
      </div>
    </main>
  );
}
