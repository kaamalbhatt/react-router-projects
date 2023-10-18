import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  let message = "";
  if (error.status === 404) {
    message = "Page NOt find";
  }
  if (error.status === 200) {
    message = error.data.message;
  }
  if (error.status === 500) {
    message = error.data.message;
  }
  return (
    <div>
      <main>
        <h1>This IS Error Page</h1>
        <h2>{message}</h2>
      </main>
    </div>
  );
};

export default Error;
