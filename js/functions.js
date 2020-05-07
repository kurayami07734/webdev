let myAccount = {
  name: "Aditya Ghidora",
  balance: 100,
  income: 0,
};

function addIncome(account, income) {
  account.income += income;
}
function reset(account) {
  account.income = 0;
  account.balance = 0;
}
function getAccountSummary(account) {
  console.log(
    `{account.name} has {account.balance} and {account.income} income`
  );
}
