import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from '../../empleados.service';
import { Personal } from '../../models/personal';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {

    trabajador: Personal = {
    id: 0,
    nombre: '',
    edad: 0,
    sueldo: 0,
    antiguedad: 0,
    foto: ''
  };

  mensajeExito: string = '';
  esFemenino: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private servicio: EmpleadosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      const encontrado = this.servicio.getById(id);
      if (encontrado) {
        this.trabajador = { ...encontrado };
      } else {
        this.mensajeExito = 'Empleado no encontrado';
      }
    });
  }

  actualizar(): void {
    this.servicio.update(this.trabajador);
    this.mensajeExito = 'Empleado actualizado correctamente';

    setTimeout(() => {
      this.mensajeExito = '';
      this.router.navigate(['/listar']);
    }, 3000);
  }

  asignarFotoAleatoria(): void {
    const genero = this.esFemenino ? 'women' : 'men';
    const numero = Math.floor(Math.random() * 100);
    this.trabajador.foto = `https://randomuser.me/api/portraits/${genero}/${numero}.jpg`;
  }

}
