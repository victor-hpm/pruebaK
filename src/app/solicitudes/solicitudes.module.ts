import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modulos
import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { NuevaComponent } from './components/nueva/nueva.component';
// Componentes

@NgModule({
  declarations: [SolicitudesComponent, NuevaComponent],
  imports: [CommonModule, SolicitudesRoutingModule],
})
export class SolicitudesModule {}
