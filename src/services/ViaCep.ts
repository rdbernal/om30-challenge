
export default class ViaCepService {
  constructor(
    public endpoint: string = "https://viacep.com.br",
    public path: string = "ws",
    public format: string = "json",
  ) {}

  public async getAddress(zipCode: string): Promise<unknown> {
    const response = await fetch(`${this.endpoint}/${this.path}/${zipCode}/${this.format}`);
    const result = response.json();
    return result;
  }
}