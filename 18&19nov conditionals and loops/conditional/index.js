
// syntax for if statement
     // if (condition) {
     // code to be executed if the condition is true
     // }

// expmple programme if statement
  let num = 10;
  if (num > 5) {
    console.log("number is greater than 5");
  }


//  syntax for if-else 
    // if-else(condition) {
            // code to be executed if the condition is true
    // }else {
           // code to be executed if the condition is false
    // }


// exmaple programme if-else statement
let temperature = 25 ;
 if (temperature > 30) {
    console.log ("it is hot today")
 } else {
  console.log ("it's a cool day")
 }


//  syntax for if-else if-else statement
    //  if (condition1) {
          // code to be executed if the condition1 is true
    //  } else if (condition2) {
          // code to be executed if the condition2 is true
    //  }else{
          //  code to be executed if nonr of the condition are true
    //  }

// example programme for if-else if-else statement
    let avg = 70 ;
    if(avg > 75 ) {
      console.log ("Distintion")
    } else if (avg >60){
      console.log ("first")
    }else if (avg >50){
      console.log ("Second")
    }else if (avg >40){
      console.log ("Third")
    }else{
      console.log ("fail")
    }



// syntax for switch programme 
// switch(expression) {
//     case value1:
//         statement1;
//         statement1;
//     break;
     
//     case value2:
//         statement3;
//         statement4;
//     break;
// }


//  example programme for switch
let getStarFromUser = "2"
let starInNumber = parseInt(getStarFromUser)
  switch(starInNumber) {
    case 1:
        console.log("poor");
        break;
    case 2:
        console.log("emm, ok");
        break;
  
     case 3:
        console.log("average");
         break;
     case 4:
          console.log("cool");
          break;
     case 5:
            console.log("great");
            break;
      case 6:
             console.log("awesom");
             break;
      case 7:
             console.log("nailed it");
              break;
    default:
        console.log("it will executed");
  }

    
