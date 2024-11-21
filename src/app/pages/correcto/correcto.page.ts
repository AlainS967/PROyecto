import { Component } from '@angular/core';
import { NavController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-correcto',
  templateUrl: './correcto.page.html',
  styleUrls: ['./correcto.page.scss'],
  standalone: true,
    imports: [IonicModule, CommonModule, FormsModule], // IMPORTANTE: IonicModule debe estar aquí
  })
  export class CorrectoPage {
    usuario: any;

    constructor(private router: Router) {
      const navigation = this.router.getCurrentNavigation();
      const state = navigation?.extras.state;
    
      if (state && state['usuario']) {
        this.usuario = state['usuario'];
        console.log('Usuario:', this.usuario); // Verificar si se recibe la contraseña
      } else {
        console.warn('No se recibieron datos del usuario.');
        this.usuario = { password: 'No disponible' }; // Valor por defecto
      }
    }
    

    volver() {
      this.router.navigate(['/ingreso']);
    }
  }
