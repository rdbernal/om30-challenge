// Models
import PatientModel from '@/models/Patient'
// Services
import BaseService from './BaseService'

export default class PatientService extends BaseService {
  constructor() {
    super()
    this.endpoint = 'patients'
  }

  public async index(filter: string): Promise<unknown> {
    const response = await fetch(`${this.connection}/${this.endpoint}${filter ? `?q=${filter}` : ""}`, {
      method: 'GET'
    }).then((response) => response.json())

    return response
  }

  public async show(id: string): Promise<void> {
   const response = await fetch(`${this.connection}/${this.endpoint}/${id}`, {
      method: 'GET'
    }).then((response) => response.json());

    return response;
  }

  public async store(patient: PatientModel): Promise<void> {
    await fetch(`${this.connection}/${this.endpoint}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(patient)
    })
  }

  public async update(patient: PatientModel): Promise<void> {
    await fetch(`${this.connection}/${this.endpoint}/${patient.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(patient)
    })
  }

  public async delete(id: string): Promise<void> {
    await fetch(`${this.connection}/${this.endpoint}/${id}`, {
      method: 'DELETE'
    })
  }
}
