import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { packegaedatarective } from '../services/package.service';
@Component({
  selector: 'app-packageadata',
  templateUrl: './packageadata.component.html',
  styleUrls: ['./packageadata.component.css']
})
export class PackageadataComponent  implements OnInit{
  // id: number = 0;
  // findpakage : any
  // constructor(private router: Router,private pakages : packegaedatarective,private route: ActivatedRoute) {}
 

  //  ngOnInit(): void {
  //    this.id =  this.route.snapshot.params['id']
  //    console.log(this.id)
  //    this.findthepackage(this.id)
  // }

  // showCreateTaskForm: boolean = false;



  // OpenCreateTaskForm(){
  //   this.showCreateTaskForm = !this.showCreateTaskForm;
       
  // }


  // goToAbout() {
  //   this.router.navigate(['/offerdata']);
  // }

  // CloseCreateTaskForm(){
  //   this.showCreateTaskForm = false;
   

 
    
  // }

  // findthepackage(id:number){
  //   this.findpakage = this.pakages.filterPackageById(id)
  // }

  id: number = 0;
  findpakage: any;
  showCreateTaskForm: boolean = false;

  constructor(private router: Router, private packages: packegaedatarective, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.findpakage = this.packages.filterPackageById(this.id);
    // console.log(this.id);
    // this.findThePackage(this.id);
  }

  OpenCreateTaskForm(): void {
    this.showCreateTaskForm = !this.showCreateTaskForm;
  }

  CloseCreateTaskForm(): void {
    this.showCreateTaskForm = false;
  }

  findThePackage(id: number): void {
    console.log("ddd",id)
    this.findpakage = this.packages.filterPackageById(id);
  }

  goToAbout(): void {
    this.router.navigate(['/offerdata']);
  }
}
