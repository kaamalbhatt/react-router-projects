import { useParams, useRouteLoaderData } from "react-router-dom";
import EventItem from "./EventItem";

const EventDetails = () => {
  const data = useRouteLoaderData("event-details");

  return (
    <>
      <EventItem event={data} />
    </>
  );
};

export default EventDetails;

export async function loader({ request, params }) {
  const id = params.id;

  const responseData = await fetch(`http://localhost:8080/events/${id}`);
  if (!responseData.ok) {
  } else {
    const resData = await responseData.json();
    return resData;
  }
}
