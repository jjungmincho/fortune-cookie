
const title = (document.getElementById("FortuneTitle").innerHTML = "Fortune Cookie");

const subTitle = (document.getElementById("FortuneSubtitle").innerHTML = "What do you want to know?");

function getImg() {
  let fortuneImg = document.getElementById("paraBg");
  if (fortuneImg.style.display === "none") {
    fortuneImg.style.display = "block";
  } else {
    fortuneImg.style.display = "none";
  }
}

getImg();

const text = [`Today it's up to you to create the peacefulness you long for.`, `A friend asks only for your time not your money.`, `If you refuse to accept anything but the best, you very often get it.`, `A smile is your passport into the hearts of others.`];
const randomText = Math.floor(Math.random() * text.length);
document.getElementById("paraText").innerHTML = text[randomText];