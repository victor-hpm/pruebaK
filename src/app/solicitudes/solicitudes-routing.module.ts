import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componentes
import { NuevaComponent } from './components/nueva/nueva.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'nueva',
        component: NuevaComponent,
      },
      {
        path: 'solicitudes',
        component: SolicitudesComponent,
      },
      {
        path: '',
        redirectTo: 'solicitudes',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudesRoutingModule {}
