import { StatusType } from 'src/common/statusType.enum';

export class TaskFilterDto {
  status: StatusType;
  search: string;
}
