import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './users/users.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { UserService } from "./myService";
import { AppRoutingModule } from './/app-routing.module';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './posts/posts.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HelpComponent,
    MenuComponent,
    UsersComponent,
    MyInfoComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
