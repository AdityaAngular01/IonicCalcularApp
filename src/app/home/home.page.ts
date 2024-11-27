import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
  IonText,
  IonInput,
  IonLabel,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonLabel,
    IonInput,
    IonText,
    IonFooter,
    IonCol,
    IonRow,
    IonGrid,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class HomePage {
  inputValue: string = '';
  constructor() {}

  onButtonClick(value: string) {
    if (value === 'allclear') {
      this.inputValue = '';
      return;
    }
    if (value === 'back') {
      this.inputValue = this.inputValue.slice(0, -1);
      return;
    }
    if (value === '=') {
      try {
        // Evaluate the expression safely
        this.inputValue = eval(this.inputValue);
      } catch (e) {
        this.inputValue = 'Error'; // Handle invalid expressions
      }
      return;
    }
    this.inputValue += value;
  }
}
