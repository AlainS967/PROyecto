import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incorrecto',
  templateUrl: './incorrecto.page.html',
  styleUrls: ['./incorrecto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IncorrectoPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  // Volver a la página de ingreso si es necesario
  volver() {
    this.router.navigate(['/ingreso']);
  }
}
