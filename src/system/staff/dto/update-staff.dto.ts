import { ApiProperty, PartialType } from '@nestjs/swagger';

import { CreateStaffDto } from './create-staff.dto';

export class UpdateStaffDto extends PartialType(CreateStaffDto) {
  @ApiProperty()
  id: string;
}
