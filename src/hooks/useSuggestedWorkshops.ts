import { useEffect, useMemo, useState } from "react";

export function useSuggestedWorkshops(
  workshopsList: IWorkshopsWithQtyCat[],
  workshop: IWorkshopsWithQtyCat | undefined,
  id: string | undefined
) {
  const [suggestedWorkshops, setSuggestedWorkshops] =
    useState<IWorkshopsWithQtyCat[]>();

  const allWsFromSameCategory = useMemo(
    () =>
      workshopsList?.filter(
        (ws) => ws.category === workshop?.category && ws.id !== Number(id)
      ),
    [workshop?.category, workshopsList, id]
  );

  useEffect(() => {
    if (allWsFromSameCategory.length > 3) {
      const shuffled = allWsFromSameCategory.sort(() => 0.5 - Math.random());
      setSuggestedWorkshops(shuffled.slice(0, 3));
    }

    setSuggestedWorkshops(allWsFromSameCategory);
  }, [id, workshopsList, allWsFromSameCategory]);

  return suggestedWorkshops;
}
