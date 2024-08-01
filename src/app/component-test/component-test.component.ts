import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-component-test',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './component-test.component.html',
  styleUrl: './component-test.component.css'
})
export class ComponentTestComponent {

  //Variables
  name: string;
  age: number = null;

  condition: boolean = false;

  names: string[] = ["Francisco", "Ticiana", "Luizin", "Mina"];
  linguagem: string;

  form = new FormGroup({
    nome : new FormControl(''),
    idade : new FormControl(null),
    cidade : new FormControl('')
  })

  //Functions
  message() {
    alert("Hello World!!")
  }

  acao() {
    if (this.condition === false) {
      this.condition = true;
    } else {
      this.condition = false;
    }
  }

}
