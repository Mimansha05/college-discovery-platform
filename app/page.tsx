import { prisma } from "@/lib/prisma";

export default async function Home() {
  const colleges = await prisma.college.findMany();

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-8">
        College Discovery Platform
      </h1>

      <div className="grid gap-4">
        {colleges.map((college) => (
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
    </main>
  );
}