import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // @Input() users: any;
  // @Output() deleteUserByIndex = new EventEmitter();
  private userFormGroup: FormGroup;

  constructor(fb: FormBuilder) {
    this.userFormGroup = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      username: ['By Default',  Validators.required ]
    });
   }


   showForm()
   {
     console.log(this.userFormGroup.controls);
     if(this.userFormGroup.valid){
       console.log("yes");
     }
   }

  ngOnInit() {
    
  }

  deleteUser(id: Number){
    this.deleteUserByIndex.emit(id);
  }

}