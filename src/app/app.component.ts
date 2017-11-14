import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
