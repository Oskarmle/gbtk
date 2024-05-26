import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createClient } from "@supabase/supabase-js";

const UserContext = createContext();
const supabaseClient = createClient(
  "https://ofghfzhdqyybxseootsl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mZ2hmemhkcXl5YnhzZW9vdHNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzMzYwNTQsImV4cCI6MjAzMDkxMjA1NH0.nLMHhcrf3ykrxuwAbZUilGtrc-cNLxnwMnC6YrqdQ0s"
);

const Root = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      const { user, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        throw error;
      }

      setUser(user);
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await supabaseClient.auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <React.StrictMode>
      <UserContext.Provider
        value={{ user: user, supabaseClient: supabaseClient, handleLogin: handleLogin, handleLogout: handleLogout }}
      >
        <App />
      </UserContext.Provider>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<Root />);

reportWebVitals();

export { UserContext };