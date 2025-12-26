import { ApiProperty } from '@nestjs/swagger';

export class Task {
  @ApiProperty({ description: 'The unique identifier of the task' })
  id: string;

  @ApiProperty({ description: 'The title of the task' })
  title: string;

  @ApiProperty({ description: 'The description of the task', required: false })
  description?: string;

  @ApiProperty({ description: 'The image URL for the task', required: false })
  image?: string;

  @ApiProperty({ description: 'The status of the task' })
  status: string;

  @ApiProperty({ description: 'Whether the task is completed' })
  completed: boolean;

  @ApiProperty({ description: 'The date of the task', required: false })
  date?: string;

  @ApiProperty({
    description: 'The progress percentage of the task',
    required: false,
  })
  progress?: number;

  @ApiProperty({
    description: 'The emoji associated with the task',
    required: false,
  })
  emoji?: string;

  @ApiProperty({ description: 'The profile image URL', required: false })
  profileImage?: string;
}
