export const isNumber = (number: string): boolean => {
  return number === '' || /^\d+$/.test(number);
};

export const isEmptyString = (str: string): boolean => {
  return str === '';
};
