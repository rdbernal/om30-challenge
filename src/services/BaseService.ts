export default class BaseService {
  public connection: string;
  public endpoint?: string; 

  constructor(url = "http://localhost:3000") {
    this.connection = url;
  }
}