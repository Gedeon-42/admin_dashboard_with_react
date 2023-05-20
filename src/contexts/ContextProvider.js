import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
const stateContext = createContext();
const initialState = {
  userProfile: false,
  chat: false,
  notification: false,
  cart: false,
};
export const ContextProvider = ({ children }) => {
  const [activemenu, setActivemenu] = useState(false);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  //usestates to set themes and colors
  const [currentMode, setCurrentMode] = useState("Light");
  const [currentColor, setCurrentColor] = useState("#1A97F5");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };
  const setColor = (color) => {
    //console.log(e.target);
    setCurrentColor(color);
    localStorage.setItem("themeColor", color);
    setThemeSettings(false);
  };
  //function to turn on the notifiction, chats and userprofile when they are clicked
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <stateContext.Provider
      value={{
        activemenu,
        setActivemenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentMode,
        setMode,
        currentColor,
        setColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};
export const useStateContext = () => useContext(stateContext);
