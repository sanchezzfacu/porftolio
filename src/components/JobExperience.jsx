import "../css/JobExperience.css";
import JobExperienceSvg from "../svg/Programming-rafiki.svg";
import CircleLogo from "./CircleLogo";
import { ReactSVG } from "react-svg";

function JobExperience() {
  return (
    <div className="job-experience-container">
      <h1 className="job-experience-title">
        <CircleLogo />
        Experiencia Laboral
      </h1>

      <div className="job-experience-content">
        <div className="job-experience-info">
          <div className="job">
            <h1>Frontend Developer - Ontiime.</h1>
            <h3>oct. 2022 - jul. 2023</h3>
            <ul>
              <li>
                - Desarrollo desde cero de la estructura del proyecto para tener
                una base escalable.
              </li>
              <li>- Implementación de los wireframes del equipo de diseño.</li>
              <li>
                - Creación integral de la versión mobile del producto siguiendo
                criterios autónomos sin documentación.
              </li>
              <li>
                - Refactorización de estilos y lógica de los componentes para
                mejorar la calidad del código.
              </li>
              <li>
                - Contribuciones en la generación de ideas para cubrir detalles
                del producto que requerían atención.
              </li>
            </ul>
          </div>

          <div className="job">
            <h1>Frontend Developer Freelance - Gamila Traslados.</h1>
            <h3>jul. 2022 - sept. 2022</h3>
            <ul>
              <li>- Definí la estructura central del proyecto.</li>
              <li>
                - Investigación de las necesidades del cliente para desarrollar
                una solución que impulsara su capacidad de alcanzar una
                audiencia más amplia y generar mayores ventas.
              </li>
              <li>
                - Buenas practicas de SEO para obtener un buen posicionamiento
                en el buscador.
              </li>
              <li>
                - Creación e implementación del diseño de la landing page.
              </li>
            </ul>
          </div>

          <div className="job">
            <h1>Full Stack Developer Freelance - MyS Accesorios.</h1>
            <h3>feb. 2022 - abr. 2022</h3>
            <ul>
              <li>- Desarrollo de un e-commerce para generar ventas online.</li>
              <li>
                - Generación de un panel de control para publicar/eliminar
                productos y crear/eliminar categorías.
              </li>
              <li>
                - Creación e implementación del diseño de la landing page.
              </li>
              <li>
                - Refactorización de estilos y lógica de los componentes para
                mejorar la calidad del código.
              </li>
            </ul>
          </div>
        </div>

        <div className="svg-job-experience">
          <ReactSVG src={JobExperienceSvg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default JobExperience;
