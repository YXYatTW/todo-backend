import { IsString, IsBoolean, IsNumber, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiPropertyOptional({ description: 'The title of the task' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({ description: 'The description of the task' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'The status of the task' })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional({ description: 'Whether the task is completed' })
  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @ApiPropertyOptional({
    description: 'The progress percentage of the task',
    minimum: 0,
    maximum: 100,
  })
  @IsOptional()
  @IsNumber()
  progress?: number;
}
