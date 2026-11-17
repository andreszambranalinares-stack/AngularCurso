import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AltaRapida } from './alta-rapida';

describe('AltaRapida', () => {
  let component: AltaRapida;
  let fixture: ComponentFixture<AltaRapida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaRapida],
    }).compileComponents();

    fixture = TestBed.createComponent(AltaRapida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
