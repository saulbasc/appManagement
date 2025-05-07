class Course {
  id: number;

  title: string;

  description: string;

  category: string;

  duration: number;

  instructor: string;

  startDate: Date;

  constructor(
    id: number,
    title?: string,
    description?: string,
    category?: string,
    duration?: number,
    instructor?: string,
    startDate?: Date,
  ) {
    this.id = id;
    this.title = title ?? '';
    this.description = description ?? '';
    this.category = category ?? '';
    this.duration = duration ?? 0;
    this.instructor = instructor ?? '';
    this.startDate = startDate ? new Date(startDate) : new Date();
  }
}

export default Course;
