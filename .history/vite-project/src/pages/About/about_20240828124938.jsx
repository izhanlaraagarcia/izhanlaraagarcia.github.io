import React from "react";
import "./styles/about.scss";
import Logo from "../../Componentes-Generales/logo";

class About extends React.Component {
  render() {
    return (
      <>
        <Logo />
        <div>
          <br />
          <br />

          <div id="bigcontainer">
            <h1>Sobre mí</h1>
            <section id="CV_text">
              <hr />
              <p>
                Hola, mi nombre es Izhan Lara Garcia y tengo 21 años. Actualmente
                estoy estudiando Desarrollo Web y trabajando como Soporte de
                Aplicaciones. <br />
                Mi pasión por la tecnología y la resolución de problemas me ha
                llevado a dedicarme a este campo. Mi experiencia laboral comenzó
                en el área de Soporte Técnico, donde adquirí habilidades valiosas
                en la resolución de problemas técnicos y en la comunicación
                efectiva con los usuarios. Esta experiencia me proporcionó una
                sólida base para entender cómo funcionan las cosas detrás de
                escena en el mundo de la tecnología.
                <br />
                <br />
                Ahora, como Soporte de Aplicaciones, estoy aplicando y ampliando
                mis habilidades técnicas, al mismo tiempo que aprendo sobre el
                desarrollo de software. Estoy constantemente buscando formas de
                mejorar la eficiencia y la eficacia de las aplicaciones con las
                que trabajo. También he trabajado en la automatización de tareas
                rutinarias utilizando scripts en Python y Bash, lo que ha
                optimizado considerablemente los procesos y ha reducido el tiempo
                de ejecución de diversas tareas.
                <br />
                <br />
                En cuanto a mi formación académica, estoy estudiando Desarrollo
                de Aplicaciones Web. Este camino me ha permitido profundizar en
                el fascinante mundo de la programación y el diseño web. Estoy
                ansioso por aplicar lo que he aprendido en proyectos reales y
                contribuir a crear soluciones web innovadoras.
                <br />
                <br />
                Soy una persona proactiva, siempre dispuesta a aprender cosas
                nuevas y a enfrentar desafíos. Creo firmemente que la tecnología
                tiene el poder de cambiar el mundo y estoy emocionado de ser
                parte de ese cambio. Gracias por visitar mi portafolio. Si tienes
                alguna pregunta o simplemente quieres decir hola, no dudes en
                contactarme.
              </p>
              <hr />
            </section>

            {/* Sección de educación */}
            <div id="experiencia">
              <h2>Educación</h2>
              <section className="education">
                <div className="item">
                  <h3>Sistemas Microinformáticos y Redes</h3>
                  <p className="location">
                    Santa Monica, Palma de Mallorca, España
                  </p>
                  <p className="date">06/2017 - 06/2019</p>
                </div>
                <div className="item">
                  <h3>Desarrollo de Aplicaciones Web</h3>
                  <p className="location">
                    iFP: Centro de Formación Profesional, Barcelona, España
                  </p>
                  <p className="date">02/2023 - Presente</p>
                </div>
              </section>

              {/* Sección de experiencia laboral */}
              <section className="experience">
                <h2>Experiencia Laboral</h2>
                <div className="item">
                  <h3>Help Desk IT</h3>
                  <p className="location">W2M, Palma de Mallorca</p>
                  <p className="date">03/2022 - 03/2023</p>
                  <p>
                    Instalación de software y hardware, mantenimiento de equipos,
                    resolución de problemas, uso de herramientas de Help Desk como
                    Jira, scripting, Intune, AD, Endpoint, Licencias, PowerShell.
                  </p>
                </div>
                <div className="item">
                  <h3>Help Desk - Applications Support</h3>
                  <p className="location">W2M, Palma de Mallorca</p>
                  <p className="date">03/2023 - Presente</p>
                  <p>
                    Soporte a usuarios sobre herramientas como Juniper, Dome,
                    Jira, Adyen, MIKE, Intranet, Confluence.
                  </p>
                </div>
              </section>
            </div>
             
            {/* Sección de automatización */}
            <section className="automation">
              <h2>Automatización</h2>
              <p>
                He desarrollado diversas automatizaciones utilizando Python y Bash, lo que
                ha permitido optimizar tareas como la gestión de archivos, el despliegue
                de entornos y la monitorización de sistemas. Estas herramientas han
                mejorado significativamente la eficiencia operativa y la consistencia
                en los resultados.
              </p>
            </section>
            
            {/* Habilidades */}
            <section className="skills">
              <h2>Habilidades</h2>
              <ul>
                <li>Resolución de problemas</li>
                <li>Comunicación</li>
                <li>Trabajo bajo presión</li>
                <li>Aprendizaje continuo</li>
                <li>Trabajo en equipo</li>
                <li>Conocimiento técnico</li>
                <li>Automatización con Python y Bash</li>
              </ul>
            </section>

            {/* Certificaciones */}
            <section className="certifications">
              <h2>Certificaciones</h2>
              <ul>
                <li>
                  Fundamentos Profesionales del Desarrollo de Software, Microsoft
                  y LinkedIn (02/2023 - Presente)
                </li>
                <li>
                  Fundamentos Profesionales del Análisis de Datos, Microsoft y
                  LinkedIn (02/2023 - Presente)
                </li>
                <li>Curso Profesional de JAVA (05/2023 - Presente)</li>
              </ul>
            </section>

            {/* Idiomas */}
            <section id="languages">
              <h2>Idiomas</h2>
              <ul>
                <li>Español: Nativo o Bilingüe</li>
                <li>Inglés: Competencia Limitada</li>
                <li>Catalán: Competencia Profesional Completa</li>
              </ul>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default About;
