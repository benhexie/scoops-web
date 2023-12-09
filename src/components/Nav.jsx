import { NavLink, useLocation } from "react-router-dom"
import "./Nav.css"
import { GoHome, GoHomeFill } from "react-icons/go";
import { HiOutlineClipboardList, HiClipboardList } from "react-icons/hi";
import { HiOutlineSquares2X2, HiMiniSquares2X2 } from "react-icons/hi2";
import { HiOutlineSquare3Stack3D, HiMiniSquare3Stack3D } from "react-icons/hi2";
import { FaRegUser, FaUser } from "react-icons/fa6";

const Nav = () => {
  const location = useLocation().pathname;
  return (
    <div className="nav">
      <div>
        <NavLink to={""} end className="nav__item">
          { location === "/" ? <GoHomeFill /> : <GoHome /> }
          <span>Home</span>
        </NavLink>
        <NavLink to={"orders"} className="nav__item">
          { /^\/orders/.test(location) ? <HiClipboardList /> : <HiOutlineClipboardList /> }
          <span>Orders</span>
        </NavLink>
        <NavLink to={"products"} className="nav__item">
          { location === "/products" ? <HiMiniSquares2X2 /> : <HiOutlineSquares2X2 /> }
          <span>Products</span>
        </NavLink>
        <NavLink to={"manage"} className="nav__item">
          { location === "/manage" ? <HiMiniSquare3Stack3D /> : <HiOutlineSquare3Stack3D /> }
          <span>Manage</span>
        </NavLink>
        <NavLink to={"account"} className="nav__item">
          { location === "/account" ? <FaUser /> : <FaRegUser /> }
          <span>Account</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Nav