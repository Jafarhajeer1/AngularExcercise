import { Component } from '@angular/core';
import { AccountComponent } from '../account/account.component';
import { ProfileComponent } from '../profile/profile.component';
import { HelpBoxComponent } from '../help-box/help-box.component';

@Component({
  selector: 'app-mainarea',
  imports: [AccountComponent, ProfileComponent, HelpBoxComponent],
  templateUrl: './mainarea.component.html',
  styleUrl: './mainarea.component.css'
})
export class MainareaComponent {

}
