export const DISCOUNT_ENABLED = "DISCOUNT_ENABLED";
export const CALC_TOTAL = "CALC_TOTAL";

export function applyDisc(total) {
  console.log(total);
  let request = total - total * 0.1;

  return {
    type: DISCOUNT_ENABLED,
    payload: request
  };
}

export function calcTotal(total) {
  return {
    type: CALC_TOTAL,
    payload: total
  };
}
