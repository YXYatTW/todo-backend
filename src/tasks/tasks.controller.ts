import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  // GET http://localhost:3001/tasks
  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  // PATCH http://localhost:3001/tasks/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }
}
