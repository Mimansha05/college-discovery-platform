import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.savedCollege.deleteMany();
  await prisma.college.deleteMany();
  await prisma.user.deleteMany();

  await prisma.college.createMany({
    data: [
      {
        name: "NIT Trichy",
        location: "Tamil Nadu",
        fees: 150000,
        rating: 4.8,
        description: "Top NIT in India",
        avgPackage: 12.5,
        placement: 95,
        minRank: 1,
        maxRank: 5000,
      },
      {
        name: "NIT Surathkal",
        location: "Karnataka",
        fees: 145000,
        rating: 4.7,
        description: "Known for strong placements",
        avgPackage: 11.8,
        placement: 93,
        minRank: 5001,
        maxRank: 8000,
      },
      {
        name: "NIT Warangal",
        location: "Telangana",
        fees: 140000,
        rating: 4.6,
        description: "Premier engineering institute",
        avgPackage: 10.5,
        placement: 91,
        minRank: 8001,
        maxRank: 12000,
      },
      {
        name: "IIIT Hyderabad",
        location: "Telangana",
        fees: 300000,
        rating: 4.9,
        description: "Excellent research opportunities",
        avgPackage: 20,
        placement: 98,
        minRank: 1,
        maxRank: 3000,
      },
      {
        name: "RVCE",
        location: "Karnataka",
        fees: 250000,
        rating: 4.5,
        description: "Top private engineering college",
        avgPackage: 9,
        placement: 88,
        minRank: 12001,
        maxRank: 25000,
      },
    ],
  });

  console.log("Colleges seeded successfully");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });