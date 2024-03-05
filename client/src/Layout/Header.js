import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { HiOutlineFilm } from "react-icons/hi";
import { TbCrown } from "react-icons/tb";
import { RiContactsFill } from "react-icons/ri";
import { RiBox3Fill } from "react-icons/ri";

function Header() {
  return (
    <div className="bg-main shadow-md sticky top-0 z-20 ">
      <div className=" container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between">
        <div className="col-span-1 mx-auto lg:block hidden">
          <Link to="/">
            <img
              src="/images/logo1.png"
              alt="Monterhub"
              className="w-12 h-12 object-contain object-center"
            />
          </Link>
        </div>
        <div className="col-span-2">
          <form className="w-full rounded flex">
            <input
              placeholder="Search Movie Name From here"
              className="w-full font-medium placeholder:text-border bg-transparent text-sm border border-border rounded-lg px-2 py-2"
            />
            <button className="bg-subMain rounded-lg px-2" type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
        <div className="col-span-4 font-medium text-sm hidden xl:gap-8 justify-between lg:flex xl:justify-center items-center ">
          <NavLink
            to="/movies"
            className="hover:text-subMain transitions text-white flex gap-2 justify-end items-center"
          >
            <HiOutlineFilm className="w-6 h-6" />
            Movies
          </NavLink>
          <NavLink
            to="/premium"
            className="hover:text-subMain transitions text-white flex gap-2 justify-end items-center"
          >
            <TbCrown className="w-6 h-6 text-yellow-400" />
            Premium Account
          </NavLink>
          <NavLink
            to="/about-us"
            className="hover:text-subMain transitions text-white flex gap-2 justify-end items-center"
          >
            <RiBox3Fill className="w-6 h-6" />
            About US
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-subMain transitions text-white flex gap-2 justify-end items-center"
          >
            <RiContactsFill className="w-6 h-6" />
            Contact
          </NavLink>
          <NavLink
            to="/sign-in"
            className="hover:text-subMain bg-subMain p-2 rounded hover:bg-dry transitions text-white flex gap-2 justify-end items-center"
          >
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
