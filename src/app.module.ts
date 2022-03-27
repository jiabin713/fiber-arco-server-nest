import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { SystemModule } from './system/system.module';

@Module({
  imports: [SystemModule, PrismaModule],
})
export class AppModule {}
