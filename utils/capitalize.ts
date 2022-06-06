export const capitalize = (str: string): string => {
  if (str) {
    const capitalized = str.trim();
    return (
      capitalized.charAt(0).toUpperCase() + capitalized.slice(1).toLowerCase()
    );
  }
  return '';
};
