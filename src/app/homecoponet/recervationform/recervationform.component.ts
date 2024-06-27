import { Component, OnInit } from '@angular/core';
import { APicallerService } from 'src/app/apicaller.service';




@Component({
  selector: 'app-recervationform',
  templateUrl: './recervationform.component.html',
  styleUrls: ['./recervationform.component.css']
})
export class RecervationformComponent implements OnInit {

  showCreateTaskForm: boolean = false;

  ngOnInit( ): void {

    this.rective()
    // console.log( this.servisurl.hotelbookingdata())
  }
  
  constructor(public servisurl:APicallerService){}
  OpenCreateTaskForm(){
    this.showCreateTaskForm = !this.showCreateTaskForm;
       
  }

   rective(){

    this.servisurl.hotelbookingdata()
   }
  
  CloseCreateTaskForm(){
    // this.showCreateTaskForm = false;
    // this.rective()
    
  }

  async findtherequest(datas : string){

         console.log(" rewcribwtu ",datas)
  }

   deletedata(deleteid : string){

    // this.servisurl.hoteldatadelete(deleteid)
    // this.rective()

    this.servisurl.hoteldatadelete(deleteid).subscribe({
      next: (res) => {
        console.log("Delete response: ", res);
        this.rective(); // Re-fetch data after deletion
        alert("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
      },
      error: (err) => {
        console.error("Error deleting data: ", err);
      }
    });

   // this.rective();
  }
}
