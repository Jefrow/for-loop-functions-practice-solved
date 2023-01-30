
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let wrongBalance = []

  for (let i = 0; i < array.length; i++) {

    let accounts = array[i];
    let withdrawals = accounts.withdrawals
    let deposits = accounts.deposits

    if (withdrawals != undefined && deposits != undefined) {
      let withdrawalSum = withdrawals.reduce((withdrawals, currVal) => withdrawals + currVal, 0);
      let depositSum = deposits.reduce((deposit, currVal) => deposit + currVal, 0);
      if (depositSum - withdrawalSum != accounts.balance) {
        wrongBalance.push(accounts);
      }
    } else if (withdrawals == undefined && deposits != undefined) {
      let withdrawalSum = 0;
      let depositSum = deposits.reduce((deposit, currVal) => deposit + currVal, 0);
      if (depositSum - withdrawalSum != accounts.balance) {
        wrongBalance.push(accounts);
      }
    } else if (withdrawals != undefined && deposits == undefined) {
      let withdrawalSum = withdrawals.reduce((withdrawal, currVal) => withdrawal + currVal, 0)
      let depositSum = 0;
      if (depositSum - withdrawalSum != accounts.balance) {
        wrongBalance.push(accounts);
      }
    } else if (withdrawals == undefined && deposits == undefined) {
      let depositSum = 0;
      let withdrawalSum = 0;
      if (depositSum - withdrawalSum != accounts.balance) {
        wrongBalance.push(accounts)
      }
    }

  }
  return wrongBalance
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
