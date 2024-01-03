import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class loginFormComponent { // Note: Corrected the class name to follow Angular conventions
  constructor(private router: Router) {}
  
  isLogin: boolean = true;
  
  setLogin() {
    this.isLogin = !this.isLogin;
  }

  async getLogin(data: any) {
    try {
      const response = await fetch(`https://we-note-backend.vercel.app/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (res.success) {
        localStorage.setItem("Token", res.msg);
        alert("Login Successfully");
        // this.router.navigate(['/Notes']);
        window.location.replace('/Notes');
      } else {
        alert("Wrong Credentials");
      }
    } catch (error) {
      alert("Something went Wrong. Pls. Try Again!!!");
    }
  }

  async getRegistered(data: any) {
    try {
      const response = await fetch(`https://we-note-backend.vercel.app/auth/signUp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (res.success) {
        localStorage.setItem("Token", res.msg);
        alert("Registration Successfully");
        this.router.navigate(['/Notes']);
      } else {
        alert("Wrong Credentials");
      }
    } catch (error) {
      alert("Something went Wrong. Pls. Try Again!!!");
    }
  }
}
