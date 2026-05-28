import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
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
      },
      {
        name: "NIT Surathkal",
        location: "Karnataka",
        fees: 145000,
        rating: 4.7,
        description: "Known for strong placements",
        avgPackage: 11.8,
        placement: 93,
      },
      {
        name: "NIT Warangal",
        location: "Telangana",
        fees: 140000,
        rating: 4.6,
        description: "Premier engineering institute",
        avgPackage: 10.5,
        placement: 91,
      },
      {
        name: "IIIT Hyderabad",
        location: "Telangana",
        fees: 300000,
        rating: 4.9,
        description: "Excellent research opportunities",
        avgPackage: 20,
        placement: 98,
      },
      {
        name: "RVCE",
        location: "Karnataka",
        fees: 250000,
        rating: 4.5,
        description: "Top private engineering college",
        avgPackage: 9,
        placement: 88,
      }
    ],
  });

  console.log("Colleges seeded successfully");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });