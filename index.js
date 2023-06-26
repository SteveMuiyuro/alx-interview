const color1 = document.getElementById("color-one");
const color2 = document.getElementById("color-two");
const color3 = document.getElementById("color-three");
const color4 = document.getElementById("color-four");
const color5 = document.getElementById("color-five");

const colorPicked = document.getElementById("color-picker");
const schemeSelected = document.getElementById("scheme-selector");

const border = document.getElementById("container");
const heading = document.querySelector("h1");
const button = document.getElementById("btn");
const colorDetails = document.getElementsByClassName("color-details");

const spanOne = document.getElementById("span1");
const spanTwo = document.getElementById("span2");
const spanThree = document.getElementById("span3");
const spanFour = document.getElementById("span4");
const spanFive = document.getElementById("span5");

button.addEventListener("click", () => {
  let colorValue = colorPicked.value.slice(1);
  let modeSelected = schemeSelected.value;
  border.style.borderBlockColor = colorPicked.value;
  heading.style.color = colorPicked.value;
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${modeSelected}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      color1.style.backgroundColor = data.colors[0].hex.value;
      spanOne.innerText = data.colors[0].hex.value;
      spanOne.style.color = data.colors[0].hex.value;
      color2.style.backgroundColor = data.colors[1].hex.value;
      spanTwo.innerText = data.colors[1].hex.value;
      spanTwo.style.color = data.colors[1].hex.value;
      color3.style.backgroundColor = data.colors[2].hex.value;
      spanThree.innerText = data.colors[2].hex.value;
      spanThree.style.color = data.colors[2].hex.value;
      color4.style.backgroundColor = data.colors[3].hex.value;
      spanFour.innerText = data.colors[3].hex.value;
      spanFour.style.color = data.colors[3].hex.value;
      color5.style.backgroundColor = data.colors[4].hex.value;
      spanFive.innerText = data.colors[4].hex.value;
      spanFive.style.color = data.colors[4].hex.value;
    });
});

const copyContent1 = async () => {
  try {
    await navigator.clipboard.writeText(spanOne.innerHTML);
    setTimeout(() => {
      spanOne.innerText = "Copied";
    }, 500);
  } catch (err) {
    spanOne.innerText = "Error";
  }
};

const copyContent2 = async () => {
  try {
    await navigator.clipboard.writeText(span2.innerHTML);
    setTimeout(() => {
      spanTwo.innerText = "Copied";
    }, 500);
  } catch (err) {
    spanTwo.innerText = "Error";
  }
};

const copyContent3 = async () => {
  try {
    await navigator.clipboard.writeText(span3.innerHTML);
    setTimeout(() => {
      spanThree.innerText = "Copied";
    }, 500);
  } catch (err) {
    spanThree.innerText = "Error";
  }
};

const copyContent4 = async () => {
  try {
    await navigator.clipboard.writeText(span4.innerHTML);
    setTimeout(() => {
      spanFour.innerText = "Copied";
    }, 500);
  } catch (err) {
    spanFour.innerText = "Error";
  }
};

const copyContent5 = async () => {
  try {
    await navigator.clipboard.writeText(span5.innerHTML);
    setTimeout(() => {
      spanFive.innerText = "Copied";
    }, 500);
  } catch (err) {
    spanFive.innerText = "Error";
  }
};

span1.addEventListener("click", copyContent1);
span2.addEventListener("click", copyContent2);
span3.addEventListener("click", copyContent3);
span4.addEventListener("click", copyContent4);
span5.addEventListener("click", copyContent5);
