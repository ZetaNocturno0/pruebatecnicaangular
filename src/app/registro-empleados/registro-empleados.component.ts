import { Component } from '@angular/core';
import { Empleado } from '../models/empleado';

@Component({
  selector: 'app-registro-empleados',
  templateUrl: './registro-empleados.component.html',
  styleUrls: ['./registro-empleados.component.css']
})
export class RegistroEmpleadosComponent {
  empleado: Empleado = new Empleado();

  constructor() {}

  submitForm() {
    console.log('Empleado registrado:', this.empleado);
    this.empleado = new Empleado();
  }
}

