import Env from "@/utils/env";

export default class BaseService {
  public connection: string;
  public endpoint?: string;

  constructor(url = `${Env.baseUrl}`) {
    this.connection = url;
  }
}
