
// let myPromise = new Promise(function(myResolve, myReject) {
// // "Producing Code" (May take some time)

//   myResolve(); // when successful
//   myReject();  // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//   function(value) { /* code if successful */ },
//   function(error) { /* code if some error */ }
// );

// function timerPromise(duration) {
//     return new Promise((resolve, reject) => {
//         if (duration < 0) {
//             reject(new Error("Duration must be a non-negative number."));
//         } else {
//             setTimeout(() => {
//                 resolve(`Timer finished after ${duration} milliseconds.`);
//             }, duration);
//         }
//     });
// }

// timerPromise(2000)
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error(error);
//     });
  
function fetchData(apiName, duration) {
    return new Promise((resolve, reject) => {
        if (duration < 0) {
            reject(new Error("Duration must be a non-negative number."));
        } else {
            console.log(`Fetching data from ${apiName}...`);
            setTimeout(() => {
                resolve(`Data from ${apiName} retrieved after ${duration} ms.`);
            }, duration);
        }
    });
}


function fetchMultipleData() {
    const apiCalls = [
        fetchData('API_1', 1000),
        fetchData('API_2', 2000),
        fetchData('API_3', 1500),
        fetchData('API_4', 2500),
    ];

    return Promise.all(apiCalls);
}

s
fetchMultipleData()
    .then(results => {
        console.log("All data fetched successfully:");
        results.forEach(result => {
            console.log(result);
        });
    })
    .catch(error => {
        console.error("An error occurred:", error.message);
    });
