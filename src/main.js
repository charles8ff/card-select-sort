/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const cardHeight = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const randomNumbers = () => Math.floor(Math.random() * cardHeight.length);
const generateButton = document.querySelector("#generateCards");
const orderButton = document.querySelector("#orderbutton");
const inputCards = document.querySelector("#inputCards");
const divElem = document.querySelector("#createDivCard");
const divBubble = document.querySelector("#createDivBubble");
const bubbleDiv = document.querySelector("#container-bubble");

window.onload = () => {
  let inputNumberfromUser = 0;
  let arrayFromInput; //luego quitar
  let arrayCards = [];
  let arrayCardSuits = [];
  generateButton.addEventListener("click", () => {
    console.log(inputCards.value);
    divElem.textContent = "";
    bubbleDiv.textContent = "";
    if (inputCards.value <= 30) {
      inputNumberfromUser = inputCards.value;
      arrayFromInput = Array.from({ length: inputNumberfromUser }, () =>
        randomNumbers()
      );
      arrayCardSuits = [];
      arrayCardSuits = Array.from({ length: inputNumberfromUser }, () =>
        randomCardSuits()
      );
      arrayCards = [];
      for (let i = 0; i < arrayFromInput.length; i++) {
        arrayCards.push(cardHeight[arrayFromInput[i]]);
      }

      for (let i = 0; i < arrayFromInput.length; i++) {
        newCard(arrayCards[i], arrayCardSuits[i]);
      }
    }
  });
  orderButton.addEventListener("click", () => {
    bubbleDiv.textContent = "";
    selectSort(arrayFromInput, arrayCardSuits);
    arrayCards = [];
    for (let i = 0; i < arrayFromInput.length; i++) {
      arrayCards.push(cardHeight[arrayFromInput[i]]);
    }
  });
};

const newRowofCard = (arr, arrsuits) => {
  var newRow = document.createElement("div");
  newRow.classList.add("d-flex", "flex-row", "flex-wrap");
  bubbleDiv.appendChild(newRow);
  for (var b = 0; b < arr.length; b++) {
    //console.log(arr[b]);
    bubbleLog(arr[b], arrsuits[b], newRow);
  }
};
const selectSort = (arr, arrsuits) => {
  let min = 0;
  while (min < arr.length - 1) {
    for (let i = min + 1; i < arr.length - 1; i++) {
      if (arr[min] > arr[i]) {
        let aux = arr[min];
        arr[min] = arr[i];
        arr[i] = aux;
        //SUITS
        let aux2 = arrsuits[min];
        arrsuits[min] = arrsuits[i + 1];
        arrsuits[i + 1] = aux2;
      }
      newRowofCard(arr, arrsuits);
    }
    min++;
  }

  return arr, arrsuits;
};
// const bubbleSort = (arr, arrsuits) => {
//   var len = arr.length;

//   for (var i = 0; i < len; i++) {
//     for (var j = 0; j < len - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;

//         //SUITS
//         var temp2 = arrsuits[j];
//         arrsuits[j] = arrsuits[j + 1];
//         arrsuits[j + 1] = temp2;
//       }
//       newRowofCard(arr, arrsuits);
//     }
//   }
//   return arr, arrsuits;
// };

const randomCardSuits = () => {
  const arraySuits = ["heart", "diamond", "spade", "club"];
  let randomSuits = Math.floor(Math.random() * arraySuits.length);
  return arraySuits[randomSuits];
};

const newCard = (arrNumber, arrSuits) => {
  var myNewCard = document.createElement("div");
  myNewCard.classList.add("card", "shadow-lg");
  var cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title", "d-flex", "ml-2", "mt-1");
  var suit1 = document.createElement("p");
  suit1.classList.add(arrSuits);

  var cardBody = document.createElement("div");
  cardBody.classList.add(
    "card-body",
    "d-flex",
    "align-items-center",
    "justify-content-center"
  );
  var number = document.createElement("p");
  var newtext = document.createTextNode(arrNumber);
  number.appendChild(newtext);

  var cardFooter = document.createElement("div");
  cardFooter.classList.add(
    "card-footer",
    "bg-transparent",
    "border-top-0",
    "d-flex",
    "ml-5",
    "justify-content-end"
  );
  var suit2 = document.createElement("p");
  suit2.classList.add(arrSuits, "reverse-p");

  cardTitle.appendChild(suit1);
  myNewCard.appendChild(cardTitle); // UNIMOS TITLE A LA CARD
  cardBody.appendChild(number);
  myNewCard.appendChild(cardBody);
  cardFooter.appendChild(suit2);
  myNewCard.appendChild(cardFooter);
  divElem.appendChild(myNewCard);
};

const bubbleLog = (arrNumber, arrSuits, newRow) => {
  var myNewCard = document.createElement("div");
  myNewCard.classList.add("card", "shadow-lg", "col-1");
  var cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title", "d-flex", "ml-2", "mt-1");
  var suit1 = document.createElement("p");
  suit1.classList.add(arrSuits);

  var cardBody = document.createElement("div");
  cardBody.classList.add(
    "card-body",
    "d-flex",
    "align-items-center",
    "justify-content-center"
  );
  var number = document.createElement("p");
  var newtext = document.createTextNode(cardHeight[arrNumber]);
  number.appendChild(newtext);

  var cardFooter = document.createElement("div");
  cardFooter.classList.add(
    "card-footer",
    "bg-transparent",
    "border-top-0",
    "d-flex",
    "ml-5",
    "justify-content-end"
  );
  var suit2 = document.createElement("p");
  suit2.classList.add(arrSuits, "reverse-p");

  cardTitle.appendChild(suit1);
  myNewCard.appendChild(cardTitle); // UNIMOS TITLE A LA CARD
  cardBody.appendChild(number);
  myNewCard.appendChild(cardBody);
  cardFooter.appendChild(suit2);
  myNewCard.appendChild(cardFooter);
  newRow.appendChild(myNewCard);
};
