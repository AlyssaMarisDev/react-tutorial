import { FormData } from "./ExpenseForm";

interface ExpenseTableProps {
  expenses: FormData[];
  onDelete: (expense: FormData) => void;
}

const ExpenseTable = ({ expenses, onDelete }: ExpenseTableProps) => {
  const handleDelete = (expense: FormData) => {
    onDelete(expense);
  };

  if (expenses.length === 0) return null;

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="text-center">Description</th>
            <th className="text-center">Amount</th>
            <th className="text-center">Category</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={expense.description + index}>
              <td className="text-center">{expense.description}</td>
              <td className="text-center">${expense.amount.toFixed(2)}</td>
              <td className="text-center">{expense.category}</td>
              <td className="text-center">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(expense)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={4}></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className="text-center">Total</td>
            <td className="text-center">
              $
              {expenses
                .reduce((acc, expense) => acc + expense.amount, 0)
                .toFixed(2)}
            </td>
            <td />
            <td />
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseTable;
