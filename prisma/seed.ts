import { PrismaClient } from '@prisma/client';
import { staffs } from './seed/staff';

const prisma = new PrismaClient();

const main = async () => {
  for (const staff of staffs) {
    await prisma.staff.create({
      data: { ...staff, createdBy: 'admin', updatedBy: 'admin' },
    });
  }
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
