import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository'; // 引入仓库
import { TaskMapper } from './mappers/task.mapper'; // 引入转换器
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  findAll(): Task[] {
    // 1.  (Repository/JavaMapper)
    const rawTasks = this.tasksRepository.findAll();

    // 2.  (Mapper/Converter)
    return rawTasks.map((task) => TaskMapper.toDomain(task));
  }

  update(id: string, updateTaskDto: UpdateTaskDto): Task {
    const updatedTask = this.tasksRepository.update(id, updateTaskDto);

    return TaskMapper.toDomain(updatedTask);
  }
}
