import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() users: any;
  @Output() deleteUserByIndex = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteUser(id: Number){
    this.deleteUserByIndex.emit(id);
  }

}