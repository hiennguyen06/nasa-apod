import "./style.css";

// const today = new Date();

// const yesterday = new Date(today);
// yesterday.setDate(today.getDate() - 1);

// const date = today.toISOString().substring(0, 10);
function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

const today = new Date();
let fetchDate = formatDate(today);

const getData = async () => {
  const NASA_APOD_API_URL = `https://api.nasa.gov/planetary/apod?api_key=jkdF7tpeeysbc5pzkOTegHc9dnT7vL9Ma34TedeU&date=${fetchDate}`;

  const response = await fetch(NASA_APOD_API_URL);
  const data = await response.json();
  return data;
};

function appendData(data) {
  const image = document.createElement("div");
  image.classList.add("image-wrapper");
  image.innerHTML = ` <img src=${data.hdurl} /> `;

  const appWrapper = document.querySelector("#app");
  appWrapper.append(image);
}

const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

function addOneDay() {
  remove();
  const date = new Date(fetchDate);
  date.setDate(date.getDate() + 1);
  const nextDayStr = formatDate(date);
  fetchDate = nextDayStr;
  init();
}

function remove() {
  const imageWrapper = document.querySelector(".image-wrapper");
  if (!imageWrapper) return;
  imageWrapper.remove();
}

function subtractOneDay() {
  remove();
  const date = new Date(fetchDate);
  date.setDate(date.getDate() - 1);
  const nextDayStr = formatDate(date);
  fetchDate = nextDayStr;
  init();
}

const init = async () => {
  const data = await getData();
  console.log(data);
  appendData(data);
};

nextBtn.addEventListener("click", addOneDay);
previousBtn.addEventListener("click", subtractOneDay);

init();
