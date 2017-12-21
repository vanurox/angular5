import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HelpComponent } from './help/help.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: ContactComponent },
  { path: 'users', component: UsersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'help', component: HelpComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  
}) 

export class AppRoutingModule { 
  
}
