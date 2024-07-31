import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Component01Component} from "./component01/component01.component";
import {Component02Component} from "./component02/component02.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Component01Component, Component02Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basico';
}
