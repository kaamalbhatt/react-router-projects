import React from "react";
import EventForm from "./EventForm";
import { useRouteLoaderData } from "react-router-dom";

const EditEvent = () => {
  const event = useRouteLoaderData("event-details");
  return <EventForm event={event.event} />;
};

export default EditEvent;
