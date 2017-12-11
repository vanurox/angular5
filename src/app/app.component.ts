import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
    this.users.push(user);
  }

  deleteUser(id) {
    this.users.splice(id, 1);
  }

  users = [
    {
      username: "Nugen",
      description: "We provide the quality."
    },
    {
      username: "Varun",
      description: "CTO."
    },
    {
      username: "Kamal",
      description: "Learner."
    },
    {
      username: "Sandeep",
      description: "Learner."
    },
    {
      username: "Extra",
      description: "Working"
    },
    {
      username: "New One",
      description: "Done"
    }
  ];
  title = 'Nugen Services';
}
