import {
  FaCalendar,
  FaContao,
  FaHome,
  FaRegEdit,
  FaShoppingCart,
  FaUserAstronaut,
  FaProductHunt,
} from "react-icons/fa";
//import avatar from "./avatar.jpg";
export const links = [
  {
    title: "home",
    links: [
      {
        name: "Ecommerce",
        icon: <FaHome />,
      },
    ],
  },
  {
    title: "pages",
    links: [
      {
        name: "orders",
        icon: <FaShoppingCart />,
      },
      {
        name: "employees",
        icon: <FaContao />,
      },
      {
        name: "customers",
        icon: <FaUserAstronaut />,
      },
      {
        name: "products",
        icon: <FaProductHunt />,
      },
    ],
  },
  {
    title: "apps",
    links: [
      {
        name: "calendar",
        icon: <FaCalendar />,
      },
      {
        name: "Editor",
        icon: <FaRegEdit />,
      },
    ],
  },
];
export const ThemeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];
