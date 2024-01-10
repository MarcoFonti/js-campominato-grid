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

// FUNZIONE DIFICOLTA DIFFICILE
const getcellElementsDifficult = (numberDiffucult) => {
    const node = document.createElement('div');
    node.className = 'cell-difficult';
    node.innerText = numberDiffucult;
    return node;
}

// FUNZIONE DIFICOLTA MEDIA
const getcellElementsMedium = (numberMedium) => {
    const node = document.createElement('div');
    node.className = 'cell-medium';
    node.innerText = numberMedium;
    return node;
}

// FUNZIONE DIFICOLTA FACILE
const getcellElementsEasy = (numberEasy) => {
    const node = document.createElement('div');
    node.className = 'cell-easy';
    node.innerText = numberEasy;
    return node;
}