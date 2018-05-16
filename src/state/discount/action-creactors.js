export const DISCOUNT_ENABLED = "DISCOUNT_ENABLED";

export function applyDisc(percentage) {
  return {
    type: DISCOUNT_ENABLED,
    payload: percentage
  };
}
