export const PICKED_ELEMENT = "PICKED_ELEMENT";

export function pickEl(element) {
  return {
    type: PICKED_ELEMENT,
    payload: element
  };
}
