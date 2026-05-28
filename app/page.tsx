import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { GraduationCap, BookOpen, TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";
import CollegeList from "@/components/CollegeList";

export const dynamic = "force-dynamic";

export default async function Home() {
  const colleges = await prisma.college.findMany();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              Your journey to the perfect college starts here
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Discover Your
              <span className="block text-blue-600">Perfect College</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Explore top colleges, compare features, and get personalized recommendations based on your JEE rank. Make informed decisions about your future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="#colleges">
                <Button variant="primary" size="lg">
                  Explore Colleges
                </Button>
              </Link>
              <Link href="/predictor">
                <Button variant="outline" size="lg">
                  Predict Your Rank
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-slate-200">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900">{colleges.length}+</p>
                <p className="text-sm text-slate-600 mt-1">Colleges</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900">3</p>
                <p className="text-sm text-slate-600 mt-1">States</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900">100%</p>
                <p className="text-sm text-slate-600 mt-1">Real Data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Explore & Search</h3>
              <p className="text-slate-600">Browse detailed information about colleges including fees, ratings, and placement data.</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Compare Options</h3>
              <p className="text-slate-600">Compare two colleges side-by-side to make better informed decisions about your choice.</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Get Predictions</h3>
              <p className="text-slate-600">Enter your JEE rank to see which colleges you&apos;re eligible for based on cutoff data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* College Listing Section */}
      <section id="colleges" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Featured Colleges
          </h2>
          <p className="text-slate-600 mb-8">
            Discover colleges that match your preferences
          </p>

          <CollegeList colleges={colleges} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to find your perfect college?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Use our JEE rank predictor to get personalized college recommendations.
          </p>
          <Link href="/predictor">
            <Button variant="primary" size="lg" className="bg-white !text-blue-600 hover:bg-slate-100">
              Predict Your Rank
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
