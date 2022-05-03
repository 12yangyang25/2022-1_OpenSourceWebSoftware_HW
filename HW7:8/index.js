function allShow() {
  cost = 0;
  flagArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  document.getElementById("1st").innerHTML =
    "<img id='apple' flag=false onclick='clickImg(this)' src='apple.jpg'><img id='banana' onclick='clickImg(this)' src='banana.jpg'><img id='blueberry' onclick='clickImg(this)' src='blueberry.jpg'><div class='cost'><p>1200won</p><p>3800won</p><p>2800won</p></div>";
  document.getElementById("2nd").innerHTML =
    "<img id='grapes' onclick='clickImg(this)' src='grapes.jpg'><img id='mango' onclick='clickImg(this)' src='mango.jpg'><img id='melon' onclick='clickImg(this)' src='melon.jpg'><div class='cost'><p>5000won</p><p>1900won</p><p>1800won</p></div>";
  document.getElementById("3rd").innerHTML =
    "<img id='peach' onclick='clickImg(this)' onclick='clickImg(this)' src='peach.jpg'><img id='strawberries' onclick='clickImg(this)' src='strawberries.jpg'><img id='watermelon' onclick='clickImg(this)' src='watermelon.jpg'><div class='cost'><p>1400won</p><p>8900won</p><p>8900won</p></div>";
}

function bestShow() {
  cost = 0;
  flagArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  document.getElementById("1st").innerHTML =
    "<img id='apple' onClick='clickImg(this)' src='apple.jpg'><img id='banana' onClick='clickImg(this)' src='banana.jpg'><img id='grapes' onClick='clickImg(this)' src='grapes.jpg'><div class='cost'><p>1200won</p><p>3800won</p><p>5000won</p></div>";
  document.getElementById("2nd").innerHTML =
    "<img id='peach' onClick='clickImg(this)' src='peach.jpg'><img id='strawberries' onClick='clickImg(this)' src='strawberries.jpg'><img id='watermelon' onClick='clickImg(this)' src='watermelon.jpg'><div class='cost'><p>1400won</p><p>8900won</p><p>8900won</p></div>";
  document.getElementById("3rd").innerHTML = "";
}

function saleShow() {
  cost = 0;
  flagArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  document.getElementById("1st").innerHTML =
    "<img id='blueberry' onClick='clickImg(this)' src='blueberry.jpg'><img id='mango' onClick='clickImg(this)' src='mango.jpg'><img id='melon' onClick='clickImg(this)' src='melon.jpg'><div class='cost'><p>2800won</p><p>1900won</p><p>1800won</p></div>";
  document.getElementById("2nd").innerHTML = "";
  document.getElementById("3rd").innerHTML = "";
}

var cost = 0;
var str = "";
var flagArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var fruitList = [
  "apple",
  "banana",
  "blueberry",
  "grapes",
  "mango",
  "melon",
  "peach",
  "strawberry",
  "watermelon",
];

function clickImg(obj) {
  switch (obj.id) {
    case "apple":
      if (flagArr[0] !== 1) {
        flagArr[0] = 1;
        cost += 1200;
        document.getElementById("apple").style.opacity = "0.3";
      } else {
        flagArr[0] = 0;
        cost -= 1200;

        document.getElementById("apple").style.opacity = "1";
      }
      break;

    case "banana":
      if (flagArr[1] !== 1) {
        flagArr[1] = 1;
        cost += 3800;

        document.getElementById("banana").style.opacity = "0.3";
      } else {
        flagArr[1] = 0;
        cost -= 3800;
        document.getElementById("banana").style.opacity = "1";
      }
      break;

    case "blueberry":
      if (flagArr[2] !== 1) {
        flagArr[2] = 1;
        cost += 2800;
        document.getElementById("blueberry").style.opacity = "0.3";
      } else {
        flagArr[2] = 0;
        cost -= 2800;
        document.getElementById("blueberry").style.opacity = "1";
      }
      break;

    case "grapes":
      if (flagArr[3] !== 1) {
        flagArr[3] = 1;
        cost += 5000;
        document.getElementById("grapes").style.opacity = "0.3";
      } else {
        flagArr[3] = 0;
        cost -= 5000;
        document.getElementById("grapes").style.opacity = "1";
      }
      break;

    case "mango":
      if (flagArr[4] !== 1) {
        flagArr[4] = 1;
        cost += 1900;
        document.getElementById("mango").style.opacity = "0.3";
      } else {
        flagArr[4] = 0;
        cost -= 1900;
        document.getElementById("mango").style.opacity = "1";
      }
      break;

    case "melon":
      if (flagArr[5] !== 1) {
        flagArr[5] = 1;
        cost += 1800;
        document.getElementById("melon").style.opacity = "0.3";
      } else {
        flagArr[5] = 0;
        cost -= 1800;
        document.getElementById("melon").style.opacity = "1";
      }
      break;

    case "peach":
      if (flagArr[6] !== 1) {
        flagArr[6] = 1;
        cost += 1400;
        document.getElementById("peach").style.opacity = "0.3";
      } else {
        flagArr[6] = 0;
        cost -= 1400;
        document.getElementById("peach").style.opacity = "1";
      }
      break;

    case "strawberries":
      if (flagArr[7] !== 1) {
        flagArr[7] = 1;
        cost += 8900;
        document.getElementById("strawberries").style.opacity = "0.3";
      } else {
        flagArr[7] = 0;
        cost -= 8900;
        document.getElementById("strawberries").style.opacity = "1";
      }
      break;

    case "watermelon":
      if (flagArr[8] !== 1) {
        flagArr[8] = 1;
        cost += 8900;
        document.getElementById("watermelon").style.opacity = "0.3";
      } else {
        flagArr[8] = 0;
        cost -= 8900;
        document.getElementById("watermelon").style.opacity = "1";
      }
      break;
  }

  console.log(cost);
}

function buy() {
  if (cost === 0) {
    alert("Please select items");
  } else {
    for (i = 0; i < 9; i++) {
      if (flagArr[i] === 1) {
        str += fruitList[i] + " ";
      }
    }
    alert("you selected " + str + "\n" + "total: " + cost);
    str = "";
  }
}
