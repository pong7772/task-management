import { StatusType } from 'src/common/statusType.enum';

export class UpdateTaskDto {
  title: string;

  description: string;

  status: StatusType;
}
