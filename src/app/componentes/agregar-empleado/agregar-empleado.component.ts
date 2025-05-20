import { Component } from '@angular/core';
import { Personal } from '../../models/personal';
import { EmpleadosService } from '../../empleados.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-empleado',
  imports: [FormsModule],
  templateUrl: './agregar-empleado.component.html',
  styleUrl: './agregar-empleado.component.css'
})
export class AgregarEmpleadoComponent {

   mensajeExito:string='';
   
   trabajador: Personal = {
    id: 0,
    nombre: '',
    edad: 0,
    sueldo: 0,
    antiguedad: 0,
    foto: ''
  };

  constructor(private empleadosService:EmpleadosService){

  }

  // Esta propiedad NO forma parte del double binding del objeto trabajador
  esFemenino: boolean = false;

  asignarFotoAleatoria() {
    let genero;
    const id = Math.floor(Math.random() * 100);
    // Cambia el endpoint según el sexo
    if (this.esFemenino){
       genero = 'women'  ;
    }else{
       genero =   'men';
    }
    this.trabajador.foto = `https://randomuser.me/api/portraits/${genero}/${id}.jpg`;
  }

  guardar() {
     
    this.empleadosService.create(this.trabajador);
    this.limpiar();
    console.log('Trabajador:', this.trabajador);
    console.log('¿Es femenino?:', this.esFemenino);

  }

  limpiar():void{
     this.trabajador = {
    id: 0,
    nombre: '',
    edad: 0,
    sueldo: 0,
    antiguedad: 0,
    foto: ''
  };
  this.esFemenino = false;

  // Reiniciar el formulario
   

  // Mostrar mensaje de éxito
  this.mensajeExito = '¡Formulario enviado exitosamente!';

  // Ocultar después de 3 segundos
  setTimeout(() => {
    this.mensajeExito = '';
  }, 3000);
  }

}
