// Q6. ans

// Callback Hell :-
// asynchronous programming where multiple nested callbacks make the code difficult to read, understand, and maintain.
//  It occurs when you have multiple asynchronous operations dependent on each other, leading to deeply nested callbacks.

asyncOperation1(function (result1) {
    asyncOperation2(result1, function (result2) {
      asyncOperation3(result2, function (result3) {
        // More nested callbacks...
      });
    });
  });



  
//   Using Promises:
//   Promises provide a more organized and readable way to handle asynchronous operations.
//    With promises, you can chain .then() and .catch() callbacks to handle the results or errors.

asyncOperation1()
  .then((result1) => {
    return asyncOperation2(result1);
  })
  .then((result2) => {
    return asyncOperation3(result2);
  })
  .then((result3) => {
    // Do something with the final result (result3)
  })
  .catch((error) => {
    // Handle errors if any of the promises reject
  });


//   Using Async/Await:
// Async/await is a more modern and concise syntax for handling asynchronous code.
//  It allows you to write asynchronous code in a more synchronous style, making it easier to read and maintain.

async function myAsyncFunction() {
    try {
      const result1 = await asyncOperation1();
      const result2 = await asyncOperation2(result1);
      const result3 = await asyncOperation3(result2);
      // Do something with the final result (result3)
    } catch (error) {
      // Handle errors if any of the promises reject
    }
  }
  