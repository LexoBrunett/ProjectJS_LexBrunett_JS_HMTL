import "index.html"
import "styles.css"

window.onload = function(){
	let who = ["The dog", "My grandma", "His turtle", "My bird"];
	let action = ["ate", "peed", "crushed", "broke"];
	let what = ["my homework", "the keys", "the car"];
	let when = ["before the class","right on time","when I finished","during my lunch","while I was praying"];

	let excusa =who[rand(who.length)] +" " +action[rand(action.length)]+ " " +what[rand(what.length)]+ " " +when[rand(when.length)] ;


	let excusep = document.querySelector("#excuse");
	excusep.innerHTML = excusa;
}

function rand(length) {
	let number = Math.floor(Math.random() * length);
	return number;
	}

