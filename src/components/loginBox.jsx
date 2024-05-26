import React, { useState } from "react";
import "../styles/loginBox.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../index";

export default function LoginBox({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const supabase = useContext(UserContext);
  const { handleLogin } = useContext(UserContext);

  function handleEmailChange(event) {
    setEmail(event.target.value);
    // console.log(event.target.value)
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    // console.log(event.target.value)
  }

  async function handleSubmit(event) {
    event.preventDefault();
    loginUser();
    setError("");
  }

  // function to log in user
  async function loginUser() {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      setError("Du har brugt forkert email eller adgangskode.");
      console.log({ error });
    } else {
      console.log("user is logged in");
      handleLogin();
      navigate("/bestyrelse/upload");
    }
  }

  return (
    <div className="loginBox_container">
      <img src="../../assets/icons/close.png" alt="" onClick={onClose} />
      <div className="form_container">
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            onChange={handleEmailChange}
            value={email}
            required
          />
          <label>Adgangskode</label>
          <input
            type="password"
            onChange={handlePasswordChange}
            value={password}
            required
          />
          {error && <p>{error}</p>}
          <button className="login_button2" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
