import { Outlet } from "react-router-dom"
import "./Dashboard.css"
import Nav from "../../components/Nav"

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="header__decoration" />
      <Outlet />
      <Nav />
    </div>
  )
}

export default Dashboard