function ProductList({ products, onDelete, language }) {
  const t = {
    id: language === "fa" ? "شناسه" : "ID",
    name: language === "fa" ? "نام محصول" : "Name",
    category: language === "fa" ? "دسته‌بندی" : "Category",
    price: language === "fa" ? "قیمت" : "Price",
    action: language === "fa" ? "عملیات" : "Action",
    delete: language === "fa" ? "حذف" : "Delete",
  };

  return (
    <table>
      <thead>
        <tr>
          {/* one row for show */}
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
            {/* serila number with 1,2,3 */}
            <td style={{ fontWeight: "bold", color: "#6366f1" }}>
              {index + 1}
            </td>
            <td>{p.name}</td>
            <td>{p.category}</td>
            <td>${p.price}</td>
            <td>
              <button className="btn-delete" onClick={() => onDelete(p.id)}>
                {t.delete}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default ProductList;
