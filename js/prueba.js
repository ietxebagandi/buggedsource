function Point(x,y){
    this.x = x;
    this.y = y;
}

// creamos un array de 3 puntos

const puntos = [new Point(5, 0), new Point(11, 1), new Point(2, 2)];

// supongamos que nos piden eliminar del array aquellos puntos cuya coordenada x > 10
// tal vez, lo primero que se nos venga a la cabeza sea este código... pero es incorrecto. ¿por qué?

const longitud = puntos.length;
for(let i=0; i < longitud; i++){
    if (puntos[i].x > 10)
        puntos.splice(i,1);
}
