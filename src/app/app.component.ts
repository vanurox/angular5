import { Component } from '@angular/core';
import { UserService } from "./myService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any=[];
  
  constructor(private userService: UserService){
    this.users = this.userService.getUsers();
  }

  private myInfo: any = [
    {
      firstName: "Varun",
      lastName: "Sharma",
      age: 27
    },
    {
      firstName: "Nugen",
      lastName: "Services",
      age: 7
    },
    {
      firstName: "Mohit",
      lastName: "Chabra",
      age: 37
    },
    {
      firstName: "Sandeep",
      lastName: "Kaur",
      age: 85
    }
  ];


  delUser(index){
    this.myInfo.splice(index,1);
  }


  isValid: boolean = false;
  phoneNumber: String = "8699643192";

  changeBg() {
    this.isValid = true;
  }

  newUser(user) {
    this.userService.newUser(user);
  }

  deleteUser(id) {
    this.userService.deleteUser(id);
  }

  
  title = 'Nugen Services';
}
