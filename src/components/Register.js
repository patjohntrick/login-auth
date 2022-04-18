import axios from "axios";
import React from "react";

const Register = ({ baseUri, user, setUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    axios
      .post(`${baseUri}/register`, newUser)
      .then((res) => setUser([...user, res.data]))
      .catch((err) => console.log(err));
  };
  console.log(user);
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
        className=" border-[1px] border-neutral-400 py-2 px-2 outline-none focus:border-amber-700 rounded w-[230px] "
      />
      <br />
      <input
        type="email"
        placeholder="Email"
        name="email"
        required
        className=" border-[1px] border-neutral-400 py-2 px-2 outline-none focus:border-amber-700 rounded w-[230px] "
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        name="password"
        required
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
