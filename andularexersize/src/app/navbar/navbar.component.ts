import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  username:string = "ahmad";
  status:boolean = false;
  credit:number = 1;
  divclassname:string = "inactive";
}
