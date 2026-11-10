import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'selector-cantidad',
  styleUrl: './selector-cantidad.css',
  templateUrl: './selector-cantidad.html',
})
export class SelectorCantidad {

  @Input() cantidadInicial = 1;
  @Input() maximo = 10;
  @Output() cantidadCambiada = new EventEmitter<number>()
  private cantidad = 0;


  incrementarCantidad(){
    if(this.cantidad < this.maximo){
      this.cantidad++
      this.cantidadCambiada.emit(this.cantidad)
    }
  } 

  decrementarCantidad(){
    if(this.cantidad > this.cantidadInicial){
      this.cantidad--
      this.cantidadCambiada.emit(this.cantidad)
    }
  }
}

