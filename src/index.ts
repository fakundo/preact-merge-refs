import type * as Preact from "preact";

export function mergeRefs<T = any>(
  refs: Array<Preact.Ref<T>>
): Preact.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        (ref as Preact.RefObject<T | null>).current = value;
      }
    });
  };
}
