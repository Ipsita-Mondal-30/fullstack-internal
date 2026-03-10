const CATEGORIES = ["All", "Electronics", "Clothing", "Home"];

function CategoryFilter({ value, onChange }) {
  return (
    <div className="category-filter">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          type="button"
          className={`category-btn ${value === category ? "active" : ""}`}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
