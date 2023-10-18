import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <main>
        <h1> &gt;&gt;&gt;&gt;&gt;&gt;&gt; Hello This IS Home Page</h1>
      </main>
      <button
        onClick={() => {
          navigate("event");
        }}
      >
        Events
      </button>
    </div>
  );
};

export default Home;
