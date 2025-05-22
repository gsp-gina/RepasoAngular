import { Routes } from '@angular/router';
import { ListarEmpleadosComponent } from './componentes/listar-empleados/listar-empleados.component';
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';

export const routes: Routes = [
  { path: 'listar', component: ListarEmpleadosComponent },
  { path: 'agregar', component: AgregarEmpleadoComponent },
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: '**', redirectTo: 'listar' } // para rutas inválidas


];
