import { useState } from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import FilterBar from "./components/FilterBar";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("en");

  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
    { id: 2, name: "Shoes", category: "Fashion", price: 50 },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // filter part
  const filteredProducts = products.filter((p) => {
    const searchTerm = search.toLowerCase();
    return (
      (p.name.toLowerCase().includes(searchTerm) ||
        p.id.toString().includes(searchTerm)) &&
      (filter === "All" || p.category === filter)
    );
  });

  return (
    <div className={`container ${language === "fa" ? "rtl" : "ltr"}`}>
      {/* change buttun*/}
      <div
        className="lang-switcher"
        style={{ textAlign: language === "fa" ? "left" : "right" }}
      >
        <button onClick={() => setLanguage("en")}>English</button>
        <button onClick={() => setLanguage("fa")}>فارسی</button>
      </div>

      {/* project name */}
      <h1>
        {language === "fa" ? "رابط کاربری مدیریت کاتالوگ" : "Catalog Admin UI"}
      </h1>

      <section className="admin-section">
        <ProductForm onAdd={addProduct} language={language} />
      </section>

      <div className="divider"></div>

      <section className="admin-section">
        <FilterBar
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          language={language}
        />

        <ProductList
          products={filteredProducts}
          onDelete={deleteProduct}
          language={language}
        />

        {filteredProducts.length === 0 && (
          <p className="empty-message">
            {language === "fa" ? "محصولی پیدا نشد!" : "No products found!"}
          </p>
        )}
      </section>
    </div>
  );
}

export default App;
