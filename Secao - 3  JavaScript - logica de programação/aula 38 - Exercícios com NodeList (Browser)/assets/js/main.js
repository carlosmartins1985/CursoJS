const paragrafos = document.querySelector(".paragrafo");

const ps = paragrafos.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);

const backgroundColorBody = estilosBody.backgroundColor;

const textColor = "#FFFFFF";

console.log(backgroundColorBody);

for (p of ps) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = textColor;
}
