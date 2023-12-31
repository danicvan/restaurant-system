import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import ProductDescription from "../ProductDescription/ProductDescription";
import NewProduct from "../NewProduct/NewProduct";

function Card() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMyModal, setShowMyModal] = useState(false);
  const [showNewProduct, setShowNewProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchData();
  }, [showMyModal, showNewProduct]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleProductAdded = () => {
    fetchData();
  };

  const handleEditProduct = async (product) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${product.code}`);
      const responseData = await response.json();
      console.log('Response Data:', responseData);

      setSelectedProduct(responseData);
      setShowMyModal(true);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  return (
    <>
      <div className="card card__new" onClick={() => setShowNewProduct(true)}>
        <div className="card__information">
          <h2 className="card__title">+</h2>
          <h4 className="card__title">Adicionar</h4>
          <h4 className="card__title">Novo Prato</h4>
        </div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : products ? (
        products.map((item) => (
          <div key={item.code} className="card">
            <div className="card__image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="card__information">
              <h5 className="card__title">{item.name}</h5>
              <h5 className="card__price">{item.price}</h5>
            </div>
            <div className="card__action" onClick={() => handleEditProduct(item)}>
              <FontAwesomeIcon icon={faPenToSquare} className="nav__icon" />
              <button>Editar Prato</button>
            </div>
          </div>
        ))
      ) : (
        <p>No data available.</p>
      )}

      <div>
        <ProductDescription
          onClose={() => {
            setShowMyModal(false);
            setSelectedProduct(null);
          }}
          visible={showMyModal}
          product={selectedProduct}
        />
      </div>

      <div>
        <NewProduct
          onClose={() => setShowNewProduct(false)}
          visible={showNewProduct}
          onProductAdded={handleProductAdded}
        />
      </div>
    </>
  );
}

export default Card;
