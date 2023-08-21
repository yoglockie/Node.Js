//async await

async function placeOrder() {
    await delay(2000)
    console.log("Order taken")
}
function startProduction() {
    
    console.log("Starting production")
}
async function printId() {
    await delay(2000)
    console.log("ID printed")
}
async function printName() {
    await delay(2000)
    console.log("Name printed")
}
async function printDesc() {
    await delay(2000)
    console.log("Description printed")
}

function delay(ms) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
              resolve()
        },ms)
    })
}



async function main() {
   console.log("Order is now going to take place : ")
   await placeOrder();
   console.log("Production is going to start")
   startProduction();
   console.log("ID is being printed")
   await printId();
   console.log("Product name printing")
   await printName();
   console.log("Printing Product description")
   await printDesc(); 
}


main();

