export const formatPhoneNumber = (phoneNumber: number): string => {
  const phoneString = phoneNumber.toString();
  if (phoneString.length !== 10) {
    throw new Error("Phone number must be 10 digits");
  }
  const areaCode = phoneString.slice(0, 3);
  const centralOfficeCode = phoneString.slice(3, 6);
  const lineNumber = phoneString.slice(6, 10);
  return `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;
};

export const calcYearsOfExperience = (num: number): string => {
  const result = num - 1;

  return result > 2 ? `${result}+ years` : "";
};
