import Product1 from "../../assets/card-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import Buttons from "../Buttons/Button";

function ProductDescription({visible, onClose}) {

    if (!visible) return null;

    return (
        <div>
            <div className="productDescription">
                <div className="productDescription__details">
                    <div >
                    <FontAwesomeIcon icon={faClose} className="nav__icon" onClick={onClose}/>
                    </div>
                    <div className="image">
                        <img className="image__background" src={Product1} alt="" />
                        <span className="image__action">Editar Imagem</span>
                    </div>
                    <span className="productDescription__action">Remover</span>
                    <hr />

                    <div className="form" >
                        <div className="form__name">
                            <label htmlFor="name">Nome</label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <div className="form__price">
                            <label htmlFor="price">Preço (R$)</label>
                            <input type="text" id="price" name="price" />
                        </div>
                        <div className="form__description">
                            <label htmlFor="description">Descrição</label>
                            <input type="text" id="description" name="description" />
                        </div>
                    </div>

                    <div className="buttons">
                        <Buttons />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription;