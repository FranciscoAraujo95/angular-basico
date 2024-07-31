import {Component} from '@angular/core';

@Component({
  selector: 'app-component03',
  standalone: true,
  imports: [],
  templateUrl: './component03.component.html',
  styleUrl: './component03.component.css'
})
export class Component03Component {

  //Variable of image
  imagem: string = '/dia.jpg';

  //Function to change the image
  alterarImagem() {
    if (this.imagem === '/dia.jpg') {
      this.imagem = '/noite.jpg';
    } else {
      this.imagem = '/dia.jpg';
    }
  }
}
