/**
 * Formats the given valid phone number to the International Phone Number format.
 */
export const phoneNumberFormat = (unformatted: number): string | number => {
  const str = unformatted.toString();
  if (str.length === 10) {
    const areaCode = str.slice(0, 3);
    const firstThree = str.slice(3, 6);
    const lastFour = str.slice(6);
    return `+1-${areaCode}-${firstThree}-${lastFour}`;
  }
  return unformatted;
};
