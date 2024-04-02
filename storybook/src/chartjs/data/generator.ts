export function generateLabels(length: number): string[] {
  return Array.from({ length }, (_, i) => `Label ${i}`);
}

export function generateFloatNumberArray(length: number, min: number, max: number): number[] {
  return Array.from({ length }, () => Math.random() * (max - min) + min);
}

export function generateBackgroundColors(length: number): string[] {
  return Array.from({ length }, () => `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`);
}