import { Component, OnInit } from '@angular/core';
//import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-account',
  imports: [ NgStyle ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit{
  myStyles:Record<string,string>={}

  setupStyles(){
    this.myStyles = {
      'background-color':'#666666',
      'color':'#ffffff'
    }
  }

  ngOnInit(): void {
    this.setupStyles();
  }
}
