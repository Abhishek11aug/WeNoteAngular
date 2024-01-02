import { Component, OnInit } from '@angular/core';
// import { DataService } from 'src/app/note-data.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  Notes: any;
  selectedNote:any= {};
  formVisibility:boolean = false;
  token = localStorage.getItem("Token")||"";

  async deleteForm(data:any){
    console.log(data)
    try {
      const response = await fetch(`https://we-note-backend.vercel.app/notes/deleteNote/${data}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Token:this.token
        },
      });
      if (!response.ok) {
        alert("Could not Interact with Database right now. Pls try after some time")
      }
        
    } catch (error) {
      alert("Something went Wrong. Pls. Try Again!!!")
    }
    this.fetchingNotes();

  }

  getId(element:any){
    this.formVisibility = !this.formVisibility;
    this.selectedNote = element;
    console.log(this.selectedNote._id)
  }

  async updateForm(data:any){
    console.log(data);
    try {
      const response = await fetch(`https://we-note-backend.vercel.app/notes/updateNote/${this.selectedNote._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Token": this.token
        },
        body: JSON.stringify(this.selectedNote),
      });
      if (!response.ok) {
        alert("Could not Interact with Database right now. Pls try after some time")
      }
        
    } catch (error) {
      alert("Something went Wrong. Pls. Try Again!!!")
    }
    this.fetchingNotes();

    this.formVisibility = !this.formVisibility;
  }

  closeForm(){
    this.formVisibility = !this.formVisibility;
  }

  async fetchingNotes(){
    const token = localStorage.getItem("Token") || "";
    try {
      const response = await fetch(`https://we-note-backend.vercel.app/notes/getNote`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Token": token,
        },
      });
  
      const jsonData = await response.json();
      this.Notes = jsonData;
      console.log(this.Notes);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }
   
  ngOnInit() {
      this.fetchingNotes();
  }
  
}