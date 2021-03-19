import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modulos
import { AuthRoutingModule } from './auth-routing.module';
// Componentes
import { ForgotComponent } from './components/forgot/forgot.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
  declarations: [ForgotComponent, LoginComponent, RegistroComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
