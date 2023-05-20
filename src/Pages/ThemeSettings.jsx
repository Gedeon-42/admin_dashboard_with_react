import { FaArrowUp, FaTimes } from "react-icons/fa";
import { ThemeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
const ThemeSettings = () => {
  const { setMode, setColor, currentMode, currentColor, setThemeSettings } =
    useStateContext();
  return (
    <div className="themsettings-wrapper">
      <div className="themesettings dark:bg-dark">
        <div className="d-flex">
          <p className="text-bold text-lg">settings</p>
          <button
            type="button"
            className="close-settings dark:color-white"
            onClick={() => setThemeSettings(false)}
          >
            <FaTimes />
          </button>
        </div>
        <div className="theme-mode">
          <p className="text-center text-lg text-bold dark:color-white">
            {" "}
            select theme{" "}
          </p>
          <input
            type="radio"
            name="light"
            value="Light"
            onChange={setMode}
            checked={currentMode === "Light"}
          />
          <label htmlFor="Light" className="text-bold dark:color-white">
            {" "}
            Light
          </label>
          <br />
          <input
            type="radio"
            name="dark"
            value="Dark"
            onChange={setMode}
            checked={currentMode === "Dark"}
          />
          <label htmlFor="Dark" className="text-bold dark:color-white">
            {" "}
            Dark
          </label>
          <br />
        </div>
        <div className="color-mode">
          <p className="text-center text-lg text-bold dark:color-white">
            choose color
          </p>
          {ThemeColors.map((item, index) => (
            <button
              className="color-btn"
              style={{ background: item.color }}
              onClick={() => {
                setColor(item.color);
              }}
              key={index}
            >
              <FaArrowUp
                className={`text-white ${
                  item.color === currentColor ? "block" : "hidden"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ThemeSettings;
