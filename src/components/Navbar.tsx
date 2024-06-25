import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png"; // Logo resmi

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUserCircle,
  faEllipsisV,
  faSearch,
} from "@fortawesome/free-solid-svg-icons"; // FontAwesome iconları

const Navbar: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string>("For you");
  const navigate = useNavigate();

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  const handleClick = () => {
    navigate("/createPost");
  };

  return (
    <div className="flex items-center h-24 max-w-[1240px] mx-auto ">
      {/* Logo ve Pinterest yazısı sol tarafta */}
      <div className="flex items-center space-x-4 pr-8">
        <img src={logo} alt="Logo" className="h-14 w-14" />
        <h1 className="text-3xl font-bold text-[#E60728]">Pinterest</h1>
      </div>

      <ul className="flex items-center space-x-4 flex-grow ml-4">
        <li>
          <div className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                selectedButton === "For you"
                  ? "text-white bg-custom"
                  : "text-gray-900 bg-white"
              } border border-gray-200 rounded-l-lg`}
              onClick={() => handleButtonClick("For you")}
            >
              For you
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                selectedButton === "Today"
                  ? "text-white bg-custom"
                  : "text-gray-900 bg-white"
              } border border-gray-200 rounded-r-lg`}
              onClick={() => handleButtonClick("Today")}
            >
              Today
            </button>
          </div>
        </li>

        <li className="flex-grow relative flex items-center">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 w-full pl-10 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </li>

        <li>
          <button
            onClick={handleClick}
            className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2"
          >
            Create
          </button>
        </li>

        <li>
          <FontAwesomeIcon icon={faBell} className="text-lg" />
        </li>

        <li>
          <FontAwesomeIcon icon={faUserCircle} className="text-lg" />
        </li>

        <li>
          <FontAwesomeIcon icon={faEllipsisV} className="text-lg" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
