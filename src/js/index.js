/* eslint-disable */
import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  let sentence =
    who[getRandom(who.length)] +
    " " +
    action[getRandom(action.length)] +
    " " +
    what[getRandom(what.length)] +
    " " +
    when[getRandom(when.length)];

  let excuseSpan = document.querySelector("#excuse");
  excuseSpan.innerHTML = sentence;
};

function getRandom(arrayLength) {
  let number = Math.floor(Math.random() * arrayLength);
  return number;
}
