export const DISCOUNT_ENABLED = "DISCOUNT_ENABLED";

export function applyDisc() {
  return {
    type: DISCOUNT_ENABLED,
    payload: 10
  };
}
