/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";
const CARD_HEIGHT = [
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
const CARD_SUIT = ["heart", "diamond", "spade", "club"];
const GENERATE_BUTTON = document.querySelector("#generateCards");
const ORDER_BUTTON = document.querySelector("#orderbutton");
const INPUT_CARD_NUMBER = document.querySelector("#inputCards");
const GENERATE_DIV = document.querySelector("#createDivCard");
const CONTAINER_SELECT = document.querySelector("#container-select");

window.onload = () => {
  let inputNumberfromUser = 0;
  let arrayFromInput = [];

  GENERATE_BUTTON.addEventListener("click", () => {
    GENERATE_DIV.textContent = ""; //this cleans previous cards from the generate cards div
    CONTAINER_SELECT.textContent = ""; //this also cleans previous cards from the container of steps
    if (INPUT_CARD_NUMBER.value <= 30) {
      inputNumberfromUser = INPUT_CARD_NUMBER.value;
      arrayFromInput = Array.from({ length: inputNumberfromUser }, () =>
        generateCard()
      );

      for (let i = 0; i < arrayFromInput.length; i++) {
        newCard(arrayFromInput[i].number, arrayFromInput[i].suit); //new card only works in generate because of parents div
      }
    }
  });
  ORDER_BUTTON.addEventListener("click", () => {
    CONTAINER_SELECT.textContent = "";
    let h2ofSteps = document.createElement("H2");
    let h2CreateText = document.createTextNode("Card Select Sort Process");
    h2ofSteps.appendChild(h2CreateText);
    CONTAINER_SELECT.appendChild(h2ofSteps);
    selectSort(arrayFromInput);
  });
};

const randomNumber = () => Math.floor(Math.random() * CARD_HEIGHT.length); //pick a random valid number

const randomCardSuit = () => {
  //pick a random suit
  let randomSuits = Math.floor(Math.random() * CARD_SUIT.length);
  return CARD_SUIT[randomSuits];
};

const generateCard = () => {
  let oneCard = {
    number: randomNumber(),
    suit: randomCardSuit()
  };
  return oneCard;
};

const selectSort = arr => {
  //Our Select Sort Algorithm
  let minIdx,
    temp,
    len = arr.length;
  let stepsCounter = 0;
  for (let i = 0; i < len; i++) {
    minIdx = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j].number < arr[minIdx].number) {
        minIdx = j;
      }
    }
    //swaps values
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;

    stepsCounter += 1;
    newRowofCard(arr, stepsCounter); //print the step
  }

  return arr;
};

const newCard = (arrNumber, arrSuits) => {
  //New Card Printed
  let myNewCard = document.createElement("div");
  myNewCard.classList.add("card", "shadow-lg");
  let cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title", "d-flex", "ml-2", "mt-1");
  let suit1 = document.createElement("p");
  suit1.classList.add(arrSuits);

  let cardBody = document.createElement("div");
  cardBody.classList.add(
    "card-body",
    "d-flex",
    "align-items-center",
    "justify-content-center"
  );
  let number = document.createElement("p");
  let newtext = document.createTextNode(CARD_HEIGHT[arrNumber]);
  number.appendChild(newtext);

  let cardFooter = document.createElement("div");
  cardFooter.classList.add(
    "card-footer",
    "bg-transparent",
    "border-top-0",
    "d-flex",
    "ml-5",
    "justify-content-end"
  );
  let suit2 = document.createElement("p");
  suit2.classList.add(arrSuits, "reverse-p");
  cardTitle.appendChild(suit1);
  myNewCard.appendChild(cardTitle);
  cardBody.appendChild(number);
  myNewCard.appendChild(cardBody);
  cardFooter.appendChild(suit2);
  myNewCard.appendChild(cardFooter);
  GENERATE_DIV.appendChild(myNewCard);
};

const newRowofCard = (arr, numberOfStep) => {
  //Adds a new row for the SelectSort to be printed
  let newRow = document.createElement("div");
  newRow.classList.add(
    "d-flex",
    "flex-row",
    "flex-wrap",
    "border",
    "border-danger",
    "rounded",
    "bubbleCard"
  );
  CONTAINER_SELECT.appendChild(newRow);
  let createPofSteps = document.createElement("p");
  let numberOfP = document.createTextNode(numberOfStep);
  createPofSteps.appendChild(numberOfP);
  createPofSteps.classList.add("steps-number");
  newRow.appendChild(createPofSteps);
  for (let i = 0; i < arr.length; i++) {
    sortSteps(arr[i], newRow);
  }
};

const sortSteps = (cardObj, newRow) => {
  //Prints steps of Select Sort algorithm (SelectSort())
  //This is called inside newRowOfCards
  let myNewCard = document.createElement("div");
  myNewCard.classList.add("card", "shadow-lg");

  let cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title", "d-flex", "ml-2", "mt-1");
  let suit1 = document.createElement("p");
  suit1.classList.add(cardObj.suit);

  let cardBody = document.createElement("div");
  cardBody.classList.add(
    "card-body",
    "d-flex",
    "align-items-center",
    "justify-content-center"
  );
  let number = document.createElement("p");
  let newtext = document.createTextNode(CARD_HEIGHT[cardObj.number]);
  number.appendChild(newtext);

  let cardFooter = document.createElement("div");
  cardFooter.classList.add(
    "card-footer",
    "bg-transparent",
    "border-top-0",
    "d-flex",
    "ml-5",
    "justify-content-end"
  );
  let suit2 = document.createElement("p");
  suit2.classList.add(cardObj.suit, "reverse-p");

  cardTitle.appendChild(suit1);
  myNewCard.appendChild(cardTitle);
  cardBody.appendChild(number);
  myNewCard.appendChild(cardBody);
  cardFooter.appendChild(suit2);
  myNewCard.appendChild(cardFooter);
  newRow.appendChild(myNewCard);
};
