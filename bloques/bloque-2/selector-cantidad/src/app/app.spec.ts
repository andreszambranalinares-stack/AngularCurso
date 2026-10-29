import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('Selector de cantidad · Componente padre', () => {
  it('muestra la cantidad emitida por el componente hijo', async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const pagina = fixture.nativeElement as HTMLElement;

    expect(pagina.querySelector('[data-testid="cantidad-padre"]')?.textContent?.trim()).toBe('0');

    const incrementar = pagina.querySelector('selector-cantidad button') as HTMLButtonElement;
    incrementar.click();
    fixture.detectChanges();

    expect(pagina.querySelector('[data-testid="cantidad-padre"]')?.textContent?.trim()).toBe('1');
    expect(pagina.querySelector('selector-cantidad p')?.textContent?.trim()).toBe('1');
  });
});
