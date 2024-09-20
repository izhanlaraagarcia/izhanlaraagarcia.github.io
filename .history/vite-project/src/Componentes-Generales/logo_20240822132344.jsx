import React from "react"
import './styles/logo.scss'
import SocialMedia from './social'


const Logo = () =>{
    return (
    <div className="inicio-container">
        <aside className="sidebar">
          <div className="logo-container"> <img src="../public/favicon.ico" alt="" />
            <div className="logo">IL</div>
            <SocialMedia />
          </div>
        </aside>
      </div>)
}

export default Logo;