export default class RequestProgress {
  constructor(
    public loading: boolean = false,
    public success: boolean = false,
    public error: boolean = false,
  ) {}

  public startLoad(): void {
    this.loading = true;
    this.success = false;
    this.error = false;
  } 

  public stopWithSuccess(): void {
    setInterval(() => {
      this.loading = false;
      this.success = true;
      this.error = false;
    }, 1500)
  }

  public stopWithError(): void {
    setInterval(() => {
      this.loading = false;
      this.success = false;
      this.error = true;
    }, 1500)
  }
}