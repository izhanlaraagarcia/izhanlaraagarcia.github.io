import React from "react";
import "./Styles/estilos.css";

import Banner from "../Componentes-Generales/banner";
import Footer from "../Componentes-Generales/footer";
<canvas class="glslCanvas" data-fragment-url=“yourShader.frag" data-textures=“yourInputImage.png” width="500" height="500"></canvas>


class Inicio extends React.Component {
  render() {
    return (
      // Pequeña presentacion para el inicio
      <>
        <Banner />
        Hola, mi nombre es Izhan Lara Garcia y tengo 21 años. Actualmente estoy
        estudiando Desarrollo Web y trabajando como Soporte de Aplicaciones. Mi
        pasión por la tecnología y la resolución de problemas me ha llevado a
        dedicarme a este campo. Mi experiencia laboral comenzó en el área de
        Soporte Técnico, donde adquirí habilidades valiosas en la resolución de
        problemas técnicos y en la comunicación efectiva con los usuarios. Esta
        experiencia me proporcionó una sólida base para entender cómo funcionan
        las cosas detrás de escena en el mundo de la tecnología. Ahora, como
        Soporte de Aplicaciones, estoy aplicando y ampliando mis habilidades
        técnicas, al mismo tiempo que aprendo sobre el desarrollo de software.
        Estoy constantemente buscando formas de mejorar la eficiencia y la
        eficacia de las aplicaciones con las que trabajo. En cuanto a mi
        formación académica, estoy estudiando Desarrollo Web. Este camino me ha
        permitido profundizar en el fascinante mundo de la programación y el
        diseño web. Estoy ansioso por aplicar lo que he aprendido en proyectos
        reales y contribuir a crear soluciones web innovadoras. Soy una persona
        proactiva, siempre dispuesta a aprender cosas nuevas y a enfrentar
        desafíos. Creo firmemente que la tecnología tiene el poder de cambiar el
        mundo y estoy emocionado de ser parte de ese cambio. Gracias por visitar
        mi portafolio. Si tienes alguna pregunta o simplemente quieres decir
        hola, no dudes en contactarme.
        <Footer />
      </>
    );
  }
}

export default Inicio;
