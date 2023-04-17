export function keepAccessToken(token: string): void {
  localStorage.setItem("AccessToken", JSON.stringify(token));
}

export function clearAccessToken(): void {
  localStorage.removeItem("AccessToken");
}

export function checkForToken(): boolean {
  const token = localStorage.getItem("AccessToken");

  return Boolean(token);
}
