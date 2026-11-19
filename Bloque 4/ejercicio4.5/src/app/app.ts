import { Component} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AgujeroNegro } from './agujero-negro/agujero-negro';

@Component({
  imports: [RouterOutlet, RouterLink, AgujeroNegro],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
}
