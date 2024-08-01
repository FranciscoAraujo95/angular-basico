import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-component11',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './component11.component.html',
  styleUrl: './component11.component.css'
})
export class Component11Component {

  form = new FormGroup({
    name : new FormControl('', [Validators.required, Validators.minLength(3)]),
    age  : new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    city : new FormControl('', [Validators.required, Validators.minLength(3)])

  });

}
