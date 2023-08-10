import { StatusType } from 'src/common/statusType.enum';
import { IsString } from 'class-validator';
export class CreateTaskDto {
  @IsString()
  title: string;
  description: string;
  status: StatusType;
}
