// FOR PORTFOLIO

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div>
      <Navbar />

      <duv>
        <span>
          <Outlet />
        </span>
      </duv>
    </div>
  );
}

export default AppLayout;
