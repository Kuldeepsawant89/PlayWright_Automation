
//lines are executing in sequence and waiting for the previous line to complete before moving on to the next line.
//sychronous mode -> syschronous code is executed in a single thread, and each operation must complete before the next one begins. This can lead to blocking behavior if an operation takes a long time to complete, as it will prevent the execution of subsequent code until it finishes.
//Asynchronous mode -> asynchronous code allows for non-blocking behavior, where operations can be initiated and then the program can continue executing other code while waiting for those operations to complete. This is often achieved using callbacks, promises, or async/await syntax in JavaScript.
console.log("tc1")
console.log("tc2")
console.log("tc3")  
console.log("tc4")
console.log("tc5")

//asynchronous code example using setTimeout to simulate a delay
console.log("tc1")
setTimeout(() => {
    console.log("tc2")
}, 2000); // Simulate a delay of 2 seconds
console.log("tc3")  
console.log("tc4")
console.log("tc5")

//nested callbacks
console.log("tc1")  
setTimeout(() => {
    console.log("tc2")
    setTimeout(() => {
        console.log("tc3")  
        setTimeout(() => {
            console.log("tc4")
            setTimeout(() => {
                console.log("tc5")
            }, 2000);
        }, 2000);
    }
    , 2000);
}, 2000);



