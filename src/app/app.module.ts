import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Componentes
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
// Modulos
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { LayoutAuthComponent } from './layout-auth/layout-auth.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent, LayoutAuthComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
