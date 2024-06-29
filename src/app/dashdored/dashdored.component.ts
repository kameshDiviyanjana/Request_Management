import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { APicallerService } from '../apicaller.service';

@Component({
  selector: 'app-dashdored',
  templateUrl: './dashdored.component.html',
  styleUrls: ['./dashdored.component.css']
})
export class DashdoredComponent {

  serchdata : string = ''
  showCreateTaskForm: boolean = false;
  constructor(private router: Router,public servisurl:APicallerService){

  }
  @Output()
  passtheserchword : EventEmitter<string> = new EventEmitter<string>();
  
  passtheserchkeyword(){
     
    //console.log(this.serchdata)
   this.passtheserchword.emit(this.serchdata)
   //var p =this.servisurl.serchrecervetion(this.serchdata)
   //console.log("jjjjjjjjjjjjjjjjj",p)
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
