import { TestBed } from '@angular/core/testing';

import { EmpleadoService } from './empleados.service';


describe('EmpleadosService', () => {
  let service: EmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
