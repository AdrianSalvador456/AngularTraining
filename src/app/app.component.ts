import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { prependListener } from 'node:process';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'AngularTest';
  
  constructor(){
    console.log("hi");
  // operadores de javaScript 
  // imprimir la funcion en la consola 
  const auxMap = [1,2,3,4,5].map(num => num * 2);
  console.log("auxMap:", auxMap);

  // entradas 
  const auxForEach = [1,2,3,4,5].forEach(num => num * 2)
  console.log("auxForEach:", auxForEach)
  // queda como valo indefinido, ya que solo va a recorrer 

  // este find va a buscar y/o encuentra al recorre el numero, devuelve el valor que encuentra
  // y al no encontrar lo dice como indefinido 
  const auxFind = [1,2,3,4,5].find(num => num === 3)
  console.log("auxFind:", auxFind)
  // tambien puede ser "objeto jaison" como por ejemplo
  // (num => obj.num)

  // aqui seria buscar la posicion del numero por ejemplo la posicion del numero
  // 4 sera 3 por la posicion del array 
  const auxFindIndex = [1,2,3,4,5].findIndex(num => num === 4)
  console.log("auxFindIndex:", auxFindIndex)

  // cadena o array (buscame la posicion del numero 1, sin utilizar la funcion flecha)
  const auxIndexOf = [1,2,3,4,5].indexOf(1)
  console.log("auxIndexof:", auxIndexOf)
  
  // buscar las palabras en las cadenas 
  const auxIndexOfString = "Hola Mundo Angular".indexOf("Angular")
  console.log("auxIndexOfString:", auxIndexOfString)
  // regresara lo que es en donde inicia la palabra seleccionada ademas
  // si no lo encuentra este regresara lo que es un -1

  // regresar lo que son los numeros multiplos apartir del 0
  // y si no encuentra nada me regresa lo que es un texto vacio
  const auxFilter = [1,2,3,4,5].filter(num => num % 2 === 0)
  console.log("auxFilter:", auxFilter)

  // manera de que lo puede concatenar una cadena
  // el ('-') sirve para hacerlo con separador 
  const auxJoin = [1,2,3,4,5].join('-')
  console.log("auxJoin:", auxJoin)

  //separara cada cartet con una coma 
  const auxSplit = "Hola, Mundo, Angular".split(',')
  console.log("auxSplit:", auxSplit)
  //Por ejemplo regresar para las personas en este caso uno quiere regresarlo 
  // para las personas de la paz 
  /*const auxFilterT = [1,2,3,4,5].filter(num => percountry === 'LP')
  console.log("auxFilter:", auxFilter)*/
  // y con esto se separa en diferentes angulos 
  }

    
  // primero ejecuta lo que esta en el constructor en caso de angular 
  // en este caso 

  // La creacion de una funcion 
  // por ejemplo esta funcion para retornar: dentro de los parentesis
  // se crea lo que es el variable y su tipo de variable como en este caso String
  // hasta no es necesario la palabra function 
  // es muy importante darle el nombre correcto a la funcion 
  // En las empresas son muy importante colocar bien el codigo ya que 
  // son muy estrictos en cuestion de la elaboracion de ello
  // se puede colocar String) : any pero no es recomendable ya que no estara 
  // muy bien protegido lo que es el programa
  // las variables publicas se colocan en lo que es el html y las privadas es en losque es el codigo de ts
  private getName(name: string): string {     //es mejor colocar las funciones de modo camell
  return "hi" + name;
  }
  
  //funciones flecha , Arrow function//

  // /*Colocar las constantes */const getName = /*Funcion*/(name: String) => //retorna{return "hi" + name;}
  // Si la funcion flecha detona una sola linea de codigo ya se tiene que colocar en una sola linea de codigo 
  // entonces ya no es necesario colocar las lineas de codigo

  // colocandolo de esta manera (nada mas si es una sola linea de codigo)
  // const getName = (name: String) => "hi" + name 
  
  // otra caracteristica de la funcion flecha 
  // const getName = (name: String) => "hi" 
  // (si no tiene parametros de entrada puede escribirse asi)

  // const getName = (name:string, lasName:string) => lastName 
  // al tener dos parametros puede uno regresarlo de esta manera 

  // const getName = name => "hi" + name 
  // si la funcion flecha no tiene tipo lo dejamos de esta manera no son necesarios los 
  // parentesis 

  // const getName = num => num*2
  // tambien se puede regresar de esta manera
  
  // Un ejemplo de de codigo seria este: pero es mejor simplificarlo
  // de manera mas simplificada
  private mult(num) {
   return num;
  // al modificar lo que es las configuraciones "tsconfig.json" los codigos ya no me exigen
  // que tenga que implementar el tipo de la variable

  }
  // 
  constructor1() {
    //Operador Splice , puede considerarse como un eliminar 
    const A = ['a','b','c','d','e'];
    const auxSplice = A.splice(1,1) // sacar un elemento :(1,1) de la posicion 1 en este ejemplo sera b
    console.log('auxSplice:', auxSplice)
    // para mostrar en este ejemplo que se elimino se utilizan las constantes 


    // Operador Reduce 
    // en caso de que sea necesario buscar algo en especifico se utiliza lo que es el index
    const auxReduce = [1,2,3,4,5].reduce((prev, value, index) => {
      console.log(prev, value)
      return prev + value; 
    }, 0)
    console.log("auxReduce:", auxReduce)


    // JSON Operadores
    const auxJSON = {
      id : 1,
      name: 'JUAN',
      lastName: 'GUTIERREZ'
    };
    // ENTRIES, KEY, VALUES 
  // convierte los datos en array (entries)
    const auxentries = Object.entries(auxJSON)
    console.log("auxentries:", auxentries)

    // esta tomanto los valores key del json (id, name, lastname)
    const auxKeys = Object.keys(auxJSON)
    console.log("auxKeys:", auxKeys)
    
    const auxValues = Object.values(auxJSON)
    console.log("auxValues:", auxValues)
    
    //Tener valiables repetidas 
    //CONST
    //LET 
    
  // las constantes son fijas no se podra cambiar
  // el valor de la constante
    const a = 1
    console.log('CONST:', a)

    for(let i = 1; i<= 5; i++){
      console.log('INDEX:', i)
    }
    for(let i = 1; i<= 5; i++){
      console.log('INDEX:', i)
      
    }
    for(let i = 1; i<= 5; i++){
      console.log('INDEX:', i)
    }

    //Spread operator, rest operator 

    const b = [1,2,3,4,5,6]
    const c = [...b ,7,8,9,10]
    //esta copiando todo el spread de b y colocandolo en el c 
    // este copia todo lo que tiene el array o json (lo esparce)
    console.log("SPREAD:", c)

    this.getREST(1,2,  'hola')

    const person = {
      id: 1,
      name: 'JUAN',
      country: {
        idCountry: 1,
        cod: 'LP'
      }
    
    }

    //desestructuracion
   // const C = person.country 
    //const ID = person.id 
    const {country} = person;
    console.log('country:',country)

    const data = {
      0: {
        id: 1,
        name: 'Juan',
        age: 24
      },
      1:{
        id: 2,
        name: 'maria',
        age: 10
      }
    }
    //convertir a un array y obtener la suma de edades 
    const resp = Object.values(data).reduce((prev, value) => prev + value.age, 0)
    console.log("resp:", resp)

    // convertir a un array filtar las personas mayores a 10, mostrar solo los IDS
    // RESULTADO: [1]
    const mayores = Object.values(data).filter(p => p.age > 10).map(p => p.id)
    console.log("mayores:", mayores)
    

    // convertir a un array y obtener la suma de edades 
    // const resp = Object.values(data).reduce((prev, value) => {
    // if(value.age >20)
    // {return prev + value.age}
    // else {
    //   // return prev 
    // }    
    //}, 0)
    // console.log("resp:", resp)

   }
   //puede recibir n parametros 
   getREST(...params: any[]){
    console.log('REST:', params)
   }
  }
  