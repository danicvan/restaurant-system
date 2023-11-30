import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import { CardData } from "../CardData/CardData";
import { ProductDescription } from "../ProductDescription/ProductDescription";

import { useState } from "react";

function Card() {

    const [showMyModal, setShowMyModal] = useState(false);

    return (
        <>
            {CardData.map((item, index) => {
                return (
                    <div key={index} className="card">
                        <div className="card__information">
                            <img className="card__image" src={item.image} alt={item.title} />
                            <h5 className="card__title">{item.title}</h5>
                            <h5 className="card__price">{item.price}</h5>
                        </div>
                        <div className="card__action">
                            <FontAwesomeIcon icon={faPenToSquare} className="nav__icon" />
                            <button onClick={() => setShowMyModal(true)}>Editar Prato</button>
                        </div>
                    </div>
                )
            })}

            <ProductDescription visible={showMyModal} />
        </>
    );
}

export default Card;
