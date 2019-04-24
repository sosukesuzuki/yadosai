export function getName(): string | null {
  return localStorage.getItem("name");
}

export function setName(name: string): void {
  localStorage.setItem("name", name);
}

export function getIsRegisterd(): boolean {
  return !!localStorage.getItem("name");
}
