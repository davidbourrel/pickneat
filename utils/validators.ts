const isValidPositiveInt: (str: string) => boolean = (str) =>
  /^[0-9]+$/.test(str) && Number(str) > 0;

export default isValidPositiveInt;
