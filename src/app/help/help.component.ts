import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HelpComponent implements OnInit {
  @Output() addNewUser = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  addUser(username: any, description: any){
    console.log(username.value);
    let user = {
      username: username.value,
      description: description.value
    };
    this.addNewUser.emit(user);
  }

}
