/* ***This is likely a week 3 or 4 level exercise***

Here we have a function called "grader" which takes a number
as an input and uses a series of if/else-if/else statements
to determine what letter grade is associated with it. In the
example provided below, we can see that the number provided as
an input is 76, which is equivalent to a 'C', which we will 
see printed to the console.
*/

function grader(numGrade) {
    if (numGrade >= 0 && numGrade < 60) {
        return "F";
    }
    else if (numGrade >= 60 && numGrade < 70) {
        return "D";
    }
    else if (numGrade >= 70 && numGrade < 80) {
        return "C";
    }
    else if (numGrade >= 80 && numGrade < 90) {
        return "B";
    }
    else if (numGrade >= 90 && numGrade <= 100) {
        return "A";
    }
    else {
        return "What kind of grading system are you using?";
    }
}

console.log(grader(76));