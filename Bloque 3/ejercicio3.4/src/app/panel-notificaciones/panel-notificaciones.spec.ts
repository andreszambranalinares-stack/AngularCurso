import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanelNotificaciones } from './panel-notificaciones';

describe('PanelNotificaciones', () => {
  let component: PanelNotificaciones;
  let fixture: ComponentFixture<PanelNotificaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelNotificaciones],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelNotificaciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
