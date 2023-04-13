//Variabili

/* Commento
multi
linea
*/
    let km = prompt("Che distanza vuoi percorrere?");
    console.log(`km`);
    const prezzo  = 0.21;
    let prezzoalkm = km * prezzo;
    console.log(`prezzoalkm`)
    let eta = prompt("Quanti anni hai?");  
    console.log(`eta`);
    let minorenni = (18 <= eta); 
    let anziani = (65 >= eta);
    let prezzominorenni = (prezzoalkm / 5);
    let prezzoanziani = ((prezzoalkm * 40) / 100);

    if( eta=true){

        console.log(`prezzoalkm`)
    } else{
        document.getElementById("totale").innerHTML = `Ok, ma quanti anni hai?`
    }
    if ( km=true){

        console.log(`prezzoalkm`)
    } else{
        document.getElementById("totale").innerHTML = `Lo vuoi sto biglietto o no??`
    }
    if (eta <= 18){

        console.log (`prezzominorenni`);
        document.getElementById("totale").innerHTML = `il totale è: ${prezzominorenni} euro`
    } else if(eta >= 65){

        console.log(`prezzoanziani`)
        document.getElementById("totale").innerHTML = `il totale è: ${prezzoanziani} euro`
    }else{
        console.log (`prezzoalkm`)
        document.getElementById("totale").innerHTML = `il totale è: ${prezzoalkm} euro`
    }

    
    
