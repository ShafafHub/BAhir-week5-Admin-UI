import { useState } from "react";

function ProductForm({ onAdd, language }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const t = {
    title: language === "fa" ? "افزودن محصول جدید" : "Add New Product",
    namePlace: language === "fa" ? "نام محصول" : "Product Name",
    catPlace: language === "fa" ? "دسته‌بندی" : "Category",
    pricePlace: language === "fa" ? "قیمت" : "Price",
    addBtn: language === "fa" ? "افزودن" : "Add Product",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category || !price) return;
    onAdd({ name, category, price: Number(price) });
    setName("");
    setCategory("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{t.title}</h3>
      <input
        type="text"
        placeholder={t.namePlace}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder={t.catPlace}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder={t.pricePlace}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">{t.addBtn}</button>
    </form>
  );
}
export default ProductForm;
