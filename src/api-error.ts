export class ApiError extends Error {
  public status: number;
  constructor(message: string, stauts: number) {
    super(message);
    this.status = stauts;
  }
}
