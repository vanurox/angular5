import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isValid: boolean = false;
  phoneNumber: String = "8699643192";
  
  changeBg() {
    this.isValid = true;
  }

  newUser(user)
  {
    this.users.push(user);
  }

  deleteUser(id)
  {
    this.users.splice(id,1);
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
    }
  ];
  title = 'Nugen Services';
}
