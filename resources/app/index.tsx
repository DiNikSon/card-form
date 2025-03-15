import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@/styles/index.scss";
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// console.log(import.meta.env.VITE_APP_URL);
