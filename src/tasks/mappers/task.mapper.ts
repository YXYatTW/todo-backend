import { Task } from '../entities/task.entity';

export class TaskMapper {
  static toDomain(raw: any): Task {
    return {
      id: raw.id,
      title: raw.title,
      description: raw.description,
      image: raw.image,
      status: raw.status,
      completed: raw.completed,
      date: raw.date,
      progress: raw.progress,
      emoji: raw.emoji,
      profileImage: raw.profileImage,
    };
  }
}
