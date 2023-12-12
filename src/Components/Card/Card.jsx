import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import { CardData } from "../CardData/CardData";

import { useState } from "react";
import ProductDescription from "../ProductDescription/ProductDescription";
import NewProduct from "../NewProduct/NewProduct";

function Card() {

    const [showMyModal, setShowMyModal] = useState(false);
    const [showNewProduct, setShowNewProduct] = useState(false);
    const handleOnClose = () => setShowMyModal(false);
    const handleOnCloseNewProduct = () => setShowNewProduct(false);

    return (
        <>
            <div className="card card__new" onClick={() => setShowNewProduct(true)}>
                <div className="card__information">
                    <h2 className="card__title">+</h2>
                    <h4 className="card__title">Adicionar</h4>
                    <h4 className="card__title">Novo Prato</h4>
                </div>
            </div>

            {CardData.map((item, index) => {
                return (
                    <div key={index} className="card">
                        <div className="card__information">
                            <img className="card__image" src={item.image} alt={item.title} />
                            <h5 className="card__title">{item.title}</h5>
                            <h5 className="card__price">{item.price}</h5>
                        </div>
                        <div className="card__action" onClick={() => setShowMyModal(true)}>
                            <FontAwesomeIcon icon={faPenToSquare} className="nav__icon" />
                            <button >Editar Prato</button>
                        </div>
                    </div>
                )

            })}
            {/* </div> */}

            <div>
                <ProductDescription onClose={handleOnClose} visible={showMyModal} />
            </div>

            <div>
                <NewProduct onClose={handleOnCloseNewProduct} visible={showNewProduct} />
            </div>

        </>
    );
}

export default Card;
