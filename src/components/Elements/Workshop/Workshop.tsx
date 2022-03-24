import { useEffect, useState } from "react";
import axios from "axios";

import { Date, Spinner } from "../../Commons";

import { WorkshopCTACard } from "../";

import "./Workshop.scss";

interface IProps {
  workshop: IWorkshopsWithQtyCat;
}

export const Workshop = ({ workshop }: IProps) => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    const { userId } = workshop;
    async function fetchUser(id: number) {
      const response = await axios.get(
        `https://fake-server-tinel.herokuapp.com/users/${id}`
      );
      setUser(response.data);
      return response.data;
    }
    fetchUser(userId);
  }, [workshop]);

  return (
    <div className="workshop">
      {!!!workshop && <Spinner isLoading={true} />}
      <div className="workshop__image-container">
        <img className="workshop__image" src={workshop?.imageUrl} alt="" />
        {workshop?.category && (
          <workshop.CategoryImage className="workshop__category-image" />
        )}
      </div>
      <div className="workshop__content">
        <div className="workshop__term">
          {workshop?.category && (
            <workshop.CategoryImage className="workshop__category-desktop" />
          )}
          <Date additionalClass="workshop__term-date" date={workshop?.date} />
        </div>
        <h1 className="workshop__title">{workshop?.title}</h1>
        <p className="workshop__user">
          WITH <span className="workshop__user-name">{user?.name}</span>
        </p>
        <p className="workshop__description">{workshop?.desc}</p>
        <WorkshopCTACard workshop={workshop} />
      </div>
    </div>
  );
};
