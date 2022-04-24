import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ baseUri, user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const logUser = {
      email,
      password,
    };
    // await axios
    //   .post(`${baseUri}/login`, logUser)
    //   .then((res) => {
    //     // console.log(res.data.user);
    //     if (res.data.user) {
    //       localStorage.setItem("token", res.data.user);
    //       alert("Login Successfully");
    //       navigate("/user");
    //     } else {
    //       alert("Wrong Credentials");
    //     }
    //   })
    //   .catch((err) => console.log(err));
    const data = await axios.post(`${baseUri}/login`, logUser);
    // console.log(data.data.user);
    if (data.data.user) {
      localStorage.setItem("token", data.data.user);
      alert("Login Successfully");
      navigate(`/user`);
    } else {
      alert("Wrong Credentials");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" shadow-lg rounded bg-white text-neutral-900 p-4 space-y-2 "
      >
        <p className=" text-center font-bold text-2xl text-sky-700">Login</p>
        <hr />

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className=" border-[1px] border-neutral-400 py-2 px-2 outline-none focus:border-sky-700 rounded w-[230px] "
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
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
    </>
  );
};

export default Login;
