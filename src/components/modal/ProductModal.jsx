import React, { useState } from "react";

const Modal = ({ onClose, onCreate, update }) => {
  const [form, setForm] = useState({
    name: update ? update.name : "",
    sale: update ? update.sale : "",
    price: update ? update.price : "",
    quantity: update ? update.quantity : "",
    img: update ? update.img : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleCreate = () => {
    const { name, sale, price, quantity } = form;
    if (name && price && sale && quantity) {
      onCreate(form);
      onClose();
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {update ? <h2>Update Product</h2> : <h2>Create Product</h2>}
        <br />
        {form.img && <img src={form.img} alt="preview" width="100" />}
        <br />
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Product Name"
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          name="sale"
          value={form.sale}
          placeholder="Product Sale (%)"
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          name="price"
          value={form.price}
          placeholder="Product Price"
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          name="quantity"
          value={form.quantity}
          placeholder="Product Quantity"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="img"
          value={form.img}
          placeholder="Image URL"
          onChange={handleChange}
        />
        <br />
        <button onClick={handleCreate}>{update ? "Update" : "Create"}</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(99, 233, 37, 0.73)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(42, 165, 28, 0.84)",
  },
};

export default Modal;