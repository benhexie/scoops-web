import { useState } from "react"
import "./Switch.css"

const Switch = () => {
    const [isOnline, setIsOnline] = useState(true)

    const handleSwitch = () => {
        setIsOnline(!isOnline)
    }

    return (
        <div 
            className={`switch__container ${isOnline ? "active" : ""}`}
            onClick={handleSwitch}
        >
            <p>{ isOnline ? "Online" : "Offline" }</p>
            <div className="switch__toggle" />
        </div>
    )
}

export default Switch