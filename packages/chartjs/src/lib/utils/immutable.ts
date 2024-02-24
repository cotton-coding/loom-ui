export function replaceAt<T>(index: number, data: T, arr: T[]) {
  return [
    ...arr.slice(0, index),
    data,
    ...arr.slice(index + 1)
  ];
}
