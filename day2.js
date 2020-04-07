
//defining the function and passing an argument
function stringerrorChecker(argument) {
    //using the try statement to test the block of code for errors

    try {
        //creating a variable to take in the type of argument using the typeof operator which returns a string of the data type it operates on
        var type = typeof argument;
        //creating a condional statement to return no error if the argument is a string or number which are the required arguments.
        if (type != "string") {
            //using the throw statement to create a custom error when the argument is not a string which is passed on to the catch statement.
            //also outputting the type of the argument
            throw "error:" + type + " is not a string";
        } else {
            //returning valid when the argument is a string
            return "valid";
        };
    }
    //using the catch statement to take in any error pasrsed from the "try" block in the form of an argument err.
    catch (err) {
        //returning  the error
        return err;
    };

};

//testing the error checker by inputting a number
stringerrorChecker(34)
