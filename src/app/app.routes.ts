import { Routes } from '@angular/router';
import { ListarEmpleadosComponent } from './componentes/listar-empleados/listar-empleados.component';
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { ConsultaComponent } from './componentes/consulta/consulta.component';

export const routes: Routes = [
  { path: 'listar', component: ListarEmpleadosComponent },
  { path: 'agregar', component: AgregarEmpleadoComponent },
  { path: 'consulta/:id', component: ConsultaComponent },
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: '**', redirectTo: 'listar' } // para rutas inválidas


];
