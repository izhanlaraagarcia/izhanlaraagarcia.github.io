import React from "react";
import { Link } from "react-router-dom";
import "./styles/menu.scss";
import TemaComponent from "./thema";
import { useTheme } from "../Constants/themaContext";

// import { LANGUAGES } from "../Constants/lenguaje";

// const Menu = () => {
//   const { dark } = useTheme();
//   return (
//     <header>
//       <nav className={`menu ${dark ? "dark-mode" : "light-mode"}`}>
//         <ul>
//           <li>
//             <Link to="/">Inicio</Link>
//             <i className="fas fa-address-card" aria-hidden="true"></i>
//           </li>
//           <li>
//             <Link to="/sobre-mi">Sobre mi</Link>
//           </li>
//           <li>
//             <Link to="/contacto">Contacto</Link>
//           </li>
           
//           <TemaComponent />
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Menu;


export default function Menu(){
  return(
    <Navbar>
      <NavbarBrand>
        <Avatar>
          <p className="logo">Izhan</p>
        </Avatar>
        <NavbarContent>
          <Link to="/">Inicio</Link>
          <Link to="/sobre-mi">Sobre mi</Link>
          <Link to="/contacto">Contacto</Link>
          <TemaComponent />
        </NavbarContent>
      </NavbarBrand>
    </Navbar>
  )
}