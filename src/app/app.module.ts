import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
import { NewsService } from './newsService';


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
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService, PostService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
