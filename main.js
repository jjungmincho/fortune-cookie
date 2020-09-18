"use strict";

const title = (document.getElementById("FortuneTitle").innerHTML =
  "Fortune Cookie");

const subTitle = (document.getElementById("FortuneSubtitle").innerHTML =
  "What do you want to know?");

function getImg() {
  let fortuneImg = document.getElementById("paraBg");
  if (fortuneImg.style.display === "none") {
    fortuneImg.style.display = "block";
  } else {
    fortuneImg.style.display = "none";
  }
}
