import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Asegúrate de importar IonicModule
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataBaseService } from '../../services/data-base.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule] // Asegúrate de importar IonicModule aquí también
})
export class PreguntaPage implements OnInit {
  correo: string = '';  // Para almacenar el correo del usuario
  respuestaSecreta: string = '';  // Para almacenar la respuesta secreta

  constructor(
    private router: Router,
    private dbService: DataBaseService,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async verificarRespuesta() {
    // Buscar usuario en la base de datos por el correo
    const usuario = await this.dbService.leerUsuario(this.correo);

    if (usuario) {
      // Verificar si la respuesta secreta es correcta
      if (usuario.respuestaSecreta === this.respuestaSecreta) {
        // Si es correcta, redirigir a la página de "correcto"
        this.router.navigate(['/correcto'], {
          state: {
            usuario: { password: usuario.password } // Asegúrate de pasar un objeto válido
          }
        });
        
      } else {
        // Si es incorrecta, mostrar un mensaje de error
        const toast = await this.toastController.create({
          message: 'Respuesta incorrecta.',
          duration: 2000,
          color: 'danger',
        });
        toast.present();
      }
    } else {
      // Si no se encuentra el usuario en la base de datos
      const toast = await this.toastController.create({
        message: 'El correo no está registrado.',
        duration: 2000,
        color: 'danger',
      });
      toast.present();
    }
  }
}
