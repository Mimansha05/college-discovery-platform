import { prisma } from "@/lib/prisma";

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
    return <div>College not found</div>;
  }

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-4">
        {college.name}
      </h1>

      <p className="mb-2">
        Location: {college.location}
      </p>

      <p className="mb-2">
        Rating: {college.rating}
      </p>

      <p className="mb-2">
        Fees: ₹{college.fees}
      </p>

      <p className="mb-2">
        Average Package: ₹{college.avgPackage} LPA
      </p>

      <p className="mb-2">
        Placement Rate: {college.placement}%
      </p>

      <p className="mt-4">
        {college.description}
      </p>
    </main>
  );
}