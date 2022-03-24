import { useEffect } from "react";

export function useScrollTop(value?: any) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [value]);
}
