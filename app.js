let Result = document.querySelector('.result');
let firstName = [
    "Zero To Pro",
    "Beginer to Advance",
    "Easy Learning Path",
    "Pro Coding",
    "Pro Coding With LC",
    "LC",
    "Find Your Goal With LC",
    "Best Caurse For",
    "To Earn Must Learn",
    "Learn",
    "Fun & Learn",
    "Easy To Learn",
    "Not So Hard"
];
let lastName = [
    "Design",
    "Web Design",
    "Development",
    "Web Development",
    "Programing",
    "Web Programing"
];
function getRandomNumber(min, max) {
	let a = max - min + 1;
	let b = Math.random() * a;
	let result = Math.floor(b) + min;
	return result;
};
function genarateName(){
    let firstNameIndex = getRandomNumber(0, firstName.length-1);
    let lastNameIndex = getRandomNumber(0, lastName.length-1);
    Result.innerHTML = firstName[firstNameIndex] + "<br>" + lastName[lastNameIndex];
};