import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private taskRepo: Repository<Task>) { }
  create(data: CreateTaskDto) {
    const newTask = this.taskRepo.create(data);
    return this.taskRepo.save(newTask);
  }

  findAll() {
    return this.taskRepo.find();
  }

  async findOne(id: number) {
    const task = await this.taskRepo.findOne({ where: { id: id } });
    if (!task) {
      throw new NotFoundException("Not task found");

    }
    return task;
  }

  async update(id: number, changes: UpdateTaskDto) {
    const task = await this.findOne(id);
    this.taskRepo.merge(task, changes);
    return this.taskRepo.save(task);
  }

  remove(id: number) {
    this.taskRepo.delete(id);
  }
}
