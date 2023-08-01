let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = ["before the class","right on time","when I finished","during my lunch","while I was praying"];

let domain;
function generatedomain() {
	let who_word = Math.random() * who.length;
	let action_word = Math.random() * action.length;
	let what_word = Math.random() * what.length;
	let when_word = Math.random() * when.length;

	domain =who[who_word] + action[action_word] + what[what_word] + when[when_word];

	return domain;
}
