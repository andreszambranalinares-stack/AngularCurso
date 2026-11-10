import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
})
export class AppResaltado {

  @Input() appResaltado= {color: 'green' }
  constructor(private elem: ElementRef<HTMLElement>){
    console.log(elem.nativeElement.tagName);

  }

  @HostBinding('style.backgroundColor') fondo = '';

  @HostListener('mouseenter') changeBackground() {
    this.fondo = this.appResaltado.color
    //this.fondo = 'green'  
    //this.elem.nativeElement.style.backgroundColor = 'green'
  }

  @HostListener('mouseleave') deleteBackground() {
  
    this.fondo = '';
    //this.fondo = ''
    //this.elem.nativeElement.style.backgroundColor = ''
  }



}

