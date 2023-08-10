import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/createTaskDto';
import { UpdateTaskDto } from './dto/updateTaskDto';
import { TaskFilterDto } from './dto/taskFilterDto';
import { AuthGuard } from '@nestjs/passport';
import { ApiExceptionFilter } from 'src/common/api-exception.filter';

@Controller('tasks')
@UseFilters(ApiExceptionFilter)
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    // throw new BadRequestException('not found task');
    return this.tasksService.getTaskById(+id);
  }

  @Post('create')
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }

  @Put('update/:id')
  updateTask(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.updateTask(+id, updateTaskDto);
  }

  @Get('delete/:id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTask(+id);
  }

  @Get()
  getFilterTask(@Query() filterDto: TaskFilterDto) {
    if (Object.keys(filterDto).length) {
      return this.tasksService.getFilterTask(filterDto);
    } else {
      return this.tasksService.getAllTask();
    }
  }
}
