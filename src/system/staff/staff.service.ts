import * as bcrypt from 'bcrypt';

import { CreateStaffDto } from './dto/create-staff.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateStaffDto } from './dto/update-staff.dto';

@Injectable()
export class StaffService {
  constructor(private readonly prisma: PrismaService) {}

  create(createStaffDto: CreateStaffDto) {
    const password = createStaffDto.password
      ? createStaffDto.password
      : '123456';
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    createStaffDto.password = hash;
    return this.prisma.staff.create({ data: createStaffDto });
  }

  // findAll(params: {
  //   skip?: number;
  //   take?: number;
  //   cursor?: Prisma.StaffWhereUniqueInput;
  //   where?: Prisma.StaffWhereUniqueInput;
  //   orderBy?: Prisma.StaffOrderByWithRelationInput;
  // }) {
  //   const { skip, take, cursor, where, orderBy } = params;
  //   return this.prisma.staff.findMany({
  //     skip,
  //     take,
  //     cursor,
  //     where,
  //     orderBy,
  //   });
  // }
  findAll() {
    return this.prisma.staff.findMany();
  }

  findOne(id: string) {
    return `This action returns a #${id} staff`;
  }

  update(id: string, updateStaffDto: UpdateStaffDto) {
    return this.prisma.staff.update({
      where: { id },
      data: updateStaffDto,
    });
  }

  remove(id: string) {
    return this.prisma.staff.delete({ where: { id } });
  }
}
