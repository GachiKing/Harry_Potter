const main = document.querySelector("main");
let data;
const btnAll = document.querySelector(".all");
const btnGryffindor = document.querySelector(".gryffindor");
const btnSlytherin = document.querySelector(".slytherin");
const btnHufflepuff = document.querySelector(".hufflepuff");
const btnRavenclaw = document.querySelector(".ravenclaw");
const btnOther = document.querySelector(".other");
const search = document.querySelector(".search");

const fetchData = async () => {
  const response = await fetch("https://hp-api.herokuapp.com/api/characters");
  const json = await response.json();
  data = await json;
  main.innerHTML = "";
  foo(data);
  // houseFiltering(data, "Gryffindor")
};

const fetchData1 = async () => {
  const response = await fetch("https://hp-api.herokuapp.com/api/characters");
  const json = await response.json();
  data = await json;
  const filteredData = data.filter((e) => e.house === "Gryffindor");
  main.innerHTML = "";
  foo(filteredData);
};

const fetchData2 = async () => {
  const response = await fetch("https://hp-api.herokuapp.com/api/characters");
  const json = await response.json();
  data = await json;
  const filteredData = data.filter((e) => e.house === "Slytherin");
  main.innerHTML = "";
  foo(filteredData);
};

const fetchData3 = async () => {
  const response = await fetch("https://hp-api.herokuapp.com/api/characters");
  const json = await response.json();
  data = await json;
  const filteredData = data.filter((e) => e.house === "Hufflepuff");
  main.innerHTML = "";
  foo(filteredData);
};

const fetchData4 = async () => {
  const response = await fetch("https://hp-api.herokuapp.com/api/characters");
  const json = await response.json();
  data = await json;
  const filteredData = data.filter((e) => e.house === "Ravenclaw");
  main.innerHTML = "";
  foo(filteredData);
};

const fetchData5 = async () => {
  const response = await fetch("https://hp-api.herokuapp.com/api/characters");
  const json = await response.json();
  data = await json;
  const filteredData = data.filter((e) => e.house === "");
  main.innerHTML = "";
  foo(filteredData);
};

const fetchData6 = async () => {
  const response = await fetch("https://hp-api.herokuapp.com/api/characters");
  const json = await response.json();
  data = await json;
  const serchingValue = search.value;
  const searchingName = data.filter((e) =>
    e.name.toLocaleLowerCase().includes(serchingValue.toLocaleLowerCase())
  );
  main.innerHTML = "";
  foo(searchingName);
};

search.addEventListener("input", fetchData6);

btnAll.addEventListener("click", fetchData);

btnGryffindor.addEventListener("click", fetchData1);

btnSlytherin.addEventListener("click", fetchData2);

btnHufflepuff.addEventListener("click", fetchData3);

btnRavenclaw.addEventListener("click", fetchData4);

btnOther.addEventListener("click", fetchData5);

const foo = (data) => {
  data.forEach((el) => {
    const card = document.createElement("div");
    main.append(card);
    houseColor(card, el.house);
    card.style.borderRadius = "10px";
    card.innerHTML = `<div class="card">
      <img class="image" src=${imageDefault(
        el.image,
        el.gender
      )} width='200px' height='250px'></img>
      <div class='name tx'>Имя: ${el.name}</div>
      <div class='alt_name tx'>Альтернативное имя: ${el.alternate_names}</div>
      <div class='species tx'>Разновидность: ${el.species}</div>
      <div class='gender tx'>Гендер: ${el.gender}</div>
      <div class='house tx'>Дом: ${el.house}</div>
      <div class='dateOfBirth tx'>День рождения: ${el.dateOfBirth}</div>
      <div class='wizard tx'>Волшебник: ${el.wizard}</div>
      <div class='ancestry tx'>Родословие: ${el.ancestry}</div>
      <div class='eyeColour tx'>Цвет глаз: ${el.eyeColour}</div>
      <div class='hairColour tx'>Цвет волос: ${el.hairColour}</div>
      <div class='actor tx'>Актер: ${el.actor}</div>
      </div>`;
  });
};
// <div class='alternate_actors'>Альтернативный Актер: ${el.alternate_actors}</div>

// function trueorfalse(img, gender) {
//   if(img == ""){
//     // `<img src='https://scienceoxford.com/wp-content/uploads/2018/03/avatar-male.jpg' width='200px' height='250px'></img>`
//   // } else if(img == "" || gender == female){
//   //   `<img src='https://www.beatonpetersen.com/wp-content/uploads/2021/11/depositphotos_121233300-stock-illustration-female-default-avatar-gray-profile.jpg' width='200px' height='250px'></img>`
//   } else {
//     `<img src='${el.image}' width='200px' height='250px'></img>`
//   }
// }

function houseColor(card, house) {
  if (house === "Gryffindor") {
    card.style.backgroundColor = "rgb(120,0,2)";
  } else if (house === "Slytherin") {
    card.style.backgroundColor = "rgb(31,70,39)";
  } else if (house === "Hufflepuff") {
    card.style.backgroundColor = "rgb(255,206,77)";
  } else if (house === "Ravenclaw") {
    card.style.backgroundColor = "rgb(33,47,88)";
  } else {
    card.style.backgroundColor = "gray";
  }
}

function imageDefault(img, gender) {
  // if (img === undefined) {
  //   if (gender === "male")
  //     return "https://www.kbl.co.uk/wp-content/uploads/2017/11/Default-Profile-Male.jpg";
  //   else
  //     return "https://t3.ftcdn.net/jpg/04/43/94/64/360_F_443946416_l2xXrFoIuUkItmyscOK5MNh6h0Vai3Ua.jpg";
  // } else return img;
  if (img === "" && gender === "male") {
    return "https://www.kbl.co.uk/wp-content/uploads/2017/11/Default-Profile-Male.jpg";
  } else if (img === "" && gender === "female") {
    return "https://t3.ftcdn.net/jpg/04/43/94/64/360_F_443946416_l2xXrFoIuUkItmyscOK5MNh6h0Vai3Ua.jpg";
  } else {
    return img;
  }
}

fetchData();
