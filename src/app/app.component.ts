import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListarEmpleadosComponent } from './componentes/listar-empleados/listar-empleados.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ListarEmpleadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'repasoAngular';
}
