// asynchronous javascript

console.log(`start`)
function importantPerson(userName,callbacksfunction){
    setTimeout( ()=>{
        callbacksfunction(`Subsbribe ${userName}`)
    },1000);

    // this below function will be executed after the above function fast 
    LikesJavascipt = (topic ,likesJS)=>{
        setTimeout( ()=>{
            likesJS(`Go deep into Javascript ${topic}`)
        },2000)
    }
    whatToDo = (step ,checkup)=>{
        setTimeout( ()=>{
            checkup(`Practice daily  ${step}`)
        },3000)
    }
}
// this above is leading to  callback hell



// we will use call-backs here to avoid undefined
 massage = importantPerson(`Jaffa Isaac`,(massage)=>{console.log(massage)

    desire = LikesJavascipt('Async',study=>{console.log(` ${study}`)
    whatToDo= whatToDo('reading', pract =>{console.log(`${pract}`)
      })
   })
})

console.log(`stop`)

//here we wll use  callbacks to avoid undefined to be printed out in the console
// take note of the so much