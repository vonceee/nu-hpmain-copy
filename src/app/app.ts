import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideButtons } from './components/side-buttons/side-buttons'; // Import component

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideButtons], // Add to imports
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('hytec_fe');
}
