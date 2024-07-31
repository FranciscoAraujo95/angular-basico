import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-component07',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component07.component.html',
  styleUrl: './component07.component.css'
})
export class Component07Component {

  //Logic variable
  condition: boolean = false;

  //Lista de aprovados e reprovados
  lista: string[] = ["Aprovado", "Aprovado", "Reprovado"];
}
