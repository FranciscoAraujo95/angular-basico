import {Component} from '@angular/core';

@Component({
  selector: 'app-component02',
  standalone: true,
  imports: [],
  templateUrl: './component02.component.html',
  styleUrl: './component02.component.css'
})
export class Component02Component {

  //Function to print a message
  message() {
    alert("Hello World!")
  }

}
