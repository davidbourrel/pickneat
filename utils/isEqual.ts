/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const areArraysEqual = (a: any[], b: any[]): boolean => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (!isEqual(a[i], b[i])) return false;
  }
  return true;
};

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const areObjectsEqual = (a: any, b: any): boolean => {
  if (Object.keys(a).length !== Object.keys(b).length) return false;
  for (const key in a) {
    if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
    if (!isEqual(a[key], b[key])) return false;
  }
  return true;
};

/* eslint-disable-next-line @typescript-eslint/ban-types */
const areFunctionsEqual = (a: Function, b: Function): boolean =>
  a.toString() === b.toString();

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const arePrimativesEqual = (a: any, b: any): boolean => a === b;

const getType = (obj: string): string =>
  Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

/* eslint-disable-next-line */
const isEqual = (a: any, b: any): boolean => {
  const type = getType(a);
  if (type !== getType(b)) return false;
  if (type === 'array') return areArraysEqual(a, b);
  if (type === 'object') return areObjectsEqual(a, b);
  if (type === 'function') return areFunctionsEqual(a, b);
  return arePrimativesEqual(a, b);
};

export default isEqual;
