import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-component05',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component05.component.html',
  styleUrl: './component05.component.css'
})
export class Component05Component {

  // Vector of names
  names: string[] = ["John Snow", "Daenerys Targaryen", "Eddard Stark", "Tyrion Lannister"];

}
