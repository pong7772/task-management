import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from 'src/entities/task.entity';
import { CreateTaskDto } from './dto/createTaskDto';
import { UpdateTaskDto } from './dto/updateTaskDto';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async getAllTask(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async getTaskById(id: number): Promise<Task> {
    return await this.taskRepository.findOne({ where: { id: id } });
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.taskRepository.create(createTaskDto);
    return await this.taskRepository.save(task);
  }
  async updateTask(id: number, updateTask: UpdateTaskDto) {
    return await this.taskRepository.update(id, updateTask);
  }
}
