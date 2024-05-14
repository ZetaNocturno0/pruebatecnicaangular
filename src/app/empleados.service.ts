import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Empleado } from './models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = 'http://localhost:8000/api/empleados'; 

  constructor(private http: HttpClient) { }

  // Método para obtener todos los empleados
  obtenerEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Método para crear un nuevo empleado
  crearEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.apiUrl, empleado).pipe(
      catchError(this.handleError)
    );
  }

  // Método para actualizar un empleado existente
  actualizarEmpleado(id: number, empleado: Empleado): Observable<Empleado> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Empleado>(url, empleado).pipe(
      catchError(this.handleError)
    );
  }

  // Método para eliminar un empleado
  eliminarEmpleado(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Función para manejar errores
  private handleError(error: any): Observable<never> {
    console.error('Ocurrió un error:', error);
    return throwError('Error al realizar la solicitud. Por favor, inténtalo de nuevo más tarde.');
  }
}

