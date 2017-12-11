import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyInfoComponent implements OnInit {
  @Input() userInfo;
  @Output() deleteUserByIndex = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteUser(index) {
    this.deleteUserByIndex.emit(index);
  }

}
