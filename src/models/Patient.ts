// Models
import Address from "./Address";

export default class Patient {
  constructor(
    public id: string = "",
    public fullName: string = "",
    public mothersName: string = "",
    public birthDate: number = 0,
    public registrationId: string = "",
    public healthcareId: string = "",
    public address: Address = new Address(),
  ) {}
}