import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form className=" shadow-lg rounded bg-white text-neutral-900 p-4 space-y-2 ">
      <p className=" text-center font-bold text-2xl text-sky-700">Login</p>
      <hr />

      <input
        type="email"
        placeholder="Email"
        name="email"
        className=" border-[1px] border-neutral-400 py-2 px-2 outline-none focus:border-sky-700 rounded w-[230px] "
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        name="password"
        className=" border-[1px] border-neutral-400 py-2 px-2 outline-none focus:border-sky-700 rounded w-[230px] "
      />
      <br />
      <div className=" flex justify-center gap-2 ">
        <button
          type="submit"
          className=" bg-sky-700 text-white text-sm font-bold uppercase px-4 py-3 rounded hover:bg-sky-800 "
        >
          login
        </button>
        <Link to="/register">
          <button className=" bg-amber-700 text-white text-sm font-bold uppercase px-4 py-3 rounded hover:bg-amber-800 ">
            register
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Login;
