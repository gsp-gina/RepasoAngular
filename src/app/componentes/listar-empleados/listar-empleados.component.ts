import { Component } from '@angular/core';
import { EmpleadosService } from '../../empleados.service';
import { Personal } from '../../models/personal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-empleados',
  imports: [CommonModule],
  templateUrl: './listar-empleados.component.html',
  styleUrl: './listar-empleados.component.css'
})
export class ListarEmpleadosComponent {
  
  misEmpleados!:Personal[];

  constructor(private empleadosService:EmpleadosService){

  }

  ngOnInit(): void {
     this.misEmpleados=this.empleadosService.getAll();
     console.log(this.empleadosService);
    
  }
}
