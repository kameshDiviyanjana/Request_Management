import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { APicallerService } from '../apicaller.service';
import { NgForm } from '@angular/forms';
import { Task } from '../Componets/componets.task';
import { Jod } from '../Componets/componets.jods';

@Component({
  selector: 'app-homecoponet',
  templateUrl: './homecoponet.component.html',
  styleUrls: ['./homecoponet.component.css']
})
export class HomecoponetComponent  implements OnInit {


  formdata : Task = new Task()
  joddata : Jod = new Jod()
  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(public servisurl:APicallerService){}

  ngOnInit( ): void {
   this.refreshpage()
   
  }

  OnCloseForm(){
    this.CloseForm.emit(false);
  }

  refreshpage(){
    this.servisurl.hotelbookingdata()
  }
  OnFormSubmitted(dataform : NgForm){
    
    //  this.formdata = dataform.value
  //  // console.log(dataform.value)
  //  console.log(this.formdata)

   
  this.formdata = {
    id: '',
    Dateonly: dataform.value.Dateonly,
    Dateonlyend: dataform.value.Dateonlyend,
    Name: dataform.value.Name,
    Status: dataform.value.Status,
    location: dataform.value.location,
    packeage: dataform.value.packeage,
    phoneNumber: dataform.value.phoneNumber,
    priority: dataform.value.priority,
    addres : dataform.value.addres
  };

  console.log(this.formdata);
   
    this.servisurl.hotelrecevetionadd(this.formdata).subscribe({
      next:res=>{
        console.log(res)
        
        alert('suessfull')
      },
      error:err=>{
        console.log(err)
      }
    })
    this.OnCloseForm()
    this.refreshpage()
  }

  jobassinfsubnite(){

  }

  clickhcdd(){
    this.CloseForm.emit(false);
  }

  
   
}
