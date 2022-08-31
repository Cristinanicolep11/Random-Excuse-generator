/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right in time",
    "when i finished",
    "during my lunch",
    "while i was praying"
  ];

  const getRandomNumber = max => Math.floor(Math.random() * max);

  const getRandomExcuse = () =>
    `${who[getRandomNumber(who.length)]} ${
      action[getRandomNumber(action.length)]
    } ${what[getRandomNumber(what.length)]} ${
      when[getRandomNumber(when.length)]
    }`;

  document.getElementById("random.excuse").innerText = getRandomExcuse();

  console.log("Excuse");
};
