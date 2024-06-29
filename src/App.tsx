import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/todos")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return <>{JSON.stringify(data)}</>;
};

export default App;
