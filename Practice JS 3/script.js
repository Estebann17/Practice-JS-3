class Persona {
   constructor(edad, nombre, telefono){

         this.edad = edad;
         this.nombre = nombre;
         this.telefono = telefono;
   }
}

const persona = new Persona(18, 'Esteban', 19281);
console.log(persona);



class Cliente extends Persona {
        constructor(edad, telefono, nombre, crédito) {
        super(edad, nombre, telefono);
        
         this.crédito(crédito)
        }
    }

console.log(persona);

class Trabajador extends Persona {
    constructor(edad, telefono, nombre, crédito) {
        super(edad, nombre, telefono, crédito)

        this.salario = '$800';
    }
}