import { useState, useContext } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import axios from "axios";
import { ImSpinner3 } from "react-icons/im";

import { Spinner, Card } from "../../Commons";
import { Checkout } from "../../Elements";

import { WorkshopContext } from "../../App/App";

import {
  useStoreSelector,
  useStoreDispatch,
  useScrollMemory,
  useFilterData,
} from "../../../hooks";

import { delay } from "../../../utils";

import { CategoriesImage } from "../../../helper-data";

import "./WorkshopsMain.scss";

const RESULT_PER_PAGE = 9;
const FETCH_DELAY = 350;

export const WorkshopsMain = () => {
  const [filteredWorkshops, setFilteredWorkshops] = useState<
    IWorkshopsWithQtyCat[]
  >([]);

  const { checkout } = useContext(WorkshopContext);

  const {
    workshops: { filter },
  } = useStoreSelector();

  const { saveWorkshops } = useStoreDispatch();

  const fetchPageData = async ({ pageParam = 1 }) => {
    await delay(FETCH_DELAY);

    const response = await axios.get(
      `https://fake-server-tinel.herokuapp.com/workshops?_page=${pageParam}&_limit=${RESULT_PER_PAGE}`
    );

    return response;
  };

  const fetchAllData = async () => {
    const response = await axios.get(
      `https://fake-server-tinel.herokuapp.com/workshops`
    );
    saveWorkshops(
      response.data?.map((item: IWorkshops) => ({
        ...item,
        quantity: 1,
        CategoryImage: CategoriesImage[item.category],
      }))
    );
    return response;
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("pageWorkshops", fetchPageData, {
    staleTime: 3600,
    cacheTime: 3600,
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length >= 2) return undefined;
      return pages.length + 1;
    },
  });

  useQuery("allWorkshops", fetchAllData);

  useFilterData(data, filter, setFilteredWorkshops);

  useScrollMemory(isFetching, data);

  const handleNextPage = () => fetchNextPage();

  return (
    <section className="list">
      <h2 className="list__title">Workshops</h2>
      <p className="list__count">
        Displayed:{"  "}
        <span className="list__count-number">
          {filteredWorkshops?.length || 0}
        </span>
      </p>
      <div className="list__status">
        {status === "loading" && <Spinner isLoading={isFetching} />}
        {error && (
          <p className="list__status-error">
            {error instanceof Error ? error?.message : "Error occured"}. Try
            again later.
          </p>
        )}
      </div>
      {checkout && <Checkout />}
      {!error && (
        <>
          <div className="list__items">
            {filteredWorkshops?.map((ws: IWorkshopsWithQtyCat) => {
              const { id } = ws;
              return <Card key={id} ws={ws} />;
            })}
          </div>
          <div className="list__loadmore">
            {hasNextPage && (
              <button
                className="list__loadmore-button"
                onClick={handleNextPage}
                disabled={!hasNextPage || isFetchingNextPage}
              >
                {isFetchingNextPage ? (
                  <ImSpinner3 className="list__loadmore-loader" />
                ) : (
                  <p className="list__loadmore-text">Load More</p>
                )}
              </button>
            )}
          </div>
        </>
      )}
    </section>
  );
};
