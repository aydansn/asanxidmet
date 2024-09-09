import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LogInProvider } from "./contexts/LogInContext.jsx";
import { ManagmentProvider } from "./contexts/ManagmentContext.jsx";
import { RollProvider } from "./contexts/RollContext.jsx";
import { UsersProvider } from "./contexts/UsersContext.jsx";
import { RolesProvider } from "./contexts/RolesContext.jsx";

createRoot(document.getElementById("root")).render(
  <LogInProvider>
    <ManagmentProvider>
      <RollProvider>
        <UsersProvider>
          <RolesProvider>
            <App />
          </RolesProvider>
        </UsersProvider>
      </RollProvider>
    </ManagmentProvider>
  </LogInProvider>
);
