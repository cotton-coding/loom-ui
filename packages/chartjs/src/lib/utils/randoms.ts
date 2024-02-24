export function generateId() {
  return Math.random().toString(36).slice(2, 9);
}

export function generateUniqClassName(postfix: string) {
  return `loom-ui-chartjs-${postfix}-${generateId()}`;
}