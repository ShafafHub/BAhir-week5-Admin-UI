function ProductList({ products, onDelete, language }) {
  const isRtl = language === "fa";

  const t = {
    id: isRtl ? "ردیف" : "Row",
    name: isRtl ? "نام محصول" : "Product Name",
    category: isRtl ? "دسته‌بندی" : "Category",
    price: isRtl ? "قیمت" : "Price",
    action: isRtl ? "عملیات" : "Action",
    delete: isRtl ? "حذف" : "Delete",
    empty: isRtl ? "هیچ محصولی یافت نشد!" : "No products found!",
    currency: isRtl ? "تومان" : "$",
  };

  // function for style
  const getCategoryStyle = (cat) => {
    const colors = {
      Electronics: "#3b82f6",
      Fashion: "#ec4899",
      default: "#6b7280",
    };
    return {
      backgroundColor: colors[cat] || colors.default,
      color: "white",
      padding: "2px 8px",
      borderRadius: "12px",
      fontSize: "0.85em",
    };
  };

  if (products.length === 0) {
    return <p style={{ textAlign: "center", padding: "20px" }}>{t.empty}</p>;
  }

  return (
    <div
      className="table-container"
      style={{ direction: isRtl ? "rtl" : "ltr" }}
    >
      <table className="custom-table">
        <thead>
          <tr>
            <th>{t.id}</th>
            <th>{t.name}</th>
            <th>{t.category}</th>
            <th>{t.price}</th>
            <th>{t.action}</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => (
            <tr key={p.id}>
              <td style={{ fontWeight: "bold", color: "#6366f1" }}>
                {index + 1}
              </td>
              <td>{p.name}</td>
              <td>
                <span style={getCategoryStyle(p.category)}>{p.category}</span>
              </td>
              <td>
                {/* numeric farmat */}
                {isRtl
                  ? `${p.price.toLocaleString("fa-IR")} ${t.currency}`
                  : `${t.currency}${p.price.toLocaleString()}`}
              </td>
              <td>
                <button className="btn-delete" onClick={() => onDelete(p.id)}>
                  {t.delete}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
