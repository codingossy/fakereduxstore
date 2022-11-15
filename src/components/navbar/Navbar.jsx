import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartModal from "../main/CartModal";
import "./Header.css";

const Navbar = () => {
  const { carts } = useSelector((state) => state.items);

  return (
    <nav className="hidden capitalize lg:flex">
      <ul className="flex items-center space-x-12">
        <li className="nav-link">home</li>
        <li className="nav-link">shop</li>
        <Link to={"/cart"}>
          <li className="rounded-md bg-blue-500 py-2 px-5 capitalize text-white">
            cart: <span>{carts.length}</span>
          </li>
        </Link>
      </ul>


    </nav>
  );
};

export default Navbar;
