import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: ""
})
export class HomeComponent {
  active:boolean = true;
  Token:string = localStorage.getItem('Token')||"";
  
  isLogin:boolean = !(this.Token==="");
  
  logOut(){
    localStorage.removeItem('Token');
    window.location.replace('/');
  }
}

