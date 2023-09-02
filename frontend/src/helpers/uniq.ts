
export function randomId(): string {
  return `id_${Math.random().toString(36).substring(2, 10)}`;
}