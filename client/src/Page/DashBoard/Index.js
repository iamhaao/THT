import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaHeart, FaListAlt, FaUsers } from "react-icons/fa";
import {
  RiLockPasswordLine,
  RiLogoutCircleLine,
  RiMovie2Fill,
} from "react-icons/ri";
import { TbPackages } from "react-icons/tb";

import { HiViewGridAdd } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import Layout from "../../Layout/Layout";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Toast from "../../shared/Toast";
import { useMutation } from "react-query";
import { signOut } from "../../api/auth";
import { useDispatch, useSelector } from "react-redux";
import { signInSuccess } from "../../redux/userSlice/user.slice";
function SideBar({ children }) {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { mutate } = useMutation("Logout", signOut, {
    onSuccess: async (data) => {
      dispatch(signInSuccess(null));
      Toast({ message: "Sign out success!!!", type: "SUCCESS" });
      navigate("/sign-in");
    },
    onError: (error) => {
      Toast({ message: error.message, type: "ERROR" });
    },
  });
  //Logout funtion
  const LogOutHandler = () => {
    mutate();
  };

  const SideLinks = currentUser?.isAdmin
    ? [
        {
          name: "Dashboard",
          link: "/dashboard",
          icon: BsFillGridFill,
        },
        {
          name: "Movies List",
          link: "/movieslist",
          icon: FaListAlt,
        },
        {
          name: "Add Movie",
          link: "/add-movie",
          icon: RiMovie2Fill,
        },
        {
          name: "Categories",
          link: "/categories",
          icon: HiViewGridAdd,
        },
        {
          name: "Packages Premium",
          link: "/packages",
          icon: TbPackages,
        },
        {
          name: "Users",
          link: "/users",
          icon: FaUsers,
        },
      ]
    : currentUser
    ? [
        {
          name: "Update Profle",
          link: "/profile",
          icon: FiSettings,
        },
        {
          name: "Favorites Movies",
          link: "/favorites",
          icon: FaHeart,
        },
        {
          name: "Change Password",
          link: "/password",
          icon: RiLockPasswordLine,
        },
      ]
    : [];
  const active = "bg-dryGray text-subMain";
  const hover = "hover:text-white hover:bg-main ";
  const inActive =
    "rounded font-medium text-sm transitions flex gap-3 items-center p-4";
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;

  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-2 ">
        <div className="xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6">
          <div className="col-span-2 sticky bg-dry border border-gray-800 p-6 rounded-md xl:mb-0 mb-5">
            {
              //SideBar Links
              SideLinks.map((link, index) => (
                <NavLink to={link.link} key={index} className={Hover}>
                  <link.icon /> <p>{link.name}</p>
                </NavLink>
              ))
            }
            <button
              onClick={LogOutHandler}
              className={`${inActive} ${hover} w-full `}
            >
              <RiLogoutCircleLine /> Log Out
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="10"
            data-aos-offset="200"
            className="col-span-6 rounded-md bg-dry border border-gray-800 p-6"
          >
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SideBar;
