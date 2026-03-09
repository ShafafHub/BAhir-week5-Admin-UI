function FilterBar({ setSearch, setFilter, language }) {
  const isRtl = language === "fa";

  const t = {
    search: isRtl ? "جستجوی محصولات..." : "Search products...",
    all: isRtl ? "همه دسته‌ها" : "All Categories",
    electronics: isRtl ? "الکترونیک" : "Electronics",
    fashion: isRtl ? "مد و پوشاک" : "Fashion",
  };

  return (
    <div
      className={`filter-bar ${isRtl ? "rtl-style" : "ltr-style"}`}
      style={{ direction: isRtl ? "rtl" : "ltr" }}
    >
      <input
        type="text"
        placeholder={t.search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <select
        onChange={(e) => setFilter(e.target.value)}
        className="filter-select"
      >
        <option value="All">{t.all}</option>
        <option value="Electronics">{t.electronics}</option>
        <option value="Fashion">{t.fashion}</option>
      </select>
    </div>
  );
}

export default FilterBar;
