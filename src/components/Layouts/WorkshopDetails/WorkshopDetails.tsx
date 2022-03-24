import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { Workshop, Checkout } from "../../Elements";

import {
  useStoreSelector,
  useScrollTop,
  useSuggestedWorkshops,
} from "../../../hooks";

import { Card } from "../../Commons";

import { WorkshopContext } from "../../App/App";

import "./WorkshopDetails.scss";

export const WorkshopDetails = () => {
  const navigate = useNavigate();

  const { checkout } = useContext(WorkshopContext);

  const [workshop, setWorkshop] = useState<IWorkshopsWithQtyCat>();

  const { id } = useParams();

  const {
    workshops: { workshopsList },
  } = useStoreSelector();

  const suggestedWorkshops = useSuggestedWorkshops(workshopsList, workshop, id);

  useEffect(() => {
    const ws = workshopsList.find((w) => w.id === Number(id));
    if (ws) {
      setWorkshop(ws);
    }
  }, [id, workshopsList]);

  useScrollTop(id);

  const handleBack = () => navigate("/");

  return (
    <main className="details">
      {checkout && <Checkout />}
      <div className="details__workshop">
        <div className="details__back" onClick={handleBack}>
          <AiOutlineArrowLeft />
          <p className="details__back-text">Natrag</p>
        </div>
        {workshop && <Workshop workshop={workshop} />}
      </div>
      {!!suggestedWorkshops?.length && (
        <div className="details__suggestion">
          <h3 className="details__suggestion-title">Similar Workshops</h3>
          <div className="details__suggestion-items">
            {suggestedWorkshops?.map((ws) => (
              <Card key={ws.id} ws={ws} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
};
