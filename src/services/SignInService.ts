import BaseService from './BaseService'

// Model
import SignInModel from '@/models/SignIn'

export default class SignInService extends BaseService {
  constructor() {
    super()
    this.endpoint = '/users/signin'
  }

  public async signIn(signIn: SignInModel): Promise<unknown> {
    const response = await fetch(`${this.connection}/${this.endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(signIn)
    })

    const result = response.json();
    return result;
  }
}
