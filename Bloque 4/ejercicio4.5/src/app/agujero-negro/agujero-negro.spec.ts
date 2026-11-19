import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgujeroNegro } from './agujero-negro';

describe('AgujeroNegro', () => {
  let component: AgujeroNegro;
  let fixture: ComponentFixture<AgujeroNegro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgujeroNegro],
    }).compileComponents();

    fixture = TestBed.createComponent(AgujeroNegro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
