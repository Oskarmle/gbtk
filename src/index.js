import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";

const supabaseClient = createClient(
  "https://ofghfzhdqyybxseootsl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mZ2hmemhkcXl5YnhzZW9vdHNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzMzYwNTQsImV4cCI6MjAzMDkxMjA1NH0.nLMHhcrf3ykrxuwAbZUilGtrc-cNLxnwMnC6YrqdQ0s"
);

const userContext = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <userContext.Provider supabaseClient={supabaseClient}>
      <App />
    </userContext.Provider>
  </React.StrictMode>
);

reportWebVitals();
