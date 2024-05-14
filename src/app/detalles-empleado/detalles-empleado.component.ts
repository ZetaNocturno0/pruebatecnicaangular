import { Component, Input } from '@angular/core';
import { Empleado } from '../models/empleado.model'; 

@Component({
  selector: 'app-detalles-empleado',
  templateUrl: './detalles-empleado.component.html',
  styleUrls: ['./detalles-empleado.component.css']
})
export class DetallesEmpleadoComponent {
  @Input() empleado: Empleado = new Empleado(); // Inicializando la propiedad empleado

  constructor() { }
}
