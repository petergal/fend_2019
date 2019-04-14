/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  // your code goes here
  printAccountSummary: function() {
    return 'Welcome!\nYour balance is currently $' + savingsAccount.balance +
      ' and your interest rate is ' + this.interestRatePercent + '%.'
  }
};

console.log(savingsAccount.printAccountSummary());

console.log(savingsAccount.balance);
console.log(savingsAccount["balance"]);
console.log(savingsAccount.withdraw(50));
console.log(savingsAccount);
//And, with function expressions, you only need to use the variable name where the function is stored to call the function.
