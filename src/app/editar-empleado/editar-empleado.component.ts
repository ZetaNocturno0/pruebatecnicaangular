import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado.model'; 

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  empleado: Empleado = new Empleado(); 

  constructor() { }

  ngOnInit(): void {
    
  }
  
  actualizarEmpleado(): void {
    
  }
}



