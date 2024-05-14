import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado.model'; // Importa el modelo de empleado
import { EmpleadoService } from '../services/empleado.service'; // Importa el servicio para obtener los datos de los empleados

@Component({
  selector: 'app-consulta-empleados',
  templateUrl: './consulta-empleados.component.html',
  styleUrls: ['./consulta-empleados.component.css']
})
export class ConsultaEmpleadosComponent implements OnInit {
  empleados: Empleado[] = [];
  filtroNombre: string = '';
  cargando: boolean = false;
  error: string = '';

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(): void {
    this.cargando = true;
    this.empleadoService.obtenerEmpleados()
      .subscribe(
        empleados => {
          this.empleados = empleados;
          this.cargando = false;
        },
        error => {
          console.error('Error al obtener los empleados: ', error);
          this.error = 'Error al cargar los empleados. Por favor, inténtalo de nuevo más tarde.';
          this.cargando = false;
        }
      );
  }

  filtrar(): void {
    if (this.filtroNombre.trim() !== '') {
      this.empleados = this.empleados.filter(empleado =>
        empleado.primerNombre.toLowerCase().includes(this.filtroNombre.toLowerCase())
      );
    } else {
      this.obtenerEmpleados();
    }
  }

  limpiarFiltro(): void {
    this.filtroNombre = '';
    this.obtenerEmpleados();
  }

  eliminarEmpleado(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este empleado?')) {
      this.empleadoService.eliminarEmpleado(id)
        .subscribe(
          () => {
            this.obtenerEmpleados();
          },
          error => {
            console.error('Error al eliminar el empleado: ', error);
            // Manejo de errores al eliminar el empleado
          }
        );
    }
  }
}

