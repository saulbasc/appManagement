class Valoration {
  courseId: number;

  userId: string;

  comment: string;

  rating: number;

  constructor(
    courseId: number,
    userId: string,
    comment: string,
    rating: number,
  ) {
    this.courseId = courseId;
    this.userId = userId;
    this.comment = comment;
    this.rating = rating;
  }
}

export default Valoration;
