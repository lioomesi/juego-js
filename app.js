/* console.log("Hola Mundo")
console.log(2+3)
console.log('Hola la temp de hoy es: ', 8, '°C')
 esto esta comentado
*/
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

/* 
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");
*/
let options = {
    frutas: [
        "Manzana",
        "Frutilla",
        "Pera",
        "Sandia",
        "Naranja",
        "Mandarina",
        "Limon",
        "Uva",
    ],
    animales: [
        "perro",
        "gato",
        "hamster",
        "nutria",
        "jirafa",
        "leon",
        "Pantera",
        "rinoceronte",
    ],
    paises: [
        "Argentina",
        "Brasil",
        "Alemania",
        "Estados Unidos",
        "España",
        "Chile",
        "Irlanda",
        "Africa",
    ],
};
/*let options = {
  fruits: [
    "Manzana",
    "Banana",
    "Frutilla",
    "Durazno",
    "Sandia",
    "Naranja",
    "Mandarina",
    "Pera",
    "Uva",
    "Limon",
  ],
  animals: ["Perro",
    "Gato",
    "Pez",
    "Hamster",
    "Nutria",
    "Mono",
    "Pantera",
    "Rinoceronte",
    "Jirafa",
    "Leon",],
  countries: [
    "Argentina",
    "Brasil",
    "Alemania",
    "Estados Unidos",
    "Italia",
    "Rusia",
    "Chile",
    "Irlanda",
    "España",
    "Africa",
  ],
};

*/
// contadores
let winCount = 0;
let count = 0;
let chosenWord = "";
/* 
let winCount = 0;
let count = 0;
let chosenWord = "";
*/

const displayOptions = () => {
    optionsContainer.innerHTML += `<h3> Porfavor seleccione una opcion </h3>`;
    // innerHTML sirve para poder ingresar codigo html en js
    let buttonCon = document.createElement("div");
    for (let value in options) {
        buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
    }
    optionsContainer.appendChild(buttonCon);

};
/*
const displayOptions = () => {
  optionsContainer.innerHTML += `<h3>Please Select An Option</h3>`;
  let buttonCon = document.createElement("div");
  for (let value in options) {
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
  }
  optionsContainer.appendChild(buttonCon);
};
*/
const blocker = () => {
    let optionsButtons = document.querySelectorAll('.options');
    let letterButtons = document.querySelectorAll('.letters');

    optionsButtons.forEach((button) => {
        button.disabled = true;
    });

    letterButtons.forEach((button) => {
        button.disabled.true;
    });

    newGameContainer.classList.remove("hide");
};

/*
const blocker = () => {
  let optionsButtons = document.querySelectorAll(".options");
  let letterButtons = document.querySelectorAll(".letters");
  //disable all options
  optionsButtons.forEach((button) => {
    button.disabled = true;
  });

  //disable all letters
  letterButtons.forEach((button) => {
    button.disabled.true;
  });
  newGameContainer.classList.remove("hide");
};
*/
//Generador de palabaras
const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll('.options');
    optionsButtons.forEach((button) => {
        if (button.innerText.toLowerCase() === optionValue) {
            button.classList.add("active");
        }
        button.disabled = true;
    });


    // inicializar el contenido de las letras en 0 y limpiamos lo anterior
    letterContainer.classList.remove("hide");
    userInputSection.innerText = "";

    //Array: similar a una lista que puede ser reccorrida 
    //con un ciclo for 
    let optionArray = options[optionValue];

    // elegir una palabra aleatoria
    chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
    // la funcion UpperCase devuelve la cadena en mayuscula
    chosenWord = chosenWord.toUpperCase();

    // remplazaremos las letras con "_"
    let displayItem = chosenWord.replace(/./g, '<span class="dashes">~</span>');

    userInputSection.innerHTML = displayItem;
};
/*
const generateWord = (optionValue) => {
  let optionsButtons = document.querySelectorAll(".options");
  //If optionValur matches the button innerText then highlight the button
  optionsButtons.forEach((button) => {
    if (button.innerText.toLowerCase() === optionValue) {
      button.classList.add("active");
    }
    button.disabled = true;
  });

  //initially hide letters, clear previous word
  letterContainer.classList.remove("hide");
  userInputSection.innerText = "";

  let optionArray = options[optionValue];
  //choose random word
  chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
  chosenWord = chosenWord.toUpperCase();

  //replace every letter with span containing dash
  let displayItem = chosenWord.replace(/./g, '<span class="dashes">~</span>');

  //Display each element as spanDisplay each element as span
  userInputSection.innerHTML = displayItem;
};

*/

// cuando se presione el boton de "nuevo juego"
// se debe reinciar todo
const initializer = () => {
    winCount = 0;
    count = 0;

    userInputSection.innerHTML = "";
    optionsContainer.innerHTML = "";
    letterContainer.classList.add("hide");
    newGameContainer.classList.add("hide");
    letterContainer.innerHTML = "";
/* 
  userInputSection.innerHTML = "";
  optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";
  */
    //crear las letras
    for (let i = 65; i < 91; i++) { // 65 al 90 son las letras en Mayusculas  y 97 al 122 son en minusculas
        let button = document.createElement("button");
        button.classList.add("letters");
        // de numeros a ASCII ( a - z)
        button.innerText = String.fromCharCode(i);

        // botones de los caracteres
        button.addEventListener("click", () => {
            // la funcion split() divide un objeto en string 
            let charArray = chosenWord.split("");
            let dashes = document.getElementsByClassName("dashes");

            if (charArray.includes(button.innerText)) {
                charArray.forEach((char, index) => {
                    if (char === button.innerText) {
                        //reemplazar el espacio en blanco por el caracter 
                        dashes[index].innerText = char;
                        // incrementar el contador winCount
                        winCount += 1;
                        if (winCount == charArray.length) {
                            resultText.innerHTML = `<h2 class="win-msg">Ganaste :) </h2>`;
                            // bloquear todos los botones
                            blocker();
                        }
                    }
                });
            } else {
                // contador cuando pierde
                count += 1;
                // dibujar el hombrecito
                dibujarHombre(count);
                // contador == 6 , head,body, left arm,rigth arm, left leg, rigth leg
                if (count == 6) {
                    resultText.innerHTML = `<h2 class="lose-msg">Perdiste :(</h2><p> La palabra era <span> ${chosenWord}</span></p>)`;
                    blocker();
                }
            }
            button.disabled = true;
        });
        letterContainer.append(button);
    }
    displayOptions();
    let { initialDrawning } = canvasCreator();
    initialDrawning();
};
/*
const initializer = () => {
  winCount = 0;
  count = 0;

  //Initially erase all content and hide letteres and new game button
  userInputSection.innerHTML = "";
  optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";

  //For creating letter buttons
  for (let i = 97; i < 123; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    //Number to ASCII[A-Z]
    button.innerText = String.fromCharCode(i);
    //character button click
    button.addEventListener("click", () => {
      let charArray = chosenWord.split("");
      let dashes = document.getElementsByClassName("dashes");
      //if array contains clciked value replace the matched dash with letter else dram on canvas
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          //if character in array is same as clicked button
          if (char === button.innerText) {
            //replace dash with letter
            dashes[index].innerText = char;
            //increment counter
            winCount += 1;
            //if winCount equals word lenfth
            if (winCount == charArray.length) {
              resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
              //block all buttons
              blocker();
            }
          }
        });
      } else {
        //lose count
        count += 1;
        //for drawing man
        drawMan(count);
        //Count==6 because head,body,left arm, right arm,left leg,right leg
        if (count == 6) {
          resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
          blocker();
        }
      }
      //disable clicked button
      button.disabled = true;
    });
    letterContainer.append(button);
  }

  displayOptions();
  //Call to canvasCreator (for clearing previous canvas and creating initial canvas)
  let { initialDrawing } = canvasCreator();
  //initialDrawing would draw the frame
  initialDrawing();
};
*/

// Canvas para dibujar el hombrecito
const canvasCreator = () => {
    let context = canvas.getContext("2d"); // trabajaremos en una representación bidimensional
    context.beginPath();
    context.strokeStyle = "#000"; // color
    context.lineWidth = 2; // tamaño de la linea

    // como se van a dibujar las lineas
    const drawLine = (fromX, fromY, toX, toY) => {
        context.moveTo(fromX, fromY);
        context.lineTo(toX, toY);
        context.stroke();  // metodo stroke() para dibujar trazos
    };
    const head = () => {
        context.beginPath();
        context.arc(70, 30, 10, 0, Math.PI * 2, true); // para hacer la circunferencia
        context.stroke();
    }
    const body = () => {
        drawLine(70, 40, 70, 80);
    }
    const leftArm = () => {
        drawLine(70, 50, 50, 70);
    }
    const rigthArm = () => {
        drawLine(70, 50, 90, 70);
    }
    const leftLeg = () => {
        drawLine(70, 80, 50, 110);
    }
    const rigthLeg = () => {
        drawLine(70, 80, 90, 110);
    };
    const initialDrawning = () => {
        // va a limpiar el dibujo 
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        drawLine(10, 130, 130, 130);
        drawLine(10, 10, 10, 131);
        drawLine(10, 10, 70, 10);
        drawLine(70, 10, 70, 20);
    };
    return { initialDrawning, head, body, leftArm, rigthArm, leftLeg, rigthLeg };

};
const dibujarHombre = (count) => {
    let { head, body, leftArm, rigthArm, leftLeg, rigthLeg } = canvasCreator();
    switch (count) {
        case 1:
            head();
            break;
        case 2:
            body();
            break;
        case 3:
            leftArm();
            break;
        case 4:
            rigthArm();
            break;
        case 5:
            leftLeg();
            break;
        case 6:
            rigthLeg();
            break;
        default:
            break;
    }
};

newGameButton.addEventListener("click", initializer)
window.onload = initializer;