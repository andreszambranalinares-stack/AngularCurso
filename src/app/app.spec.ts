import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('Curso de Angular', () => {
  let fixture: ComponentFixture<App>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    router = TestBed.inject(Router);
  });

  async function abrir(ruta: string) {
    await router.navigateByUrl(ruta);
    await fixture.whenStable();
    fixture.detectChanges();
    return fixture.nativeElement as HTMLElement;
  }

  it('abre el selector desde el inicio y mantiene la comunicación padre-hijo', async () => {
    const pagina = await abrir('/');

    expect(router.url).toBe('/bloque-2/selector-cantidad');
    expect(pagina.querySelector('h1')?.textContent).toContain('Curso de Angular');
    expect(pagina.querySelector('a[aria-current="page"]')?.textContent).toContain(
      'Selector de cantidad',
    );

    const incrementar = pagina.querySelector('selector-cantidad button') as HTMLButtonElement;
    incrementar.click();
    fixture.detectChanges();
    expect(pagina.querySelector('[data-testid="cantidad-padre"]')?.textContent?.trim()).toBe('1');
  });

  it('abre el ejercicio 2.2 por su ruta y permite volver al selector desde el menú', async () => {
    const pagina = await abrir('/bloque-2/carril-b/ejercicio-2.2');

    expect(pagina.querySelector('app-ejercicio-resaltado')?.textContent).toContain('Hola');
    expect(pagina.querySelector('selector-cantidad')).toBeNull();
    expect(pagina.querySelector('a[aria-current="page"]')?.textContent).toContain('Ejercicio 2.2');

    const enlace = pagina.querySelector(
      'a[href="/bloque-2/selector-cantidad"]',
    ) as HTMLAnchorElement;
    enlace.click();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(router.url).toBe('/bloque-2/selector-cantidad');
    expect(pagina.querySelector('selector-cantidad')).not.toBeNull();
  });

  it('abre el primer ejercicio al entrar en el bloque 2', async () => {
    await abrir('/bloque-2');
    expect(router.url).toBe('/bloque-2/selector-cantidad');
  });

  it('redirige las rutas desconocidas a un ejercicio existente', async () => {
    await abrir('/bloque-2/no-existe');
    expect(router.url).toBe('/bloque-2/selector-cantidad');
  });
});
