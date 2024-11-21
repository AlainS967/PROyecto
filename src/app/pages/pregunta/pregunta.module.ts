import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Asegúrate de importar IonicModule
import { FormsModule } from '@angular/forms';
import { PreguntaPage } from './pregunta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // Asegúrate de importar IonicModule
  ],
  declarations: [PreguntaPage]
})
export class PreguntaPageModule {}
