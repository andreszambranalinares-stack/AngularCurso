import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanelAcciones } from './panel-acciones';

describe('PanelAcciones', () => {
  let component: PanelAcciones;
  let fixture: ComponentFixture<PanelAcciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelAcciones],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelAcciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
