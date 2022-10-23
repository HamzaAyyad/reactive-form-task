import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  perms:string[] = ['read - write', 'read', 'none'];
  
  //VIEW VARIABLES
  rolesCheck:boolean = true;
  rolesDisable:boolean = false;
  userCheck:boolean = true;
  userDisable:boolean = false;
  regionCheck:boolean = true;
  regionDisable:boolean = false;
  tasksCheck:boolean = true;
  tasksDisable:boolean = false;
  progressCheck:boolean = true;
  progressDisable:boolean = false;
  revisionCheck:boolean = true;
  revisionDisable:boolean = false;
  syncCheck:boolean = true;
  syncDisable:boolean = false;
  trackingCheck:boolean = true;
  trackingDisable:boolean = false;
  passwordCheck:boolean = true;
  passwordDisable:boolean = false;
  pageCheck:boolean = true;
  pageDisable:boolean = false;

  permissionsForm: FormGroup;

  ngOnInit() {
    this.permissionsForm = new FormGroup({})
  }

  //VIEW CHECKING
  onRadioSelect(event, permissionType:string) {
    let value = event.target.value

    switch (permissionType){
      case 'Roles': {this.rolesCheck = this.hideCheck(value); this.rolesDisable = this.disableCheck(value);break};
      case 'User': {this.userCheck = this.hideCheck(value); this.userDisable = this.disableCheck(value);break};
      case 'Region': {this.regionCheck = this.hideCheck(value); this.regionDisable = this.disableCheck(value);break};
      case 'Tasks': {this.tasksCheck = this.hideCheck(value); this.tasksDisable = this.disableCheck(value);break};
      case 'Progress': {this.progressCheck = this.hideCheck(value); this.progressDisable = this.disableCheck(value);break};
      case 'Revision': {this.revisionCheck = this.hideCheck(value); this.revisionDisable = this.disableCheck(value);break};
      case 'Sync': {this.syncCheck = this.hideCheck(value); this.syncDisable = this.disableCheck(value);break};
      case 'Tracking': {this.trackingCheck = this.hideCheck(value); this.trackingDisable = this.disableCheck(value);break};
      case 'Password': {this.passwordCheck = this.hideCheck(value); this.passwordDisable = this.disableCheck(value);break};
      case 'Page': {this.pageCheck = this.hideCheck(value); this.pageDisable = this.disableCheck(value);break};
    }
  }

  hideCheck(inputCheck: string):boolean {
    if (inputCheck === 'read - write' || inputCheck === 'read') {
      return false;
    } else {
      return true;
    }
  }

  disableCheck(inputDisable : string):boolean {
    if (inputDisable === 'read') {
      return true;
    } else {
      return false;
    }
  }

  }
