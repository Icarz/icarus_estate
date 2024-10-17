import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-blue-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-blue-600">Icarus</span>
          <span className="text-blue-400">Estate</span>
        </h1>
        <form className="bg-blue-100 p-3 rounded-lg flex items-center  ">
          <input
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            type="text"
            placeholder="search ..."
          />
          <FaSearch className="text-blue-600" />
        </form>
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="hidden sm:inline text-blue-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to={"/About"}>
            <li className="hidden sm:inline text-blue-700 hover:underline">
              About
            </li>
          </Link>
          <Link to={"/sign_in"}>
            <li className="hidden sm:inline text-blue-700 hover:underline">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
