import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from './Components/form/form.component';
import {NotesComponent} from "./Components/notes/notes.component";
const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'Notes', component: NotesComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
