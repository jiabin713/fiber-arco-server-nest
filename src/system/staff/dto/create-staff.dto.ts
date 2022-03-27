import { ApiProperty } from '@nestjs/swagger';

export class CreateStaffDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  mobile: string;

  @ApiProperty({ required: false })
  avatar: string;
  @ApiProperty({ required: false })
  gender: string;
  @ApiProperty({ required: false })
  status: string;
  @ApiProperty({ required: false })
  sort: number;
  @ApiProperty({ required: false })
  remark: string;
}
