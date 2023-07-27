import { StatusType } from 'src/common/statusType.enum';

export class CreateTaskDto {
  title: string;
  description: string;
  status: StatusType;
}
