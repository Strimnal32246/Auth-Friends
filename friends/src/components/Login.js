import React, { useState } from "react";
import axios from "axios";



const Login = props => {
  const [logini, setLogini] = useState({ username: "", password: "" });

  const changeHandler = event => {
    event.preventDefault();
    setLogini({
      ...logini,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/api/login", logini)
      .then(response => {
        console.log(response);
        localStorage.setItem("token", response.data.payload);
        props.history.push("/Friends");
      })
      .catch(err => console.log("error in handlesSub", err.response));

    setLogini({ username: "", password: "" });
  };

  return (
    <div className="loginContainer">
      <h1>Welcome Friends!</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="name"
          placeholder="enter username"
          type="text"
          value={logini.username}
          name="username"
          onChange={changeHandler}
        />
        <input
          className="password"
          placeholder="enter password"
          type="password"
          value={logini.password}
          name="password"
          onChange={changeHandler}
        />
        <button type="submit" className="SubmitButton">
          Connect!
        </button>
      </form>
    </div>
  );
};

export default Login;
