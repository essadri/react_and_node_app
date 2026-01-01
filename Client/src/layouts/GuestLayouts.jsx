import React from "react";
import { Outlet } from "react-router-dom";

function GuestLayouts() {
  return (
    <div>
      <header>
        <h1>Event App</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default GuestLayouts;
