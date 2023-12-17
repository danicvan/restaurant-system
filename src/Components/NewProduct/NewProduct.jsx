import React, { useState } from "react";
import Product1 from "../../assets/card-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Buttons from "../Buttons/Button";

function NewProduct({ visible, onClose, onProductAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: Product1, // Default image
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageEdit = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";

    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageDataUrl = reader.result;

          setFormData((prevData) => ({
            ...prevData,
            image: imageDataUrl,
          }));
        };

        reader.readAsDataURL(file);
      }
    });

    fileInput.click();
  };

  const handleSaveClick = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to save data");
      }

      setSuccess(true);
      onClose();

      // Call the callback function to inform the parent component
      onProductAdded();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleModalClose = () => {
    if (success) {
      console.log("Data saved successfully!");
    }
    onClose();
  };

  if (!visible) return null;

  return (
    <div className="modal">
      <div className="productDescription">
        <div className="productDescription__details">
          <div className="productDescription__close">
            <FontAwesomeIcon
              icon={faClose}
              className="nav__icon"
              onClick={handleModalClose}
            />
          </div>
          <div className="image" onClick={handleImageEdit}>
            <img className="image__background" src={formData.image} alt="" />
            <span className="image__action">Editar Imagem</span>
          </div>
          <span className="productDescription__action">Remover</span>
          <div className="form">
            <div className="form__name">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form__price">
              <label htmlFor="price">Preço (R$)</label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
            <div className="form__description">
              <label htmlFor="description">Descrição</label>
              <textarea
                rows={6}
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="buttons">
            <Buttons onCancel={handleModalClose} onSave={handleSaveClick} />
          </div>

          {error && <div className="error-message">{error}</div>}
          {success && (
            <div className="success-message">Data saved successfully!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
