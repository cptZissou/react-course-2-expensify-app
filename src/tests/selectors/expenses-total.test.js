import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

// const getExpensesTotal = (expenses) => {
//   let amounts = []; 
//   const newExpenses = expenses.map((expense) => {
//     amounts.push(expense.amount);
//   });
//   const reducer = (acc, cur) => acc + cur;
//   return amounts.reduce(reducer, 0); 
// };

// const total = getExpensesTotal(expenses);
// console.log(total);

test('should return 0 if no expenses', () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
  const res = selectExpensesTotal([expenses[0]]);
  expect(res).toBe(195);
});

test('should correctly add up multiple expenses', () => {
  const res = selectExpensesTotal(expenses);
  expect(res).toBe(114195);
});
