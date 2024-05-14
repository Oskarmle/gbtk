import React, { useState } from "react";
import "../styles/loginBox.css";
import { createClient } from "@supabase/supabase-js";

export default function LoginBox({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const supabase = createClient(
    "https://ofghfzhdqyybxseootsl.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mZ2hmemhkcXl5YnhzZW9vdHNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzMzYwNTQsImV4cCI6MjAzMDkxMjA1NH0.nLMHhcrf3ykrxuwAbZUilGtrc-cNLxnwMnC6YrqdQ0s"
  );

  function handleEmailChange(event) {
    setEmail(event.target.value);
    // console.log(event.target.value)
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    // console.log(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    loginuser();
    // console.log("you are logged ind succedfully")
    setError("");
  }

  // function to log in user
  async function loginuser() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      setError("Du har brugt forkert email eller adgangskode.");
      console.log({ error });
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