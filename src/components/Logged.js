import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
// import jwt from "jsonwebtoken";

const Logged = () => {
  const [user, setUser] = useState();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     // const auth = jwt.decode(token);
  //     // console.log(auth);
  //   } else {
  //     alert("Please login");
  //     // Navigate("/login");
  //   }
  // }, []);
  return (
    <div className=" bg-white shadow-lg p-4 rounded ">
      <p className=" text-2xl text-center capitalize ">
        welcome<span className=" font-bold "> name!!!</span>
      </p>
      <Link to="/login">
        {" "}
        <button className=" bg-sky-700 hover:bg-sky-800 text-sm font-bold uppercase px-4 py-2 rounded mt-4 text-white ">
          {" "}
          logout{" "}
        </button>{" "}
      </Link>
    </div>
  );
};

export default Logged;
