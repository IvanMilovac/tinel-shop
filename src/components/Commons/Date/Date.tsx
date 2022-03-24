import classnames from "classnames";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCalendar4Event } from "react-icons/bs";

import { getDateAndTime } from "../../../utils";

import "./Date.scss";

interface IProps {
  date: string;
  additionalClass?: string;
}

export const Date = ({ date, additionalClass }: IProps) => {
  return (
    <div className={classnames("term", additionalClass)}>
      <div className="term-date">
        <BsCalendar4Event />
        <p>{getDateAndTime(date)?.wsDate}</p>
      </div>
      <div className="term-time">
        <AiOutlineClockCircle />
        <p>{getDateAndTime(date)?.wsTime} h</p>
      </div>
    </div>
  );
};
