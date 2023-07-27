let age = 30;
let userName = "Jed";
let hobbies = ['Music', 'Programming', 'Riding'];
// syntax to create a javascript object:
let job = {
    title: 'Web Developer',
    place: 'Singapore',
    salary: 3000
};
// end of syntax on how to create a javascript object.

// to access the properties of our javascript object we use must first call the variable name, then use the dot(.) notation, then select the property of our javascript object
// that we wish to display.
// eg: alert(`I am currently working as a ${job.title} in ${job.place}, and I make ${job.salary} a month.`);

// javascript operators:-
// + :- this can be used to add up numbers, and can also be used to concatenate strings.
//      eg. 1 + 1 / 'string' + 'sample'
//
// - :- this can be used to substract numbers with each other.
//      eg. 1 - 1
//
// * :- this can be used to multiply numbers with each other.
//      eg. 1 * 1
//
// / :- this can be used to divide numbers with each other.
//      eg. 1 / 1
//

let adultYears = age - 18;

// -------------------------------------------------------------------------
// Self code exercise section.
alert(`Hi my name is ${userName}`);
alert(`I am ${age} yrs. old.`);

//exercise to access the elements of our javascript array. 
alert(`My hobbies are : ${hobbies[0]}, ${hobbies[1]}, ${hobbies[2]}`);

// exercise to access the properties of our javascript object
alert(`I am currently working as a ${job.title} in ${job.place}, and I make ${job.salary} a month.`);

alert(`I have lived ${adultYears} adult years.`);
// end of self code exercise section.
// -------------------------------------------------------------------------