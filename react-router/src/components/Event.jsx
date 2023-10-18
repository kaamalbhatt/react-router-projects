import { useNavigate, useLoaderData, json, NavLink } from "react-router-dom";

const Event = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      <h1>This Is Event page</h1>
      {data.map((event) => {
        return (
          <NavLink to={event.id} key={event.id}>
            <main className="eventsDiv">
              date : <p>{event.date}</p>
              description : <p>{event.description}</p>
              title : <p>{event.title}</p>
            </main>
          </NavLink>
        );
      })}

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        GoHome
      </button>
    </div>
  );
};

export default Event;

export async function loader() {
  const getData = await fetch("http://localhost:8080/events");
  if (!getData.ok) {
    throw json({ message: "This Page couldn't find" }, { status: 200 });
  } else {
    const convertedData = await getData.json();
    return convertedData.events;
  }
}
