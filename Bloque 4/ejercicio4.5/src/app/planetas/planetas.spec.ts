import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Planetas } from './planetas';

describe('Planetas', () => {
  let component: Planetas;
  let fixture: ComponentFixture<Planetas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Planetas],
    }).compileComponents();

    fixture = TestBed.createComponent(Planetas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
