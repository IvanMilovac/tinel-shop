import { useEffect, useMemo, useRef } from "react";
import { CategoriesImage } from "../helper-data";
import {useStoreSelector} from "./useStoreSelector";

export function useFilterData(
  data: any,
  filter: string,
  setFilteredWorkshops: React.Dispatch<
    React.SetStateAction<IWorkshopsWithQtyCat[]>
  >
) {
  const {
    workshops: { workshopsList },
  } = useStoreSelector();

  const setFilteredWorkshopsRef = useRef(setFilteredWorkshops);

  const wsData = useMemo(() => {
    const flattened = data?.pages
      ?.map(({ data }: { data: IWorkshops }) => data)
      .reduce(function (a: any, b: any) {
        return a.concat(b);
      }, []);

    return flattened?.map((item: IWorkshops) => ({
      ...item,
      quantity: 1,
      CategoryImage: CategoriesImage[item.category],
    }));
  }, [data?.pages]);

  useEffect(() => {
    if (filter === "all") return setFilteredWorkshopsRef.current(wsData);

    return setFilteredWorkshopsRef.current(
      wsData?.filter((ws: IWorkshops) => ws.category === filter)
    );
  }, [wsData, filter, workshopsList]);
}
