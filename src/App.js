import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./dashboard.css";
import "./App.css";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import {
  Button,
  UserProfile,
  Bars,
  Navbar,
  Sidebar,
  Notification,
  Cart,
  Chats,
} from "./component";
import {
  Editor,
  Employees,
  Orders,
  Products,
  Calendar,
  Piechart,
  Ecommerce,
  Customers,
  ThemeSettings,
} from "./Pages";
import { useStateContext } from "./contexts/ContextProvider";
import { FaGem } from "react-icons/fa";
//import Tasks from "./components/Tasks";
function App() {
  //const springs = useSpring({
  //   from: { x: 0 },
  //   to: { x: 100 },
  // });
  //const isActive = true;
  const {
    activemenu,
    setActivemenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="dark:bg-main-dark relative">
          {themeSettings && <ThemeSettings />}
          {activemenu ? (
            <div className="large-sidebar dark:bg-dark">
              <Sidebar />
            </div>
          ) : (
            <div className="small-sidebar"></div>
          )}
          <div
            className={`dark:bg-main-dark dark:color-white ${
              activemenu ? "navbars" : "navbar2"
            }`}
          >
            <Navbar />
          </div>
          <div className="dark:bg-main-dark w-full">
            <button
              type="button"
              className="btn-settings dark:bg-main-dark "
              style={{ color: currentColor }}
              onClick={() => {
                setThemeSettings(true);
              }}
            >
              {" "}
              <FaGem />
            </button>
          </div>
          <div className={activemenu ? "content" : "large-content"}>
            {/* DASHBOARD */}
            <Routes>
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" elemnt={<Ecommerce />} />
              {/* pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              {/* bars */}
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/editor" element={<Editor />} />
              {/* charts */}
              <Route path="/bars" element={<Bars />} />
              <Route path="/piechart" element={<Piechart />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
/*
 <Home />
      <Contact
        images="/images/real2.jpg"
        title="umwizerwa eric"
        location="kigali rwanda"
      />
      <Contact
        images="/images/student1.jpg"
        title="umwizerwa eric"
        location="kigali rwanda"
      />
      <Contact
        images="/images/player8.jpg"
        title="daniel benekry"
        location="cymisigara rwanda"
      />
      <Contact
        images="/images/real1.png"
        title="samuel baker"
        location="kigali rwanda"
      />
*/
