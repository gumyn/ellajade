var objects = ["apple", "banana", "carrot", "grape", "lemon", "orange", "pear", "watermelon"];
var chosenObject;

function startGame() {
  // Reset the game
  chosenObject = null;
  document.getElementById("result").innerHTML = "Nouvelle partie !";
  
  // Shuffle the objects array
  objects = shuffle(objects);
  
  // Choose the matching object and add it to both cards
  chosenObject = objects[Math.floor(Math.random() * 8)];
  for (var i = 1; i <= 2; i++) {
    var card = document.getElementById("card" + i);
    card.innerHTML = "";
    for (var j = 0; j < 8; j++) {
      var object = document.createElement("div");
      object.classList.add("object");
      object.classList.add(objects[j]);
      object.onclick = function() { checkMatch(this); };
      card.appendChild(object);
      if (objects[j] === chosenObject) {
        var matchingObject = document.createElement("div");
        matchingObject.classList.add("object");
        matchingObject.classList.add(chosenObject);
        card.appendChild(matchingObject);
      }
    }
    console.log(JSON.stringify(card));
    document.getElementById("result").appendChild(card)
  }
}

function checkMatch(object) {
  if (object.classList.contains(chosenObject)) {
    document.getElementById("result").innerHTML = "Vous avez gagné!";
  } else {
    document.getElementById("result").innerHTML = "Essayez encore!";
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
