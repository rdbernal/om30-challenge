export default interface SignUpResponse {
  accessToken: string,
  user: {
    confirmPassword: string,
    email: string;
    id: number
  }
}