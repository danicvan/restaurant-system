import React from "react";
import { CardData } from "../CardData/CardData";

function Card() {
    return (
        <>
            {CardData.map((item, index) => {
                return (
                <div key={index}>
                    <img src={item.image} alt={item.title} />
                    <h5 className="card__title">{item.title}</h5>
                    <span className="card__price">{item.price}</span>
                    <div className="card__edit">
                        <span>Editar Prato</span>
                    </div>
                </div>
                )
            })}
        </>
    );  
}

export default Card;
