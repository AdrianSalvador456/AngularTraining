import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

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

  }
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
  
  //funciones flecha//

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
}
