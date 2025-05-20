import { Injectable } from '@angular/core';
import plantilla from '../data/plantilla.json';
import { Personal } from './models/personal';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {


  empleados:Personal[]=plantilla;
 
  constructor() { }

  ngOnInit(): void {
  
  }

  getAll():Personal[]{
    return this.empleados;
  }

  getById(){}
  create(){}
  update(){}
  delete(){}

}
