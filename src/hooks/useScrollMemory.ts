import { useCallback, useEffect } from "react";
import { useEventListener } from "./";

export function useScrollMemory(data: any) {
  const handleScrollMemoized = useCallback(() => {
    const lastScrollY = window.scrollY;
    if (lastScrollY) {
      localStorage.setItem("scrollY", String(lastScrollY));
    }
  }, []);

  useEventListener("scroll", handleScrollMemoized);

  useEffect(() => {
    const yOffset = Number(localStorage.getItem("scrollY"));
    if (yOffset) {
      window.scrollTo(0, yOffset);
    }
  }, [data]);
}
