class ValorationComment {
  userName: string;

  comment: string;

  rating: number;

  constructor(
    userName: string,
    comment: string,
    rating: number,
  ) {
    this.userName = userName;
    this.comment = comment;
    this.rating = rating;
  }
}

export default ValorationComment;
