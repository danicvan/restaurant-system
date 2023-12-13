import Product1 from "../../assets/card-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClose, faL,
} from "@fortawesome/free-solid-svg-icons";
import Buttons from "../Buttons/Button";
import { useState } from "react";

function ProductDescription({ visible, onClose }) {

    const handleModalClose = () => {
        onClose();
    }

    if (!visible) return null;

    return (
        <div className="modal">
            <div className="productDescription">
                <div className="productDescription__details">
                    <div className="productDescription__close">
                        <FontAwesomeIcon icon={faClose} className="nav__icon" onClick={onClose} />
                    </div>
                    <div className="image">
                        <img className="image__background" src={Product1} alt="" />
                        <span className="image__action">Editar Imagem</span>
                    </div>
                    <span className="productDescription__action">Remover</span>

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
                            <textarea rows={6} id="description" name="description" />
                        </div>
                    </div>

                    <div className="buttons">
                        <Buttons onCancel={handleModalClose}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription;