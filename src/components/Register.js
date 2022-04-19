import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = ({ baseUri, user, setUser }) => {
  const [status, setStatus] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    // const post = await axios.post(`${baseUri}/register`, newUser);
    // const res = await post;
    // console.log(res);

    await axios
      .post(`${baseUri}/register`, newUser)
      .then((res) => {
        console.log(res);
        setUser([...user, res.data]);
        alert("Register successfully");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.message);
        if (err) {
          setStatus(409);
        } else {
          setStatus("");
        }
        setEmail("");
      });
  };

  console.log(user);
  console.log(status);

  return (
    <form
      className=" shadow-lg rounded bg-white text-neutral-900 p-4 space-y-2 "
      onSubmit={handleSubmit}
    >
      <p className=" text-center font-bold text-2xl text-amber-700">Register</p>
      <hr />
      <input
        type="text"
        placeholder="Name"
        name="name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className=" border-[1px] border-neutral-400 py-2 px-2 outline-none focus:border-amber-700 rounded w-[230px] "
      />
      <br />
      <input
        type="email"
        placeholder={status === 409 ? "Email already used!" : "Email"}
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={
          " border-[1px] py-2 px-2 border-neutral-400 outline-none focus:border-amber-700 rounded w-[230px] " +
          (status === 409 ? " outline-red-700 outline-[1px]" : " outline-none")
        }
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className=" border-[1px] border-neutral-400 py-2 px-2 outline-none focus:border-amber-700 rounded w-[230px] "
      />
      <br />
      <div className=" flex place-content-center ">
        {/* <Link to="/login"> */}
        <button
          type="submit"
          className=" bg-amber-700 text-white text-sm font-bold uppercase px-4 py-3 rounded hover:bg-amber-800 "
        >
          register
        </button>
        {/* </Link> */}
      </div>
    </form>
  );
};

export default Register;
