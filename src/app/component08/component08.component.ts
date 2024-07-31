import {Component} from '@angular/core';

@Component({
  selector: 'app-component08',
  standalone: true,
  imports: [],
  templateUrl: './component08.component.html',
  styleUrl: './component08.component.css'
})
export class Component08Component {

  //Average variable
  average: number = 8;

  //Vector
  names: string[] = ["Khal Drogo", "Arya Stark", "Viserys Targaryen", "Sir Arthur Dayne"];

}
