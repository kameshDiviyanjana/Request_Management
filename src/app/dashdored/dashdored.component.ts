import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashdored',
  templateUrl: './dashdored.component.html',
  styleUrls: ['./dashdored.component.css']
})
export class DashdoredComponent {

  serchdata : string = ''
  showCreateTaskForm: boolean = false;
  constructor(private router: Router){

  }
  @Output()
  passtheserchword : EventEmitter<string> = new EventEmitter<string>();
  
  passtheserchkeyword(){
     
    console.log(this.serchdata)
    this.passtheserchword.emit(this.serchdata)
  }

  OpenCreateTaskForm(){
    this.showCreateTaskForm = !this.showCreateTaskForm;
       
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
   

    // this.rective()
    
  }

  navigathepakegae(){
    this.router.navigate(['nav/package']);
  }
}
