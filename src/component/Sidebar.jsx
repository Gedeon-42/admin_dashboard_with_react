import { NavLink } from "react-router-dom";
import { links } from "../data/dummy";
import { FaTimes } from "react-icons/fa";
import { useStateContext } from "../contexts/ContextProvider";
const Sidebar = () => {
  const { activemenu, setActivemenu, screenSize, currentColor } =
    useStateContext();
  // function to close menu
  const handleCloseMenu = () => {
    if (activemenu && screenSize <= 900) {
      setActivemenu(false);
    }
  };
  return (
    <div>
      <div className="dash-content">
        {links.map((item) => (
          <div key={item.title}>
            <h3 className="links-title">{item.title}</h3>
            {item.links.map((link) => (
              <NavLink
                to={`/${link.name}`}
                key={link.name}
                style={({ activemenu }) => ({
                  background: activemenu ? currentColor : "",
                })}
                className="navlinks-dash dark:color-white"
                onClick={handleCloseMenu}
              >
                <div className="navlinks-content">
                  <span className="nav-span">{link.icon}</span>
                  <p className="nav-p">{link.name}</p>
                </div>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
      <div
        className="close-sidebar"
        onClick={() => setActivemenu((prevActiveMenu) => !prevActiveMenu)}
      >
        <FaTimes />
      </div>
    </div>
  );
};
export default Sidebar;
