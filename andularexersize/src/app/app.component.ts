import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component'
import { MainareaComponent } from './mainarea/mainarea.component'

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, MainareaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'andularexersize';
}
