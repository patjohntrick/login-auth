import React from "react";
import { Link } from "react-router-dom";

const Logged = () => {
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
