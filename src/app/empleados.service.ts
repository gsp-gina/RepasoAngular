import { Injectable } from '@angular/core';
import plantilla from '../data/plantilla.json';
import { Personal } from './models/personal';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {


  empleados!:Personal[] ; 
  constructor() {   }

  getAll():Personal[]{
    const recuperaDatos: Personal[] = JSON.parse(localStorage.getItem('trabajadores') ?? '[]');
        
    if (recuperaDatos.length === 0) {
        this.empleados=plantilla;
    } 
    else{
        this.empleados=recuperaDatos;
    }
    return this.empleados;
  }

  getById(idEmp: number): Personal | null {
    const encontrado = this.empleados.find(emp => emp.id === idEmp);
    return encontrado || null;
} //fin metodo getById


  create(objeto: Personal): void {
  this.empleados.push(objeto); // Agrega al arreglo
  localStorage.setItem('trabajadores', JSON.stringify(this.empleados)); // Guarda en localStorage
  }//fin del metodo create

  
  
  delete(idEmp: number): void {
  const index = this.empleados.findIndex(emp => emp.id === idEmp);
  if (index !== -1) {
    this.empleados.splice(index, 1); // Elimina el objeto del arreglo
    localStorage.setItem('trabajadores', JSON.stringify(this.empleados)); // Actualiza el localStorage
  }
}  //fin del metodo  borrar

update(objeto: Personal): void {
  const index = this.empleados.findIndex(emp => emp.id === objeto.id);
  if (index !== -1) {
    this.empleados[index] = objeto; // Actualiza el objeto en el arreglo
    localStorage.setItem('trabajadores', JSON.stringify(this.empleados)); // Guarda en localStorage
  }
}

}//fin de la clase del servicio

