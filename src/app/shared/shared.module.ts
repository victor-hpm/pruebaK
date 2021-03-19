import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Componentes
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BardaComponent } from './components/barda/barda.component';

@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    BardaComponent,
  ],
  exports: [MenuComponent, FooterComponent, HeaderComponent, BardaComponent],
  imports: [CommonModule],
})
export class SharedModule {}
