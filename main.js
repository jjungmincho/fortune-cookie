"use strict";

const title = (document.getElementById("FortuneTitle").innerHTML =
  "Fortune Cookie");

const subTitle = (document.getElementById("FortuneSubtitle").innerHTML =
  "What do you want to know?");

function fortuneImg() {
  let x = document.getElementById("paraBg");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
