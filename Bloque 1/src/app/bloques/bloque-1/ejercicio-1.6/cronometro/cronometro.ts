import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cronometro',
  styleUrl: './cronometro.css',
  templateUrl: './cronometro.html',
})
export class Cronometro implements OnInit, OnDestroy {
  segundos = 0;
  private intervalo: any;
  ngOnInit(): void {
    this.intervalo = setInterval(() => this.segundos++, 1000);
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }
}
