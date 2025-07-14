import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const handleProfileClick = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const menuClass = "menu";
    const activeMenuClass = "menu selected";

    const currentPath = window.location.pathname;

    return (
        <div className="menu-container">
            <img src="logo.png" alt="Logo" style={{ width: "35px" }} />
            <div className="menus">
                <ul>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/">
                            <p
                                className={
                                    currentPath === "/"
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Dashboard
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/orders">
                            <p
                                className={
                                    currentPath === "/orders"
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Orders
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/holdings">
                            <p
                                className={
                                    currentPath === "/holdings"
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Holdings
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/positions"
                        >
                            <p
                                className={
                                    currentPath === "/positions"
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Positions
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/funds">
                            <p
                                className={
                                    currentPath === "/funds"
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Funds
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/apps">
                            <p
                                className={
                                    currentPath === "/apps"
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Apps
                            </p>
                        </Link>
                    </li>
                </ul>
                <hr />
                <div className="profile" onClick={handleProfileClick}>
                    <div className="avatar">ZU</div>
                    <p className="username">USERID</p>
                </div>
            </div>
        </div>
    );
};

export default Menu;
