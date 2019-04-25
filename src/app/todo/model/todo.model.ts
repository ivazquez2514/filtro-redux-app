import { text } from '@angular/core/src/render3';

export class Todo {

  public id = Math.random();
  public completado = false;


  constructor( public texto: string ) {
    texto = texto.charAt(0).toUpperCase() + texto.slice(1);
  }

}
