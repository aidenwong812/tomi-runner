export const formatAddress = (address: string) => {
  // Extract the first 4 and last 6 characters
  const firstPart = address.slice(0, 7);
  const lastPart = address.slice(-3);

  // Return the formatted address
  return `${firstPart}...${lastPart}`;
}