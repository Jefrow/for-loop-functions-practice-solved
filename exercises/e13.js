
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // Your code goes here...

  let accountsArr = [];
  for (let account of array) {
    if (!account.deposits) {
      accountsArr.push(account);
    } else {
      let depositSum = 0; 
      for (let n = 0; n < account.deposits.length; n++){
        depositSum += account.deposits[n]
      }
      if(depositSum < 2000) {
        accountsArr.push(account);
      }
    }
  }
  return accountsArr;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
