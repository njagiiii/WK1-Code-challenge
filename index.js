 
 //create a variable
 let marks=60;
 let grade;

 //switch between the grades

 if(marks  > 100){
    console.log("Invalid choice");
    
   }
 else{
    switch(true){
        case marks > 79:
            console.log(grade ="A");
            break;

            case marks >=60 && marks <=79:
             console.log(grade ="B");
                break;

            case marks >=50 && marks <=59:
                console.log(grade ="C");
                 break;

            case marks >=40 && marks <=49:
                console.log(grade ="D");
                  break;

            default:
                console.log(grade ="E");
                break;
     }
 }

                       

    