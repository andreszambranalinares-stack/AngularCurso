import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetaProductos } from './tarjeta-productos';

describe('TarjetaProductos', () => {
  let component: TarjetaProductos;
  let fixture: ComponentFixture<TarjetaProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaProductos],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaProductos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
