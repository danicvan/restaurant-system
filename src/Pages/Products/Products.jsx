import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

import Card from "../../Components/Card/Card";
import Buttons from "../../Components/Buttons/Button";

function Products() {
  return (
    <>
      <div className="container">
        <h2>Product Description</h2>
        <div className="container__table">
          <div className="container__categories">
            <h4>
              <FontAwesomeIcon icon={faFilter} className="nav__icon" />
              <span>Gerenciar Categorias</span>
            </h4>
          </div>

          <div className="option">
            <ul className="option__list">
              <li className="active">
                <h4>Pratos Quentes</h4>
                <span></span>
              </li>
              <li>
                <h4>Pratos Frios</h4>
                <span></span>
              </li>
              <li>
                <h4>Sopas</h4>
                <span></span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container__options">
          <div className="cards">
            <Card />
          </div>
        </div>
        <div className="buttons">
          <Buttons/>
        </div>
      </div>
    </>
  )
}

export default Products