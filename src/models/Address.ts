export default class Address {
  constructor(
    public zipCode: string = '',
    public street: string = '',
    public number: string = '',
    public neighborhood: string = '',
    public complement: string = '',
    public state: string = '',
    public city: string = ''
  ) {}
}
