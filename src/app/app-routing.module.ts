import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotesComponent} from "./Components/notes/notes.component";
import {loginFormComponent} from './Components/loginForm/form.component';
import {AboutComponent} from './Components/about/about.component';
const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'Login', component: loginFormComponent },
  { path: 'Notes', component: NotesComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
