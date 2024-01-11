// Check
console.log('JS OK');

// ! SCALETTA 
/*
- 1 Raccogli gli elementi
    - 1a Varaiabile che conosco
- 2 evento al click 
    - 2a Creaiamo un for da 1 a 100, 1 a 81, 1 a 49
    - 2b Creiamo una funzione con il metodo dom dentro per creare un tag
    - 2c Aggiungiamo la classe del colore al click
- 4 Stampiamo in pagina
*/

// RECUPERO ELEMENTI
const formElement = document.getElementById('form');
const selectField = document.getElementById('recipe-select');
const buttonField = document.querySelector('.recipe-button');
const squaresElement = document.querySelector('.recipe-squares');

console.log(formElement, selectField, buttonField, squaresElement);

// VARIABILI CHE CONOSCO
const rowsDifficult = 10
const colsDifficult = 10
const totDifficult = rowsDifficult * colsDifficult

const rowsMedium = 9
const colsMedium = 9
const totMedium = rowsMedium * colsMedium

const rowsEasy = 7
const colsEasy = 7
const totEasy = rowsEasy * colsEasy



    // EVENTO AL CLICK
formElement.addEventListener('submit', (e) => {

    
    e.preventDefault();

    buttonField.innerText = 'Ricomincia'

    buttonField.addEventListener('click', ()=>{
        squaresElement.innerText = ''
    })

    // RECUPERO DATI UTENTE 
    const difficulty = selectField.value;
    console.log(difficulty);
    
    // SE
    if (difficulty === '1') {

        for (let i = 1; i <= totDifficult; i++) {
        
            const cellElementsDiffiucult = getcellElementsDifficult(i);
        
            cellElementsDiffiucult.addEventListener('click', () => {
                cellElementsDiffiucult.classList.toggle('color-cell')
                console.log(cellElementsDiffiucult.innerText);
            })
        
            squaresElement.appendChild(cellElementsDiffiucult);
        
        }

    // ALTRIMENTI SE 
    } else if (difficulty === '2') {

        for (let i = 1; i <= totMedium; i++) {
        
            const cellElementsMedium = getcellElementsMedium(i);
        
            cellElementsMedium.addEventListener('click', () => {
                cellElementsMedium.classList.toggle('color-cell')
                console.log(cellElementsMedium.innerText);
            })
        
            squaresElement.appendChild(cellElementsMedium);
        
        }

    // ALTRIMENTI SE 
    } else if (difficulty === '3') {

        for (let i = 1; i <= totEasy; i++) {
        
            const cellElementsEasy = getcellElementsEasy(i);
        
            cellElementsEasy.addEventListener('click', () => {
                cellElementsEasy.classList.toggle('color-cell')
                console.log(cellElementsEasy.innerText);
            })
        
            squaresElement.appendChild(cellElementsEasy);
        
        }

    }
}) 



 








