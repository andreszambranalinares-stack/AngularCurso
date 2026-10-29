import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectorCantidad } from './selector-cantidad';

describe('SelectorCantidad', () => {
  let component: SelectorCantidad;
  let fixture: ComponentFixture<SelectorCantidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorCantidad],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectorCantidad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
