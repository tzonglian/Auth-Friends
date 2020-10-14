import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = (props) => {
  const initialFormValues = {
    username: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    console.log(formValues);
    axios
      .post("localhost:5000/api/login", formValues)
      .then((res) => {
        console.log(res);
        //   window.localStorage.setItem("token", res.data.payload);
        //   console.log(res.data.payload);
        //   props.history.push("/protected");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h2> Hi! Log in to see your imaginary friends! </h2>
      <form onSubmit={login}>
        <label>
          {" "}
          Username: <span></span>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={formValues.username}
            placeholder="hint: Lambda School"
          />
        </label>
        <br></br>
        <label>
          {" "}
          Password: <span></span>
          <input
            type="text"
            name="password"
            onChange={handleChange}
            value={formValues.password}
            placeholder="hint: i<3Lambd4"
          />
        </label>
        <br></br>
        <button>See my invisible friends!</button>
      </form>
    </>
  );
};

export default Login;
