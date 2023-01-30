
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  // Your code goes here...
  let hasA = [];
  let noA = [];
  let combined = [];

  for (let i = 0; i < array.length; i++) {
    let name = array[i];
    for (let j = 0; j < name.length; j++) {
      if (name[j].toLowerCase() === 'a') {
        hasA.push(name);
      }
    }
  }


  for (let n = 0; n < array.length; n++) {
    let match = false;
    for (let m = 0; m < hasA.length; m++) {
      if (array[n] == hasA[m]) {
        match = true;
        break;
      }
    }
    if (!match) {
      noA.push(array[n]);
    }
  }

  combined.push(hasA);
  combined.push(noA);

  return (combined);
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
