import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployedComponent } from "./pages/employed/employed";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // ⚠️ asegúrate de marcarlo como standalone
  imports: [RouterOutlet, EmployedComponent, HttpClientModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ✅ plural
})
export class App {
  protected readonly title = signal('panel_administrativo');
}
