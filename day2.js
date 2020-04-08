//defining the function to check if the argument is an error or not
function errorChecker(argument) {
    //conditional if statement to check if the argument is an instance of the javascript error class using the instanceof operator
    if (argument instanceof Error) {
        //returning a message to signify that the argument is an error 
        return "Error"
        //conditional statement that works when the argument is not of the error class
    } else {
        //returning a message to signify it is  not an error
        return "not an Error"
    };
};

errorChecker(new Error('testing')) //returns 'Error'
errorChecker(34) //returns "not an error"