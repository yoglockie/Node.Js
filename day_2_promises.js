//promises

const placeOrder=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
              console.log("Order placing")
               resolve()
        },2000)
    }) 
}
const startProduction=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
              console.log("Starting production")
               resolve()
        },2000)
    }) 
}
const printId=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
              console.log("ID printed")
               resolve()
        },2000)
    }) 
}
const printName=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
              console.log("Name printed")
               resolve()
        },2000)
    }) 
}
const printDesc=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
              console.log("Description printed")
               resolve()
        },2000)
    }) 
}

const complete=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
              console.log("Order Completed")
               reject()
        },2000)
    }) 
}


placeOrder()
   .then(()=>{
         console.log("Production is going to start")
         return startProduction()
   })
   .then(()=>{
    console.log("ID is being printed")
    return printId()
   })
   .then(()=>{
       console.log("Product name printing")
       return printName()
   })
   .then(()=>{
       console.log("Printing Product description")
       return printDesc()
   })
   .then(()=>{
       console.log("Ordrer Completing")
       return complete()
   })
   .catch((error)=>{
        console.log("Error",error)
   })





