// Question 2 - Promise

function resolvedPromise() {
    return new Promise((resolve,_) => {
        setTimeout(() => {
            resolve("Resolved: Success message after 500ms");
        }, 500);
    });
}

resolvedPromise()
    .then(result => console.log(result)) 
    .catch(error => console.log(error)); //Doesnt catch anything as there is no reject

function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Rejected: Error message after 500ms");
        }, 500);
    });
}

rejectedPromise()
    .then(result => console.log(result)) // Doesnt do anything as there is no resolve
    .catch(error => console.log(error)); 