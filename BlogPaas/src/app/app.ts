import { Component } from '@angular/core';
import { Stronaglowna } from './stronaglowna/stronaglowna';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'blogPaaS';
}
