import { TestBed } from '@angular/core/testing';
import { NotiicacionesService } from './notiicaciones-service';

describe('NotiicacionesService', () => {
  let service: NotiicacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotiicacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
