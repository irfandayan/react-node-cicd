import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    // const response = axios.get('http://localhost:5000/names');
    // Use proxy for http://localhost:5000
    const response = await axios.get("/names");
    setUsername(response.data);

    console.log(response);
  };

  return (
    <>
      <h1>My WebSite</h1>
      <h3>My name is {username}</h3>
    </>
  );
}

export default App;
