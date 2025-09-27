import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployedInterface } from '../models/employed.interface';


@Injectable({
  providedIn: 'root'
})
export class EmployedService {

  private apiUrl = 'https://localhost:7180/api/Empleados';



  constructor(private http: HttpClient) {}

  // Obtener todos los empleados
  getEmpleados(): Observable<EmployedInterface[]> {
    return this.http.get<EmployedInterface[]>(this.apiUrl);
  }

  // Obtener un empleado por ID
  getEmpleado(id: number): Observable<EmployedInterface> {
    return this.http.get<EmployedInterface>(`${this.apiUrl}/${id}`);
  }

  // Crear empleado
  addEmpleado(empleado: EmployedInterface): Observable<EmployedInterface> {
    return this.http.post<EmployedInterface>(this.apiUrl, empleado);
  }

  // Actualizar empleado
  updateEmpleado(id: number, empleado: EmployedInterface): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, empleado);
  }

  // Eliminar empleado
  deleteEmpleado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
