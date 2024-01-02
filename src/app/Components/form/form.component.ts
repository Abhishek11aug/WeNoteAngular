import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private router: Router) {}
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
      this.router.navigate(['/Notes']);
      } else {
        alert("Wrong Credentials");
      }
    } catch (error) {
      alert("Something went Wrong. Pls. Try Again!!!");
    }
  }
}
