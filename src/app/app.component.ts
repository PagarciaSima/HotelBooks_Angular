import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopHeaderComponent } from "./components/commons/top-header/top-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HotelsBooks';
}
