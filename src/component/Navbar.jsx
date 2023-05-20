import { FaBars, FaCartPlus, FaElementor, FaEnvelope } from "react-icons/fa";
import { useStateContext } from "../contexts/ContextProvider";
import { Notification, Chats, Cart, UserProfile } from ".";
import avatar from "../data/avatar.jpg";
import { useEffect } from "react";
const NavBar = () => {
  const {
    activemenu,
    setActivemenu,
    handleClick,
    isClicked,
    setIsClicked,
    screenSize,
    setScreenSize,
  } = useStateContext();
  // useEffect to set size of screen
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();
    // handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (screenSize <= 900) {
      setActivemenu(false);
    } else {
      setActivemenu(true);
    }
  }, [screenSize]);
  const NavButton = ({ title, icon, customfunc, dotColor, color }) => (
    <button
      type="submit"
      style={{
        marginRight: "10px",
        border: 0,
        outline: 0,
        color: color,
        background: "inherit",
        fontSize: "20px",
      }}
      onClick={customfunc}
      className="dark:color-white"
    >
      {icon}
    </button>
  );
  return (
    <div>
      <div className="navbar-top">
        {/* <FaBars
        onClick={() => setActivemenu((prevActivemenu) => !prevActivemenu)}
      /> */}
        <NavButton
          customfunc={() => setActivemenu((prevActivemenu) => !prevActivemenu)}
          icon={<FaBars />}
        />
        <div className="navbar-flex">
          <NavButton
            customfunc={() => handleClick("cart")}
            icon={<FaCartPlus />}
          />
          <NavButton
            customfunc={() => handleClick("chats")}
            icon={<FaEnvelope />}
          />
          <NavButton
            customfunc={() => handleClick("notification")}
            icon={<FaElementor />}
          />
          <div
            className="user-profile"
            onClick={() => handleClick("userProfile")}
          >
            <img
              src={avatar}
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            />
            <span>Hi,</span>
            <span> Gedeon</span>
          </div>
        </div>
      </div>
      {isClicked.cart && <Cart />}
      {isClicked.chats && <Chats />}
      {isClicked.notification && <Notification />}
      {isClicked.userProfile && <UserProfile />}
    </div>
  );
};
export default NavBar;
