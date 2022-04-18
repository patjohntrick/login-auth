import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Logged from "./components/Logged";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const [user, setUser] = useState([]);
  const baseUri = "http://localhost:5000";

  const fetchApi = () => {
    axios
      .get(`${baseUri}`)
      .then((data) => setUser(data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchApi();
  }, []);
  console.log(user);
  return (
    <div className=" w-full h-screen flex justify-center items-center bg-sky-700 font-mono ">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={<Register baseUri={baseUri} user={user} setUser={setUser} />}
        />
        <Route path="/user" element={<Logged />} />
      </Routes>
    </div>
  );
};

export default App;
