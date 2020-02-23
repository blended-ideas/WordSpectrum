export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}


export function getRandom(max: number): number {
  return Math.floor(Math.random() * max);
}

