function FilterBar({ setSearch, setFilter, language }) {
  const t = {
    search: language === "fa" ? "جستجوی محصولات..." : "Search products...",
    all: language === "fa" ? "همه دسته‌ها" : "All Categories",
  };

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder={t.search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">{t.all}</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
      </select>
    </div>
  );
}
export default FilterBar;
