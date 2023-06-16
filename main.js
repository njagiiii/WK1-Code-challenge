
//define a function

function car(){
   return function(speed){  //return the main function from this function
        const limit = 70;  //initialize the limit local variable
        const kilometers = 5; // initialize kilometer local variable

        if (speed <= limit){    
            return "OK"        // give a condition that checks the speed
        }
        else{
            const result=(speed - limit)/kilometers;
                                                          //if the speed is above limit minus then divide
            if(result <=12 ){
                return `points: ${result}`;
            }
            else{
                return "license Suspended";   //check the points and output based by the condition 
            }
        }
   }
}
// call the main function and the return function
console.log(car()(80));