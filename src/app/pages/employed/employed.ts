import { Component, effect, signal, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';

import { SignUpFormComponent } from '../../component/sign-up-form/sign-up-form';
import { SignUpModify } from '../../component/sign-up-modify/sign-up-modify';
import { EmployedService } from '../../service/empoyed-service';
import { EmployedInterface } from '../../models/employed.interface';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-employed',
  standalone: true,
  imports: [HttpClientModule, SignUpFormComponent, SignUpModify],
  templateUrl: './employed.html',
  styleUrls: ['./employed.css'],
})
export class EmployedComponent {
  private dialog = inject(Dialog);
  private empleadoService = inject(EmployedService);

  // ✅ Signal que contiene la lista de empleados
  empleados = signal<EmployedInterface[]>([]);

  constructor() {
    this.loadEmpleados();
  }

  loadEmpleados() {
    this.empleadoService.getEmpleados().subscribe({
      next: (data) => this.empleados.set(data),
      error: (err) => console.error('Error al cargar empleados', err),
    });
  }

  openModalCreate() {
    const ref = this.dialog.open(SignUpFormComponent, {
      height: '400px',
      width: '600px',
      panelClass: 'my-dialog',
      disableClose: true,
    });

    ref.closed.subscribe(() => this.loadEmpleados());
  }

  openModalModify(empleado: EmployedInterface) {
    const ref = this.dialog.open(SignUpModify, {
      height: '400px',
      width: '600px',
      panelClass: 'my-dialog',
      disableClose: true,
      data: empleado,
    });

    ref.closed.subscribe(() => this.loadEmpleados());
  }

  deleteEmpleado(id: number) {
    this.empleadoService.deleteEmpleado(id).subscribe({
      next: () => this.loadEmpleados(),
      error: (err) => console.error('Error al eliminar', err),
    });
  }
}
