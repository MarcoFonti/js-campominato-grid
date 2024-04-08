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


/* RECUPERO ELEMENTI IN BASE ALL'ID E ALLA CLASSE */
const formElement = document.getElementById('form');
const selectField = document.getElementById('recipe-select');
const buttonField = document.querySelector('.recipe-button');
const squaresElement = document.querySelector('.recipe-squares');


/* CONTROLLO RISPOSTA */
console.log(formElement, selectField, buttonField, squaresElement);



/* CREO VARIBILE CHE CONOSCO PER STABILE QUANTE COLLONE CI SARANNO */
const rowsDifficult = 10
const colsDifficult = 10
const totDifficult = rowsDifficult * colsDifficult

const rowsMedium = 9
const colsMedium = 9
const totMedium = rowsMedium * colsMedium

const rowsEasy = 7
const colsEasy = 7
const totEasy = rowsEasy * colsEasy


/* ALL'EVENTO DEL SUBMIT SUL FORM */
formElement.addEventListener('submit', (e) => {


    /* BLOCCO IL CARICAMENTO PREDIFINITO */
    e.preventDefault();


    /* RIASSEGNO IL BOTTONE PLAY CON RICOMINCIA */
    buttonField.innerText = 'Ricomincia'


    /* ALL'EVENTO SUL BOTTONE RICOMINCIA */
    buttonField.addEventListener('click', ()=>{

        /* SVUOTO LE CELLE SELEZIONATI DALL'UTENTE */
        squaresElement.innerText = ''
    })

    
    /* CREO UNA VARIBILE E RECUPERO IL VALUE CHE SELEZIONA NELLA SELECT L'UTENTE */
    const difficulty = selectField.value;


    /* CONTROLLO RIPOSTA */
    console.log(difficulty);
    
    
    /* SE LA MIA VARIBILE A CUI HO SALAVATO IL VALUE DELL'UTENTE E' IDENTICA A 1 */
    if (difficulty === '1') {


        /* CREO CICLO FOR SU LE COLLONE TOTALI (10*10) */
        for (let i = 1; i <= totDifficult; i++) {
        

            /* METTO LA FUNZIONE IN UNA VARIBILE E GLI PASSO LA I (NUMERI DA 1 A 10*10) */
            const cellElementsDiffiucult = getcellElementsDifficult(i);
        

            /* ALL'EVENTO CLICK SU OGNI SINGOLA CELLA(DIV) CREATA DALLA FUNZIONE */
            cellElementsDiffiucult.addEventListener('click', () => {


                /* ALLA VARIBILE A CUI PASSO LA FUNZIONE DI CREAZIONE DI OGNI CELLA(DIV), GLI CREO UN TOGGLE IN MODO DA COLORAMELA O NON */
                cellElementsDiffiucult.classList.toggle('color-cell')


                /* CONTROLLLO RISPOSTA */
                console.log(cellElementsDiffiucult.innerText);
            })
        

            /* AGGIUNGO ALL'EMELENTO SQUERESELEMENTE OGNI SINGOLA CELLA(DIV) CHE CREO (DETTO NODO) */
            squaresElement.appendChild(cellElementsDiffiucult);
        
        }

    
        
        /* ALTRIMENTI SE LA MIA VARIBILE A CUI HO SALAVATO IL VALUE DELL'UTENTE E' IDENTICA A 2 */
    } else if (difficulty === '2') {


        /* CREO CICLO FOR SU LE COLLONE TOTALI (9*9) */
        for (let i = 1; i <= totMedium; i++) {
        

            /* METTO LA FUNZIONE IN UNA VARIBILE E GLI PASSO LA I (NUMERI DA 1 A 9*9) */
            const cellElementsMedium = getcellElementsMedium(i);
        

            /* ALL'EVENTO CLICK SU OGNI SINGOLA CELLA(DIV) CREATA DALLA FUNZIONE */
            cellElementsMedium.addEventListener('click', () => {


                /* ALLA VARIBILE A CUI PASSO LA FUNZIONE DI CREAZIONE DI OGNI CELLA(DIV), GLI CREO UN TOGGLE IN MODO DA COLORAMELA O NON */
                cellElementsMedium.classList.toggle('color-cell')


                /* CONTROLLLO RISPOSTA */
                console.log(cellElementsMedium.innerText);
            })
        

            /* AGGIUNGO ALL'EMELENTO SQUERESELEMENTE OGNI SINGOLA CELLA(DIV) CHE CREO (DETTO NODO) */
            squaresElement.appendChild(cellElementsMedium);
        
        }



        /* ALTRIMENTI SE LA MIA VARIBILE A CUI HO SALAVATO IL VALUE DELL'UTENTE E' IDENTICA A 3 */
    } else if (difficulty === '3') {


        /* CREO CICLO FOR SU LE COLLONE TOTALI (7*7) */
        for (let i = 1; i <= totEasy; i++) {
        

            /* METTO LA FUNZIONE IN UNA VARIBILE E GLI PASSO LA I (NUMERI DA 1 A 7*7) */
            const cellElementsEasy = getcellElementsEasy(i);
            

            /* ALL'EVENTO CLICK SU OGNI SINGOLA CELLA(DIV) CREATA DALLA FUNZIONE */
            cellElementsEasy.addEventListener('click', () => {


                /* ALLA VARIBILE A CUI PASSO LA FUNZIONE DI CREAZIONE DI OGNI CELLA(DIV), GLI CREO UN TOGGLE IN MODO DA COLORAMELA O NON */
                cellElementsEasy.classList.toggle('color-cell')


                /* CONTROLLLO RISPOSTA */
                console.log(cellElementsEasy.innerText);
            })
        

            /* AGGIUNGO ALL'EMELENTO SQUERESELEMENTE OGNI SINGOLA CELLA(DIV) CHE CREO (DETTO NODO) */
            squaresElement.appendChild(cellElementsEasy);
        
        }

    }
}) 



 








