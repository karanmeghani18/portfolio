import React, { useState } from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [currentTab, setTab] = useState("home"); // Initialize the default tab

  const handleTabChange = (tabName) => {
    setTab(tabName);
  };

  return (
    <div className="flex sticky top-4 z-50 items-center justify-center h-24  mx-auto text-white">
      <ul className="flex backdrop-blur text-xs rounded-3xl focus:scroll-auto">
        <li className="navBarItem  p-1">
          <div className={currentTab === "home" ? "selectedNavBarItem" : ""}>
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => handleTabChange("home")}
            >
              Home
            </Link>
          </div>
        </li>
        <li className="navBarItem   p-1">
          <div className={currentTab === "about" ? "selectedNavBarItem" : ""}>
            <Link
              to="about"
              duration={500}
              smooth={true}
              onClick={() => handleTabChange("about")}
            >
              About
            </Link>
          </div>
        </li>
        <li className="navBarItem   p-1">
          <div
            className={currentTab === "experience" ? "selectedNavBarItem" : ""}
          >
            <Link
              to="experience"
              duration={500}
              smooth={true}
              onClick={() => handleTabChange("experience")}
            >
              Experience
            </Link>
          </div>
        </li>
        <li className="navBarItem   p-1">
          <div className={currentTab === "work" ? "selectedNavBarItem" : ""}>
            <Link
              to="work"
              duration={500}
              smooth={true}
              onClick={() => handleTabChange("work")}
            >
              Work
            </Link>
          </div>
        </li>
        <li className="navBarItem   p-1">
          <div className={currentTab === "contact" ? "selectedNavBarItem" : ""}>
            <Link
              to="contact"
              duration={500}
              smooth={true}
              onClick={() => handleTabChange("contact")}
            >
              Contact
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
