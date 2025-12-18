import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksRepository {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'This is a description of task 1',
      status: 'TODO',
      completed: false,
      date: '2024-07-01',
      progress: 45,
      emoji: '😊',
      profileImage: '/profile01.png',
    },
    {
      id: '2',
      title: 'Task 2',
      description: 'This is a description of task 2',
      image: '/fuji.png',
      status: 'DONE',
      completed: true,
      date: '2024-07-05',
      progress: 95,
      emoji: '😭',
      profileImage: '/profile02.png',
    },
    {
      id: '3',
      title: 'Task 3',
      description: 'This is a description of task 3',
      status: 'INPROGRESS',
      completed: false,
      date: '2024-07-01',
      progress: 45,
      emoji: '😊',
      profileImage: '/profile01.png',
    },
    {
      id: '4',
      title: 'Task 4',
      description: 'This is a description of task 4',
      status: 'TODO',
      completed: false,
      date: '2024-07-01',
      progress: 45,
      emoji: '😊',
      profileImage: '/profile01.png',
    },
  ];

  findAll(): Task[] {
    return this.tasks;
  }

  update(id: string, updateTaskDto: UpdateTaskDto): Task {
    const taskIndex = this.tasks.findIndex((t) => t.id === id);

    if (taskIndex === -1) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    const updatedTask = {
      ...this.tasks[taskIndex],
      ...updateTaskDto,
    };

    this.tasks[taskIndex] = updatedTask;
    return updatedTask;
  }
}
