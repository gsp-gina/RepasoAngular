import { Routes } from '@angular/router';
import { ListarEmpleadosComponent } from './componentes/listar-empleados/listar-empleados.component';
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { ConsultaComponent } from './componentes/consulta/consulta.component';
import { EliminarComponent } from './componentes/eliminar/eliminar.component';
import { ActualizarComponent } from './componentes/actualizar/actualizar.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

export const routes: Routes = [
  { path: 'listar', component: ListarEmpleadosComponent },
  { path: 'agregar', component: AgregarEmpleadoComponent },
  { path: 'consulta/:id', component: ConsultaComponent },
  { path: 'eliminar', component: EliminarComponent },
  { path: 'contacto', component: ContactoComponent  },
  { path: 'actualizar', component: ActualizarComponent },
  { path: 'editar/:id', component: EditarComponent },



  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: '**', redirectTo: 'listar' } // para rutas inválidas


];
