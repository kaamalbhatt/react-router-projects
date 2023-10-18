import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Rootlayout from "./components/Rootlayout";
import Event from "./components/Event";
import Error from "./components/Error";
import RootEvents from "./components/RootEvents";
import { loader as eventsLoader } from "./components/Event";
import { loader as eventsDetailsLoader } from "./components/EventDetails";
import EventDetails from "./components/EventDetails";
import EditEvent from "./components/EditEvent";
import NewEvent, { action as newEventAction } from "./components/NewEvent";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "event",
          element: <RootEvents />,

          children: [
            { index: true, element: <Event />, loader: eventsLoader },
            {
              path: ":id",
              id: "event-details",
              loader: eventsDetailsLoader,
              children: [
                {
                  index: true,
                  element: <EventDetails />,
                },
                {
                  path: "edit",
                  element: <EditEvent />,
                },
              ],
            },
            { path: "newevent", element: <NewEvent />, action: newEventAction },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
