import React from "react";
import Logo from "../Componentes-Generales/logo";
import Fondo from "../Componentes-Generales/fondo";

// import './styles/iniciostyles.scss'
// const Inicio = () => {
//   return (
//     <div>
//           <Logo/>
//           <div className="hello-container">
//       <h1 className="hello-text">Hello, World!</h1>
//     </div>          <Fondo/>
//     </div>
//   );
// };


const Inicio = () => {
  const lines = [
    "Welcome to my website!",
    "I'm a passionate developer.",
    "Let's create something amazing together."
  ];

  return (
    <>
    <Logo/>
          <div className="hello-container">
      <h1 className="hello-text">Hello, World!</h1>
    </div>          <Fondo/>
    <div className="inicio-container">
      <Typewriter texts={lines} speed={100} pause={1000} />
    </div>
    </>
  );
};
export default Inicio;
