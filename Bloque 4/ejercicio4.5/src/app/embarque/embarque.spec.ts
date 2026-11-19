import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Embarque } from './embarque';

describe('Embarque', () => {
  let component: Embarque;
  let fixture: ComponentFixture<Embarque>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Embarque],
    }).compileComponents();

    fixture = TestBed.createComponent(Embarque);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
