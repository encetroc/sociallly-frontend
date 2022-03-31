import axios from "axios";
import { useState } from "react";
import { Navigation } from "../components";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // endpoint for logginin
    const url = `${process.env.REACT_APP_BACKEND_URL}/auth/login`;
    // data you need to send to login endpoint
    const data = {
      email,
      password,
    };
    // axios request (token and user are inside of response), you get back a response containing the token
    const response = await axios.post(url, data);
    // check if the response is OK
    if (response.status === 200) {
      // if OK we save the token to local storage
      localStorage.setItem("token", `Bearer ${response.data.token}`);
      // and save user to localstorage
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }
  };

  return (
    <div className="container">
      <Navigation />
      <form className="loginForm" onSubmit={handleSubmit}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
