import "./CardView.css"
import { LiaEllipsisVSolid } from "react-icons/lia";

const CardView = ({ title, content, variation=0, Icon }) => {
  switch (variation) {
    case 1:
      return (
        <div className="card cardview cardview1">
          <div>
            <Icon className="icon" />
            <LiaEllipsisVSolid />
          </div>
          <p className="content">{content}</p>
        </div>
      )

    case 2:
      return (
        <div className="card cardview cardview2">
          <Icon className="icon" />
          <p className="content">{content}</p>
        </div>
      )
    default:
      return (
        <div className="card cardview">
          <h4 className="title">{title}</h4>
          <p className="content">{content}</p>
        </div>
      )
  }
}

export default CardView