import React from "react"
import './styles/logo.scss'


const Logo = () =>{
    return (<div className="inicio-container">
        <aside className="sidebar">
          <div className="logo-container">
            <div className="logo">IL</div>
            <SocialMedia />
          </div>
        </aside>
      </div>)
}

export default Logo;