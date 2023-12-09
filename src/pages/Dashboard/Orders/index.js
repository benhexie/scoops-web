import { IoIosArrowDown } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import "./Orders.css"
import { Link, NavLink } from "react-router-dom";

const Orders = () => {
  return (
    <div className="orders-page">
      <div className="header">
        <div>
          <h1>Orders</h1>
          <IoIosArrowDown />
        </div>
        <LuSearch className="search__btn" />
      </div>
      <div className="order__state__wrapper">
        <div className="order__state__container">
          <NavLink to={"/orders"} end className={"order__state__item"}>
            All
          </NavLink>
          <NavLink to={"/orders/pending"} className={"order__state__item"}>
            Pending
          </NavLink>
          <NavLink to={"/orders/accepted"} className={"order__state__item"}>
            Accepted
          </NavLink>
          <NavLink to={"/orders/shipped"} className={"order__state__item"}>
            Shipped
          </NavLink>
          <NavLink to={"/orders/delivered"} className={"order__state__item"}>
            Delivered
          </NavLink>
        </div>
      </div>
      <section className="section">
        <div className="section__header all__orders__header">
          <h3>All orders</h3>
          <select>
            <option value="">Lifetime</option>
          </select>
        </div>
        <div className="section__content">
          <div className="section__background">
            <img src={require("../../../assets/list.png")} />
            <h4>You don't have any orders yet.</h4>
            <p>Share your store's link with your customers on social media to get more orders.</p>
          </div>
          <Link to="#" className="share__btn">Share your store</Link>
        </div>
      </section>
    </div>
  )
}

export default Orders