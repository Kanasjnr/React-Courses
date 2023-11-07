import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import UseWindowSize from "../hooks/useWindowSize";

const Header = ({ title }) => {
  const { width } = UseWindowSize();
  return (
    <header className="Header">
      <h1>{title}</h1>
      {width < 768 ? (
        <FaMobileAlt />
      ) : width < 992 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
    </header>
  );
};

export default Header;
