import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    WhatsappComponent,
  ],
  exports: [
    NavComponent,
    FooterComponent,
    WhatsappComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
