import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData: any; 
  message: string = '';
  constructor() { this.registerData = {};}

  ngOnInit(): void {
  }

}
