import React from "react";
import "./styles/footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <footer class="copyright">
        © 2024 Izhan Lara Garcia. 
          <br />
          <br />
          The Sponsored Listings displayed <br />
          above are served automatically by a third party. Neither the service
          <br />
          provider nor the domain owner maintain any relationship with the
          <br />
          advertisers. In case of trademark issues please contact the domain
          <br />
          owner directly (contact information can be found in "Twitter").
          <br />
          <br />
          <a href="mailto:izhanlaragarcia@gmail.com">izhanlaragarcia@gmail.com</a>

          <a href="https://policies.google.com/privacy?hl=es">Privacy Policy</a>
        </footer>
        <p>Todos los derechos reservados.</p>
      </footer>
    );
  }
}

export default Footer;
