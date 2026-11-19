import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallePlaneta } from './detalle-planeta';

describe('DetallePlaneta', () => {
  let component: DetallePlaneta;
  let fixture: ComponentFixture<DetallePlaneta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallePlaneta],
    }).compileComponents();

    fixture = TestBed.createComponent(DetallePlaneta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
