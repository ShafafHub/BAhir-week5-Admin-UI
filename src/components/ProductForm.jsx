import { useState } from "react";

function ProductForm({ onAdd, language }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
  });

  const isRtl = language === "fa";
  const t = {
    title: isRtl ? "افزودن محصول جدید" : "Add New Product",
    namePlace: isRtl ? "نام محصول" : "Product Name",
    catPlace: isRtl ? "انتخاب دسته..." : "Select Category...",
    pricePlace: isRtl ? "قیمت (تومان/دلار)" : "Price",
    addBtn: isRtl ? "افزودن به لیست" : "Add Product",
    electronics: isRtl ? "الکترونیک" : "Electronics",
    fashion: isRtl ? "مد و پوشاک" : "Fashion",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.category || !formData.price) {
      alert(isRtl ? "لطفاً تمام فیلدها را پر کنید" : "Please fill all fields");
      return;
    }
    onAdd({ ...formData, price: Number(formData.price) });
    setFormData({ name: "", category: "", price: "" }); // ریست کردن فرم
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ direction: isRtl ? "rtl" : "ltr" }}
      className="product-form"
    >
      <h3>{t.title}</h3>
      <input
        name="name"
        type="text"
        placeholder={t.namePlace}
        value={formData.name}
        onChange={handleChange}
      />
      <select name="category" value={formData.category} onChange={handleChange}>
        <option value="">{t.catPlace}</option>
        <option value="Electronics">{t.electronics}</option>
        <option value="Fashion">{t.fashion}</option>
      </select>
      <input
        name="price"
        type="number"
        placeholder={t.pricePlace}
        value={formData.price}
        onChange={handleChange}
      />
      <button type="submit">{t.addBtn}</button>
    </form>
  );
}

export default ProductForm;
