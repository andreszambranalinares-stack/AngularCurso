import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppResaltado } from './app-resaltado';

@Component({
  imports: [AppResaltado],
  template: `
    <p [appResaltado]="{ color: 'red' }">Color configurado</p>
    <p [appResaltado]="{ color: 'green' }">Color verde</p>
  `,
})
class EjemploResaltado {}

describe('AppResaltado', () => {
  async function crearEjemplo() {
    await TestBed.configureTestingModule({
      imports: [EjemploResaltado],
    }).compileComponents();
    const fixture = TestBed.createComponent(EjemploResaltado);
    await fixture.whenStable();
    return fixture;
  }

  it('aplica el color configurado al entrar y lo elimina al salir', async () => {
    const fixture = await crearEjemplo();
    const paragraph = fixture.nativeElement.querySelector('p') as HTMLParagraphElement;

    paragraph.dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();
    expect(paragraph.style.backgroundColor).toBe('red');

    paragraph.dispatchEvent(new MouseEvent('mouseleave'));
    fixture.detectChanges();
    expect(paragraph.style.backgroundColor).toBe('');
  });

  it('aplica verde al segundo ejemplo de la directiva', async () => {
    const fixture = await crearEjemplo();
    const paragraph = fixture.nativeElement.querySelectorAll('p')[1] as HTMLParagraphElement;

    paragraph.dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();
    expect(paragraph.style.backgroundColor).toBe('green');
  });
});
