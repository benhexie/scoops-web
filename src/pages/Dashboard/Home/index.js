import { Link } from "react-router-dom";
import Switch from "../components/Switch"
import "./Home.css"
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { MdWhatsapp } from "react-icons/md";
import CardView from "../components/CardView";
import { GoGlobe, GoPlus } from "react-icons/go";
import useDimensions from "react-use-dimensions";

const Home = () => {
  const [domainBtnRef, domainBtnSize] = useDimensions();

  return (
    <>
      <div className="header">
        <h1 className="title">Scoops</h1>
        <Switch />
      </div>
      <div className="home-page">
        <div className="card share__container">
          <div>
            <h4>Share store link</h4>
            <p>Customers can visit the following link and palce their orders.</p>
          </div>
          <div>
            <Link to="#" className="store__link">mydukaan.io/scoops16</Link>
            <Link to="#" className="whatsapp__btn">
              <MdWhatsapp />
              Share
            </Link>
          </div>
          <Link ref={domainBtnRef} to="#" className="domain__btn">
            Get your {domainBtnSize.width > 300 ? "own custom" : ""} domain
            <IoIosArrowDroprightCircle />
          </Link>
        </div>
        <section className="section overview__container">
          <div className="section__header">
            <h3>Overview</h3>
            <select>
              <option value="">Lifetime</option>
            </select>
          </div>
          <div className="section__content">
            <CardView title="ORDERS" content="0" />
            <CardView title="TOTAL SALES" content="£0" />
            <CardView title="STORE VIEWS" content="40" />
            <CardView title="PRODUCT VIEWS" content="7" />
          </div>
        </section>
        <section className="section shortcuts__container">
          <div className="section__header">
            <h3>Shortcuts</h3>
          </div>
          <div className="section__content">
            <CardView variation={1} Icon={GoGlobe} content="Domains" />
            <CardView variation={1} Icon={GoPlus} content="Create a coupon" />
            <CardView variation={2} Icon={GoPlus} content="Add shortcut" />
          </div>
        </section>
        <div />
      </div>
    </>
  )
}

export default Home