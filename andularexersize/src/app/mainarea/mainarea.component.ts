import { Component } from '@angular/core';
import { AccountComponent } from '../account/account.component';
import { ProfileComponent } from '../profile/profile.component';
import { HelpBoxComponent } from '../help-box/help-box.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-mainarea',
  imports: [AccountComponent, ProfileComponent, HelpBoxComponent, NgIf, NgFor],
  templateUrl: './mainarea.component.html',
  styleUrl: './mainarea.component.css'
})
export class MainareaComponent {
  hasAccount = true;
  students = ['mahmoud', 'shayma', 'roaa', 'saif'];
}
