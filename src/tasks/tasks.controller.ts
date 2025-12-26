import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  // GET http://localhost:3001/tasks
  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, description: 'Return all tasks', type: [Task] })
  findAll() {
    return this.tasksService.findAll();
  }

  // PATCH http://localhost:3001/tasks/:id
  @Patch(':id')
  @ApiOperation({ summary: 'Update a task' })
  @ApiParam({ name: 'id', description: 'The task ID' })
  @ApiResponse({
    status: 200,
    description: 'The task has been successfully updated',
    type: Task,
  })
  @ApiResponse({ status: 404, description: 'Task not found' })
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }
}
