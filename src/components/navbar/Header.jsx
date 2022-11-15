import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { HiMenu } from "react-icons/hi";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <header className="bg-gray-900 py-3 text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between capitalize">
          <Link to="/">
            <h1> Thrift shop</h1>
          </Link>

          <Navbar />

          {/* mobile nav functionality */}
          <HiMenu
            onClick={() => setNavMobile(true)}
            className="cursor-pointer text-3xl lg:hidden"
          />

          <div className={`${navMobile ? "-right-0" : "-right-full"} toggle `}>
            <MobileNav setNavMobile={setNavMobile} />
          </div>

          {/* mobile nav ends */}
        </div>
      </div>
    </header>
  );
};

export default Header;
