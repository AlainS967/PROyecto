import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';  // Importar Router
import { DataBaseService } from 'src/app/services/data-base.service'; // Servicio para acceder a la base de datos

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CorreoPage implements OnInit {

  email: string = '';  // Variable para almacenar el correo ingresado
  password: string = '';  // Variable para almacenar la contraseña ingresada

  constructor(private router: Router, private bd: DataBaseService, private toastController: ToastController) { }

  ngOnInit() { }

  // Método para verificar si el correo y contraseña son correctos
  async verificarCorreo() {
    // Llamar al servicio para validar usuario
    const usuario = await this.bd.validarcorreo(this.email);

    if (usuario) {
      // Si el correo y contraseña son correctos, redirigir a la página de preguntas
      this.router.navigate(['/pregunta'], {
        state: { usuario }
      });
    } else {
      // Si el correo o la contraseña no son correctos, mostrar un mensaje de error
      const toast = await this.toastController.create({
        message: 'Correo o contraseña incorrectos',
        duration: 2000,
        color: 'danger',
      });
      toast.present();

      // Redirigir a la página de error (incorrecto)
      this.router.navigate(['/incorrecto']);
    }
  }

  // Volver a la página de ingreso si es necesario
  volver() {
    this.router.navigate(['/ingreso']);
  }
}
