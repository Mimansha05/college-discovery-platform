import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { MapPin, Star, IndianRupee, TrendingUp, BookOpen, Award, ArrowLeft } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const dynamic = "force-dynamic";

export default async function CollegePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const college = await prisma.college.findUnique({
    where: {
      id,
    },
  });

  if (!college) {
    return (
      <main className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">
              College not found
            </h1>
            <p className="text-slate-600 mb-8">
              The college you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pb-12">
      {/* Header Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Colleges
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              {college.name}
            </h1>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <Star className="w-5 h-5 fill-white" />
              <span className="font-bold text-lg">{college.rating}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-blue-100">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">{college.location}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <IndianRupee className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <p className="text-sm font-medium text-slate-600 mb-1">Annual Fees</p>
            <p className="text-3xl font-bold text-slate-900">
              ₹{(college.fees / 100000).toFixed(1)}L
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <p className="text-sm font-medium text-slate-600 mb-1">Average Package</p>
            <p className="text-3xl font-bold text-slate-900">
              ₹{college.avgPackage} LPA
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-amber-600" />
              </div>
            </div>
            <p className="text-sm font-medium text-slate-600 mb-1">Placement Rate</p>
            <p className="text-3xl font-bold text-slate-900">
              {college.placement}%
            </p>
          </Card>
        </div>

        {/* About Section */}
        <Card className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            About
          </h2>
          <p className="text-slate-700 leading-relaxed text-lg">
            {college.description}
          </p>
        </Card>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Facts</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Location</span>
                <span className="font-medium text-slate-900">{college.location}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Rating</span>
                <span className="font-medium text-slate-900">{college.rating}/5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Annual Fees</span>
                <span className="font-medium text-slate-900">₹{(college.fees / 100000).toFixed(1)}L</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Avg Package</span>
                <span className="font-medium text-slate-900">₹{college.avgPackage} LPA</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Placement Rate</span>
                <span className="font-medium text-slate-900">{college.placement}%</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Next Steps</h3>
            <p className="text-slate-600 mb-6">
              Compare this college with others or check your eligibility based on your JEE rank.
            </p>
            <div className="space-y-3">
              <Link href="/compare" className="block">
                <Button variant="outline" className="w-full">
                  Compare Colleges
                </Button>
              </Link>
              <Link href="/predictor" className="block">
                <Button className="w-full">
                  Check Eligibility
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
