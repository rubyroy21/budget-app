import ExpenseItem from "./ExpenseItem";

/* eslint-disable react/prop-types */
const Table = ({ expenses, showBudget = true }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {[
              "Name",
              "Amount",
              "Date",
              showBudget ? "Budget" : "",
              "Actions",
            ].map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              {/* {expense.name} */}
              <ExpenseItem expense={expense} showBudget={showBudget} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
