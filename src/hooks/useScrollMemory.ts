import { useEffect } from "react";

export function useScrollMemory(isFetching: boolean, data: any) {
  useEffect(() => {
    function handleScrollYChange() {
      const lastScrollY = window.scrollY;
      if (lastScrollY) {
        localStorage.setItem("scrollY", String(lastScrollY));
      }
    }
    window.addEventListener("scroll", handleScrollYChange, true);
    return () => {
      window.removeEventListener("scroll", handleScrollYChange);
    };
  }, []);
  
  useEffect(() => {
    const yOffset = Number(localStorage.getItem("scrollY"));

    if (yOffset) window.scrollTo(0, yOffset);
  }, [isFetching, data]);
}
