import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Componentes
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BardaComponent } from './components/barda/barda.component';
import { HeaderAuthComponent } from './components/header-auth/header-auth.component';

@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    BardaComponent,
    HeaderAuthComponent,
  ],
  exports: [
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    BardaComponent,
    HeaderAuthComponent,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
