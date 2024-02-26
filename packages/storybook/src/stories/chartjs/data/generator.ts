export function generateLabels(length: number): string[] {
  return Array.from({ length }, (_, i) => `Label ${i}`);
}

export function generateFloatNumberArray(length: number, min: number, max: number): number[] {
  return Array.from({ length }, () => Math.random() * (max - min) + min);
}