

import {FaUser, FaFileAlt, FaInfoCircle} from 'react-icons/fa';
import React from "react";

const Navbar = () => {
    return (
        <div className="fixed top-0 h-16 w-screen flex bg-gray-900 flex-row justify-center shadow-lg gap-32">
            <NavBarIcon icon={<FaUser size="28" />} text="About" destination="/portfolio/"/>
            <NavBarIcon icon={<FaFileAlt size="28" />} text="Projects" destination="/portfolio/projects"/>
            <NavBarIcon icon={<FaInfoCircle size="28" />} text="Contact" destination="/portfolio/contact"/>
        </div>
    );
};

const NavBarIcon = ({ icon, text, destination }) => (
    <a href={destination}>
        <div className="navbar-icon group">
            {icon}
            <span className="navbar-tooltip group-hover:scale-100">
          {text}
        </span>
        </div>
    </a>
);
export default Navbar;