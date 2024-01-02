import { Component } from '@angular/core';
import { windowToggle } from 'rxjs';
// import { HomeComponent } from './Components/home/home.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "";
  Notes:any;
  setNotes(Notes:any){
    alert("Called");
    console.log(Notes);
    this.Notes = Notes;
    window.location.replace("/Notes");
  }
}
