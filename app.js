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

// Self code exercise.
alert(`Hi my name is ${userName}`);
alert(`I am ${age} yrs. old.`);

//exercise to access the elements of our javascript array. 
alert(`My hobbies are : ${hobbies[0]}, ${hobbies[1]}, ${hobbies[2]}`);

// exercise to access the properties of our javascript object
alert(`I am currently working as a ${job.title} in ${job.place}, and I make ${job.salary} a month.`);
// end of self code exercise.