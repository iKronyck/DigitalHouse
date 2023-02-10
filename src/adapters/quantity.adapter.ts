export const formatQuantityWithDecimals = (quantity: number) => quantity.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const formatQuantityWithoutDecimals = (quantity: number) => quantity.toLocaleString(undefined, {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});