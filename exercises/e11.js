// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
  let withdrawArr = [];


  for (let account of array) {
    if (account.withdrawals != undefined) {
      let sum = 0
      for (let i = 0; i < account.withdrawals.length; i++) {
        sum += account.withdrawals[i]
      }
      withdrawArr.push(sum);
    } else if (account.withdrawals == undefined) {
      account.withdrawals = 0
      withdrawArr.push(account.withdrawals);
    }
  }
  return withdrawArr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
