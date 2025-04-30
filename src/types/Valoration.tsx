class Valoration {
  courseId: number;

  userId: string;

  coment: string;

  rating: number;

  constructor(
    courseId: number,
    userId: string,
    coment: string,
    rating: number,
  ) {
    this.courseId = courseId;
    this.userId = userId;
    this.coment = coment;
    this.rating = rating;
  }
}

export default Valoration;
