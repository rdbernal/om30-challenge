interface ViaCepResponse {
  cep: string;
  logradouro: string;
  bairro: string;
  uf: string;
  localidade: string;
}

export default class Address {
  constructor(
    public zipCode: string = "",
    public street: string = "",
    public number: string = "",
    public neighborhood: string = "",
    public complement: string = "",
    public state: string = "",
    public city: string = ""
  ) {}

  public static serializeViaCepResponse(response: unknown): Address {
    const data = response as ViaCepResponse;

    return new Address(data.cep, data.logradouro, "", data.bairro, "", data.uf, data.localidade);
  }
}
