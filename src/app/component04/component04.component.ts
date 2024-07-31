import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-component04',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './component04.component.html',
  styleUrl: './component04.component.css'
})
export class Component04Component {

  //Variable to show or to hide the square
  exibir: boolean = false;

  //Function to show or to hide the square
  acao() {
    if (this.exibir) {
      this.exibir = false;
    } else {
      this.exibir = true;
    }
  }

}
