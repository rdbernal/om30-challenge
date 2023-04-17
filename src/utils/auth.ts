export function keepAccessToken(token: string): void {
  localStorage.setItem("Bearer", JSON.stringify(token));
}

export function clearAccessToken(): void {
  localStorage.removeItem("Bearer");
}

export function checkForToken(): boolean {
  const token = localStorage.getItem("Bearer");

  return Boolean(token);
}
