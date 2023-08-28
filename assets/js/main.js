class Animal{
    constructor(nombre,peso,edad){
        this._nombre = nombre;
        this._peso = peso;
        this._edad = edad;
    }

    informacion() {
        return `${this.nombre} - ${this.peso}kg - ${this.edad} años`;    
    }
}

class Perro extends Animal{
    constructor(nombre,peso,edad,raza){
        super(nombre,peso,edad);
        this._raza = raza;
    }

    informacion() {
        return `${this._nombre} - ${this._peso}kg - ${this._edad} años - ${this._raza}`;    
    }
}

class Gato extends Animal{
    constructor(nombre,peso,edad,genero){
        super(nombre,peso,edad);
        this._genero = genero;
    }

    informacion() {
        return `${this._nombre} - ${this._peso}kg - ${this._edad} años - ${this._genero}`;    
    }
}


class Conejo extends Animal{
    constructor(nombre,peso,edad,color){
        super(nombre,peso,edad);
        this._color = color;
    }

    informacion() {
        return `${this._nombre} - ${this._peso}kg - ${this._edad} años - ${this._color}`;    
    }
}

let perro = new Perro("Simba",5,2,"GoldenRetriever");
let gato = new Gato("Friona",3.5,1,"Hembra");
let conejo = new Conejo("Saltarin",1.5,3,"Blanco")
let mascotas = [perro,gato,conejo];

function verMascotas(){
    let lista = document.getElementById("listaMascotas");
    for(mascota of mascotas){
        let item = document.createElement("li");
        let mensaje = mascota.informacion();
        item.textContent = mensaje;
        lista.appendChild(item);
    }
}