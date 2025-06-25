import React, { useState } from 'react';
import img1 from "../assets/maxresdefault.jpg";
import Modal from "./modal/ProductModal";

const Product = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "product-1", price: 100, sale: 10, quantity: 10, img: img1 },
    { id: 2, name: "product-2", price: 100, sale: 10, quantity: 10, img: img1 },
    { id: 3, name: "product-3", price: 100, sale: 10, quantity: 10, img: img1 },
    { id: 4, name: "product-4", price: 100, sale: 10, quantity: 10, img: img1 },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [update, setUpdate] = useState(null);
  const [search, setSearch] = useState("");

  const addProduct = (newProduct) => {
    if (!update) {
      setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    } else {
      const updatedProducts = products.map((item) =>
        item.id === update.id ? { ...item, ...newProduct } : item
      );
      setProducts(updatedProducts);
    }
    setShowModal(false);
    setUpdate(null);
  };

  const updateProduct = (item) => {
    setShowModal(true);
    setUpdate(item);
  };

  const deleteProduct = (item) => {
    const newProducts = products.filter((product) => product.id !== item.id);
    setProducts(newProducts);
  };

  const onClose = () => {
    setShowModal(false);
    setUpdate(null);
  };

  const submit = () => {
    const newProduct = {
      id: products.length + 1,
      name: `product-${products.length + 1}`,
      price: 150,
      sale: 5,
      quantity: 20,
      img: img1,
    };
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <div>
        <button onClick={submit}>Add Product</button>
        <input
          type="text"
          className="font-control"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => setShowModal(true)}>Create Product</button>
        {showModal && (
          <Modal onClose={onClose} onCreate={addProduct} update={update} />
        )}
        {products.filter((item) =>
          search.length === 0 || item.name.includes(search)
        ).length > 0 ? (
          products
            .filter((item) => search.length === 0 || item.name.includes(search))
            .map((item) => (
              <div key={item.id}>
                <img src={item.img} alt={item.name} width={150} />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.sale}</p>
                <p>{item.quantity}</p>
                <button onClick={() => updateProduct(item)}>Update</button>
                <button onClick={() => deleteProduct(item)}>Delete</button>
              </div>
            ))
        ) : (
          <h1>Not Found</h1>
        )}
      </div>
    </div>
  );
};

export default Product;