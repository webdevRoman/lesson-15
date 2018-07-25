var age = 20;
var name = "Семён";
var subscr = true;

console.log("Возраст: " + age);
console.log("Имя: " + name);
console.log("Подписка: " + subscr);

// function access(x, z) {
// 	if (x < 18) {
// 		console.log("Вы не допущены на сайт!");
// 	} else if (z != true) {
// 		console.log("Вы не допущены на сайт!");
// 	} else {
// 		console.log("Вы допущены на сайт!");
// 	}
// }

function access() {
	alert("Вы допущены на сайт!");
	console.log("Вы допущены на сайт!");
}

if (age < 18) {
		alert("Вы не допущены на сайт!");
		console.log("Вы не допущены на сайт!");
	} else if (subscr != true) {
		alert("Вы не допущены на сайт!");
		console.log("Вы не допущены на сайт!");
	} else {
		access();
	}

// access(age, subscr);