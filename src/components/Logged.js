import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt from "jsonwebtoken";

const Logged = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // const auth = jwt.decode(token);
      // console.log(auth);
      const auth = jwt.decode(token);
      console.log(auth);
      if (!auth) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        setUser(auth);
      }
    } else {
      alert("Please login");
      navigate("/login");
    }
  }, []);
  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  console.log(user);
  return (
    <div className=" bg-white shadow-lg p-4 rounded ">
      <p className=" text-2xl text-center capitalize ">
        welcome<span className=" font-bold "> {user.name}</span>
      </p>
      <button
        className=" bg-sky-700 hover:bg-sky-800 text-sm font-bold uppercase px-4 py-2 rounded mt-4 text-white "
        onClick={logOut}
      >
        {" "}
        logout{" "}
      </button>{" "}
    </div>
  );
};

export default Logged;
