import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './users/users.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { UserService } from "./myService";

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HelpComponent,
    MenuComponent,
    UsersComponent,
    MyInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
