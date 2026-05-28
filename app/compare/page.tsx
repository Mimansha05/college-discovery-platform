import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ArrowLeft, MapPin, Star, IndianRupee, TrendingUp, Award } from "lucide-react";
import CompareSelector from "@/components/CompareSelector";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const dynamic = "force-dynamic";

type Props = {
  searchParams: Promise<{
    c1?: string;
    c2?: string;
  }>;
};

export default async function ComparePage({
  searchParams,
}: Props) {
  const { c1, c2 } = await searchParams;

  const colleges = await prisma.college.findMany();

  const college1 = c1
    ? await prisma.college.findUnique({
        where: { id: c1 },
      })
    : null;

  const college2 = c2
    ? await prisma.college.findUnique({
        where: { id: c2 },
      })
    : null;

  return (
    <main className="min-h-screen pb-12">
      {/* Header Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Colleges
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          Compare Colleges
        </h1>

        {/* Selector */}
        <CompareSelector colleges={colleges} />

        {/* Comparison View */}
        {college1 && college2 ? (
          <div className="space-y-6">
            {/* Header Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  {college1.name}
                </h2>
                <div className="flex items-center gap-2 text-slate-700 mb-6">
                  <MapPin className="w-5 h-5" />
                  {college1.location}
                </div>
                <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="font-bold">{college1.rating}/5</span>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  {college2.name}
                </h2>
                <div className="flex items-center gap-2 text-slate-700 mb-6">
                  <MapPin className="w-5 h-5" />
                  {college2.location}
                </div>
                <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="font-bold">{college2.rating}/5</span>
                </div>
              </Card>
            </div>

            {/* Comparison Table */}
            <Card className="p-6 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-4 px-4 font-semibold text-slate-700">Metric</th>
                    <th className="text-center py-4 px-4 font-semibold text-slate-700">{college1.name}</th>
                    <th className="text-center py-4 px-4 font-semibold text-slate-700">{college2.name}</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="py-4 px-4 font-medium text-slate-700 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      Location
                    </td>
                    <td className="text-center py-4 px-4 text-slate-900">{college1.location}</td>
                    <td className="text-center py-4 px-4 text-slate-900">{college2.location}</td>
                  </tr>

                  <tr>
                    <td className="py-4 px-4 font-medium text-slate-700 flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-500" />
                      Rating
                    </td>
                    <td className="text-center py-4 px-4 text-slate-900">
                      <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-bold inline-block">
                        {college1.rating}
                      </span>
                    </td>
                    <td className="text-center py-4 px-4 text-slate-900">
                      <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full font-bold inline-block">
                        {college2.rating}
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-4 font-medium text-slate-700 flex items-center gap-2">
                      <IndianRupee className="w-4 h-4 text-blue-600" />
                      Annual Fees
                    </td>
                    <td className="text-center py-4 px-4 text-slate-900 font-medium">
                      ₹{(college1.fees / 100000).toFixed(1)}L
                    </td>
                    <td className="text-center py-4 px-4 text-slate-900 font-medium">
                      ₹{(college2.fees / 100000).toFixed(1)}L
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-4 font-medium text-slate-700 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      Average Package
                    </td>
                    <td className="text-center py-4 px-4 text-slate-900 font-medium">
                      ₹{college1.avgPackage} LPA
                    </td>
                    <td className="text-center py-4 px-4 text-slate-900 font-medium">
                      ₹{college2.avgPackage} LPA
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-4 font-medium text-slate-700 flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-600" />
                      Placement Rate
                    </td>
                    <td className="text-center py-4 px-4 text-slate-900 font-medium">
                      {college1.placement}%
                    </td>
                    <td className="text-center py-4 px-4 text-slate-900 font-medium">
                      {college2.placement}%
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/college/${college1.id}`} className="flex-1">
                <Button variant="outline" className="w-full">
                  View {college1.name}
                </Button>
              </Link>
              <Link href={`/college/${college2.id}`} className="flex-1">
                <Button variant="outline" className="w-full">
                  View {college2.name}
                </Button>
              </Link>
              <Link href="/predictor" className="flex-1">
                <Button className="w-full">
                  Check Your Eligibility
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <Card className="p-12 text-center">
            <p className="text-slate-600 text-lg">
              Select two colleges above to see a detailed comparison
            </p>
          </Card>
        )}
      </div>
    </main>
  );
}
