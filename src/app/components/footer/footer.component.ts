import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { IonFooter, IonToolbar, IonSegment, IonSegmentButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { gridOutline, homeOutline, pencilOutline, schoolOutline } from 'ionicons/icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [
      CommonModule    // CGV-Permite usar directivas comunes de Angular
    , FormsModule     // CGV-Permite usar formularios 
    , TranslateModule // CGV-Permite usar pipe 'translate'
    , IonFooter, IonToolbar, IonSegment,IonSegmentButton, IonIcon
  ]
})
export class FooterComponent {

  selectedButton = 'welcome'
  @Output() footerClick = new EventEmitter<string>();

  constructor() {
    addIcons({ homeOutline,schoolOutline,pencilOutline,gridOutline })
   }

   segmentedChange($event: any){
    this.footerClick.emit(this.selectedButton);
   }
}
