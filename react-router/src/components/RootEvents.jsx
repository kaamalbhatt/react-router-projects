import { Outlet } from "react-router-dom";
import EventsNavigation from "./EventsNavigation";

const RootEvents = () => {
  return (
    <div>
      <EventsNavigation />
      <Outlet />
    </div>
  );
};

export default RootEvents;
