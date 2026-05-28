import { prisma } from "@/lib/prisma";
import CollegeList from "@/components/CollegeList";

export default async function Home() {
  const colleges = await prisma.college.findMany();

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-8">
        College Discovery Platform
      </h1>

      <CollegeList colleges={colleges} />
    </main>
  );
}