import categories from "./categories";

interface ExpenseFilterProps {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: ExpenseFilterProps) => {
  return (
    <div className="mb-3">
      <select
        className="form-select"
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
