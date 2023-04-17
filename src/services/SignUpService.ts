import BaseService from './BaseService'

// Model
import SignUpModel from '@/models/SignUp'

export default class SignUpService extends BaseService {
  constructor() {
    super()
    this.endpoint = '/users/register'
  }

  public async signUp(signUp: SignUpModel): Promise<unknown> {
    const response = await fetch(`${this.connection}/${this.endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(signUp)
    })

    const result = response.json();
    return result;
  }
}
