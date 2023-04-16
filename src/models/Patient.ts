// Models
import Address from './Address'

interface ShowResponse {
  id: string
  fullName: string
  mothersName: string
  birthDate: number
  registrationId: string
  healthcareId: string
  address: Address
}

export default class Patient {
  constructor(
    public id: string = '',
    public fullName: string = '',
    public mothersName: string = '',
    public birthDate: number = 0,
    public registrationId: string = '',
    public healthcareId: string = '',
    public address: Address = new Address()
  ) {}

  public static listSerializer(response: unknown): Patient[] {
    const data = response as ShowResponse[]

    return data.map((patient) => {
      return new Patient(
        patient.id,
        patient.fullName,
        patient.mothersName,
        patient.birthDate,
        patient.registrationId,
        patient.healthcareId,
        patient.address
          ? new Address(
              patient.address.zipCode,
              patient.address.street,
              patient.address.number,
              patient.address.neighborhood,
              patient.address.complement,
              patient.address.state,
              patient.address.city
            )
          : new Address()
      )
    })
  }

  public static showSerializer(response: unknown): Patient {
    const patient = response as ShowResponse

    return new Patient(
      patient.id,
      patient.fullName,
      patient.mothersName,
      patient.birthDate,
      patient.registrationId,
      patient.healthcareId,
      patient.address
        ? new Address(
            patient.address.zipCode,
            patient.address.street,
            patient.address.number,
            patient.address.neighborhood,
            patient.address.complement,
            patient.address.state,
            patient.address.city
          )
        : new Address()
    )
  }
}
