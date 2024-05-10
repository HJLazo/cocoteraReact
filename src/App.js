import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { InfoProvider } from "./components/parent_information/infoProvider";
import '@fortawesome/fontawesome-free/css/all.css';

const App = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <InfoProvider>
        <div className="d-flex flex-column flex-grow-1" >
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </InfoProvider>
    </div>
  );
}

export default App;
