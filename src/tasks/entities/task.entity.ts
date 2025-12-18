export class Task {
  id: string;
  title: string;
  description?: string;
  image?: string;
  status: string;
  completed: boolean;
  date?: string;
  progress?: number;
  emoji?: string;
  profileImage?: string;
}
