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


/* CREO UNA FUNZIONE PER LA DIFFICOLTA DIFFICILE E GLI PASSO COME ARGOMENTO LA I */
const getcellElementsDifficult = (numberDiffucult) => {

    /* CREO UNA VARIBILE E USO IL METODO MANIPOLAZIONE DOM PER CREARE UN DIV */
    const node = document.createElement('div');


    /* ASSEGNO ALLA VARIBILE NODE UNA CLASSE HTML */
    node.className = 'cell-difficult';


    /* CREO TANTI DIV QUANTO LA I CHE PASSO (10*10) */
    node.innerText = numberDiffucult;


    /* RESTITUISCO VARIBILE */
    return node;
}

/* CREO UNA FUNZIONE PER LA DIFFICOLTA MEDIA E GLI PASSO COME ARGOMENTO LA I */
const getcellElementsMedium = (numberMedium) => {


    /* CREO UNA VARIBILE E USO IL METODO MANIPOLAZIONE DOM PER CREARE UN DIV */
    const node = document.createElement('div');


    /* ASSEGNO ALLA VARIBILE NODE UNA CLASSE HTML */
    node.className = 'cell-medium';


    /* CREO TANTI DIV QUANTO LA I CHE PASSO (9*9) */
    node.innerText = numberMedium;


    /* RESTITUISCO VARIBILE */
    return node;
}


/* CREO UNA FUNZIONE PER LA DIFFICOLTA MEDIA E GLI PASSO COME ARGOMENTO LA I */
const getcellElementsEasy = (numberEasy) => {


    /* CREO UNA VARIBILE E USO IL METODO MANIPOLAZIONE DOM PER CREARE UN DIV */
    const node = document.createElement('div');


    /* ASSEGNO ALLA VARIBILE NODE UNA CLASSE HTML */
    node.className = 'cell-easy';


    /* CREO TANTI DIV QUANTO LA I CHE PASSO (7*7) */
    node.innerText = numberEasy;


    /* RESTITUISCO VARIBILE */
    return node;
}