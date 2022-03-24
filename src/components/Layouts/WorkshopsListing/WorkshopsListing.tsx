import { WorkshopFilter, WorkshopsMain } from "../../Elements";

import "./WorkshopsListing.scss";

export const WorkshopsListing = () => {
  return (
    <main className="listing">
      <WorkshopFilter />
      <WorkshopsMain />
    </main>
  );
};
