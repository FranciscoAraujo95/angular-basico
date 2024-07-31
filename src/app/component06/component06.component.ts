import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-component06',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component06.component.html',
  styleUrl: './component06.component.css'
})
export class Component06Component {

  //Variable with a programming language (HTML, CSS, JS)
  linguagem: string = "HTML";

}
