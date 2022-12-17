import "./style.css";

const NASA_APOD_API_URL =
  "https://api.nasa.gov/planetary/apod?api_key=jkdF7tpeeysbc5pzkOTegHc9dnT7vL9Ma34TedeU";

const getData = async () => {
  const response = await fetch(NASA_APOD_API_URL);
  const data = await response.json();
  return data;
};

const appendNasaData = (data) => {
  const NasaData = {
    title: data.title,
  };
  console.log(NasaData);
  return NasaData;
};

const init = async () => {
  const data = await getData();
  appendNasaData(data);
};

init();
