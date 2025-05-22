import { Component } from '@angular/core';
import { EmpleadosService } from '../../empleados.service';
import { Personal } from '../../models/personal';

@Component({
  selector: 'app-eliminar',
  imports: [],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {

   empleados: Personal[] = [];

    mensajeEliminado = '';
    timeoutId: any;

  constructor(private servicio: EmpleadosService) {}

  ngOnInit() {
    this.cargarEmpleados();
  }

  cargarEmpleados() {
    this.empleados = this.servicio.getAll();
  }

  eliminarEmpleado(id: number) {
    this.servicio.delete(id);
    this.mensajeEliminado = `Empleado con ID ${id} eliminado.`;
    
     // Cancela cualquier temporizador anterior
    clearTimeout(this.timeoutId);

    // Inicia un nuevo temporizador de 3 segundos
    this.timeoutId = setTimeout(() => {
      this.mensajeEliminado = ''; // Borra el mensaje
     
    }, 2000);

     this.cargarEmpleados(); // recarga la lista después de eliminar  
}
}

