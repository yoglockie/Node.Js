// const cars=[
//     {
//         id:1,
//         carname:"Mercedes",
//         carmodel:"x3",
//         carimage:""
//     },
//     {
//         id:2,
//         carname:"Chevrolet",
//         carmodel:"x3",
//         carimage:""
//     },
    
//     {
//         id:3,
//         carname:"BMW",
//         carmodel:"x3",
//         carimage:""
//     },
//     {
//         id:4,
//         carname:"Ford",
//         carmodel:"x3",
//         carimage:""
//     },
//     {
//         id:5,
//         carname:"Nissan",
//         carmodel:"x3",
//         carimage:""
//     },
//     {
//         id:6,
//         carname:"Cadillac",
//         carmodel:"x3",
//         carimage:""
//     },
//     {
//         id:7,
//         carname:"Audi",
//         carmodel:"x3",
//         carimage:""
//     },
//     {
//         id:8,
//         carname:"Renault",
//         carmodel:"x3",
//         carimage:""
//     },
//     {
//         id:9,
//         carname:"Jeep",
//         carmodel:"x3",
//         carimage:""
//     },
//     {
//         id:10,
//         carname:"Porsche",
//         carmodel:"x3",
//         carimage:""
//     },
//     {
//         id:11,
//         carname:"Lamborghini",
//         carmodel:"x3",
//         carimage:""
//     },
//     {
//         id:12,
//         carname:"Buick",
//         carmodel:"x3",
//         carimage:""
//     },
//     {
//         id:13,
//         carname:"Honda",
//         carmodel:"x3",
//         carimage:""
//     },
//     {
//         id:14,
//         carname:"Tesla",
//         carmodel:"x3",
//         carimage:""
//     },
//     {
//         id:15,
//         carname:"McLaren",
//         carmodel:"x3",
//         carimage:""
//     },
//     {
//         id:16,
//         carname:"Volkswagen",
//         carmodel:"x3",
//         carimage:""
//     },
//     {
//         id:17,
//         carname:"alto",
//         carmodel:"x3",
//         carimage:""
//     },
//     {
//         id:18,
//         carname:"alto",
//         carmodel:"x3",
//         carimage:""
//     },
//     {
//         id:19,
//         carname:"alto",
//         carmodel:"x3",
//         carimage:""
//     },
//     {
//         id:20,
//         carname:"alto",
//         carmodel:"x3",
//         carimage:""
//     },
//     {
//         id:21,
//         carname:"alto",
//         carmodel:"x3",
//         carimage:""
//     },
//     {
//         id:22,
//         carname:"alto",
//         carmodel:"x3",
//         carimage:""
//     },
//     {
//         id:23,
//         carname:"alto",
//         carmodel:"x3",
//         carimage:""
//     },
   
       
// ]


// console.log(cars)

// const joinedRegex = (callback)=>{
//     setTimeout(()=>{
//        console.log("Joined Regex")
//        callback()
//     },2000)
// }

// const learnLinux = (callback)=>{
//     setTimeout(()=>{
//        console.log("Learned Linux")
//        callback()
//     },2000)
// }

// const learnHTML = (callback)=>{
//    setTimeout(()=>{
//       console.log("Learned HTML")
//       callback()
//    },2000)
// }

// const learnCSS = (callback)=>{
//    setTimeout(()=>{
//       console.log("Learned CSS")
//       callback()
//    },2000)
// }

// const learnJavaScript = (callback)=>{
//    setTimeout(()=>{
//       console.log("Learned JavaScript")
//       callback()
//    },2000)
// }

// const learnBootstrap = (callback)=>{
//    setTimeout(()=>{
//       console.log("Learned Bootstrap")
//       callback()
//    },2000)

// }


// const learnMERN = (callback)=>{
//    setTimeout(()=>{
//       console.log("Learned MERN")
//       callback()
//    },2000)
// }


// console.log("Joining training in regex")

//  joinedRegex(()=>{
//      console.log("Going to learn Linux");
//      learnLinux(()=>{
//          console.log("Going to learn HTML")
//          learnHTML(()=>{
//             console.log("Going to learn CSS")
//             learnCSS(()=>{
//                 console.log("Going to learn JavaScript")
//                 learnJavaScript(()=>{
//                     console.log("Going to learn Bootstrap")
//                     learnBootstrap(()=>{
//                         console.log("Going to learn MERN")
//                         learnMERN(()=>{
//                             console.log("Training complete")
//                         })
//                     })
//                 })
//             })
//          })
//      })
// })


const makingBurger=(callback)=>{
    setTimeout(()=>{
          console.log("let's make burger")
          callback()
    },2000)
}

const getBread=(callback)=>{
    setTimeout(()=>{
          console.log("Bread added")
          callback()
    },2000)
}

const getTikki=(bread,callback)=>{
    setTimeout(()=>{
        console.log(`${bread} & tikki added`)
          callback()
    },2000)
}
const addSauce=(bread,tikki,callback)=>{
    setTimeout(()=>{
          console.log(`${bread}, ${tikki} & sauce added`)
          callback()
    },2000)
}

console.log("Making Burger")

makingBurger(()=>{
       
       getBread(()=>{
             
             getTikki("Bread",()=>{
                  
                   addSauce("Bread","Tikki","Sauce","Bread",()=>{
                        
                        console.log("Bread, Tikki, Sauce,  Bread  added")
                        console.log("Burger Complete")
                   })
             })
       })
})
