# fortune-cookie

I created a simple responsive fortune cookie website using HTML, CSS and JavaScript. By refreshing the site, you will have four different fortune cookie quotes when you click the image. 

---
## Table of Content
- [Technologies](https://github.com/jjessicacho/fortune-cookie#technologies)
- [Features](https://github.com/jjessicacho/fortune-cookie#features)
- [Sources](https://github.com/jjessicacho/fortune-cookie#sources)

---

## Technologies
Languages and tools:
- HTML 5
- CSS 3
- JavaScript (ES6)

---

## Features
### Title & Subtitle
![title](https://user-images.githubusercontent.com/40417828/103501886-6ec25f80-4e04-11eb-8f97-42e6e4661620.png)
```js
const title = (document.getElementById("FortuneTitle").innerHTML = "Fortune Cookie");

const subTitle = (document.getElementById("FortuneSubtitle").innerHTML = "What do you want to know?");
```

### Image 
![image](https://user-images.githubusercontent.com/40417828/103501894-76820400-4e04-11eb-92ae-a8b52afc727c.png)
```js
function getImg() {
  let fortuneImg = document.getElementById("paraBg");
  if (fortuneImg.style.display === "none") {
    fortuneImg.style.display = "block";
  } else {
    fortuneImg.style.display = "none";
  }
}

getImg();
```

### Quotes
![quote](https://user-images.githubusercontent.com/40417828/103501903-7da91200-4e04-11eb-839e-f1535a534913.png)
```js
const text = [`Today it's up to you to create the peacefulness you long for.`, `A friend asks only for your time not your money.`, `If you refuse to accept anything but the best, you very often get it.`, `A smile is your passport into the hearts of others.`];
const randomText = Math.floor(Math.random() * text.length);
document.getElementById("paraText").innerHTML = text[randomText];
```

---

## Sources

- Quotes: [Fortune Cookie Message](http://www.fortunecookiemessage.com/)
- Font: [Google font - Lemonada](https://fonts.google.com/specimen/Lemonada?query=Lemonada)
