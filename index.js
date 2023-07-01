function averageCalculation(){
    let yourName = prompt('¡Bienvenido/a! Por favor ingrese su nombre y apellido.');
    alert('Bienvenido/a' + ' ' + yourName);

    let repetition = parseInt(prompt('Ingrese la cantidad de materias en las que desea saber su promedio y el proceso se repetirá tantas veces como indique.'));

    for (let x = 0; x < repetition; x++){
        let gradeOne = parseInt(prompt('Por favor ingrese la primera calificación (1/3):'));
        let gradeTwo = parseInt(prompt('Por favor ingrese la segunda calificación (2/3):'));
        let gradeThree = parseInt(prompt('Por favor ingrese la tercera calificación (3/3):'));
    
        let average = (gradeOne + gradeTwo + gradeThree) / 3; 

        if (average >=7 && average <= 10){
            alert('Felicitaciones, tu promedio es de ' + average + ' ¡aprobaste la materia!');
        }else if(average < 7 && average >= 0){
            alert('Lo sentimos, tu promedio es de ' + average + ' desaprobaste la materia...');
        }else{
            alert('Los números que ingresaste no son correctos, volvé a intentarlo.');
            x--
            continue;
        }
    
        alert('Muchas gracias' + ' ' + yourName + '. ' + 'Su promedio ha sido guardado en el sistema.')
    } 
}

averageCalculation();


    
    

    
   

    

    

