// import { Component, OnInit } from '@angular/core';
// import { APicallerService } from 'src/app/apicaller.service';
// import { Hotel } from 'src/app/modul/hotel_details';




// @Component({
//   selector: 'app-recervationform',
//   templateUrl: './recervationform.component.html',
//   styleUrls: ['./recervationform.component.css']
// })
// export class RecervationformComponent implements OnInit {

//   showCreateTaskForm: boolean = false;
//    datarecerverio : Hotel[] = []
//    //ff: Subscription[] = []; // Array to hold subscriptions
//   ngOnInit( ): void {

//     this.rective()
//     // console.log( this.servisurl.hotelbookingdata())
//   }
  
//   constructor(public servisurl:APicallerService){}
//   OpenCreateTaskForm(){
//     this.showCreateTaskForm = !this.showCreateTaskForm;
       
//   }
   
//    rective(){

//     this.servisurl.hotelbookingdata().subscribe({
//       next : res=>{
//         console.log(this.datarecerverio)
//          this.datarecerverio = res as Hotel[];
        
//       },
//       error : error=>{
//         console.log(error)
//       }
//      })
//    }
  
//   CloseCreateTaskForm(){
//     // this.showCreateTaskForm = false;
//     // this.rective()
    
//   }

//   // async findtherequest(datas : string){

//   //    this.servisurl.serchrecervetion(datas).subscribe({
//   //     next : res= >{
      
//   //       this.datarecerverio = [];
//   //       this.datarecerverio = res as Hotel[];
//   //       //console.log("ggggggggggggggg",this.datalist)
//   //       console.log("ggggggggggggggg",this.datarecerverio)
//   //     },
//   //     error : error=>{
//   //       console.log(error)
//   //     }
//   //    })
//   //      //  console.log(" rewcribwtu ",datas)
//   // }

//   // async findtherequest(datas: string): Promise<void> {
//   //   this.servisurl.serchrecervetion(datas).subscribe({
//   //     next: (res: Hotel[]) => {
//   //       this.datarecerverio = res;
//   //       console.log("Search result:", this.datarecerverio);
//   //     },
//   //     error: (error) => {
//   //       console.log(error);
//   //     }
//   //   });
//   // }

//   // async findtherequest(datas: string): Promise<void> {
//   //   try {
//   //     const res = await this.servisurl.serchrecervetion(datas).toPromise();
//   //     this.datarecerverio = res;
//   //     console.log("Search result:", this.datarecerverio);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // }

//   async findtherequest(datas: string): Promise<void> {
//     this.datarecerverio = []
//     try {
//       const res = await this.servisurl.serchrecervetion(datas).toPromise();
//       if (res !== undefined) {
//         console.log("works")
//         this.datarecerverio = res; // Assuming res is of type Hotel[] | undefined
//         console.log("Search result:", this.datarecerverio);
//       } else {
//         this.datarecerverio = []; // Handle undefined case gracefully
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }
  

//    deletedata(deleteid : string){

//     // this.servisurl.hoteldatadelete(deleteid)
//     // this.rective()

//     this.servisurl.hoteldatadelete(deleteid).subscribe({
//       next: (res) => {
//         console.log("Delete response: ", res);
//         this.rective(); // Re-fetch data after deletion
//         alert("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
//       },
//       error: (err) => {
//         console.error("Error deleting data: ", err);
//       }
//     });

//    // this.rective();
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { APicallerService } from 'src/app/apicaller.service';
// import { Hotel } from 'src/app/modul/hotel_details';

// @Component({
//   selector: 'app-recervationform',
//   templateUrl: './recervationform.component.html',
//   styleUrls: ['./recervationform.component.css']
// })
// export class RecervationformComponent implements OnInit {

//   showCreateTaskForm: boolean = false;
//   datarecerverio: Hotel[] = [];

//   constructor(public servisurl: APicallerService) { }

//   ngOnInit(): void {
//     this.rective();
//   }

//   OpenCreateTaskForm(): void {
//     this.showCreateTaskForm = !this.showCreateTaskForm;
//   }

//   rective(): void {
//     this.servisurl.hotelbookingdata().subscribe({
//       next: res => {
//         this.datarecerverio = res as Hotel[];
//         console.log(this.datarecerverio);
//       },
//       error: error => {
//         console.error(error);
//       }
//     });
//   }

//   async findtherequest(datas: string): Promise<void> {
//     try {
//       const res = await this.servisurl.serchrecervetion(datas).toPromise();
//       if (res) {
//         this.datarecerverio = res;
//       } else {
//         this.datarecerverio = [];
//       }
//       console.log("Search result:", this.datarecerverio);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   deletedata(deleteid: string): void {
//     this.servisurl.hoteldatadelete(deleteid).subscribe({
//       next: res => {
//         console.log("Delete response: ", res);
//         this.rective(); // Re-fetch data after deletion
//         alert("Deletion successful");
//       },
//       error: err => {
//         console.error("Error deleting data: ", err);
//       }
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { APicallerService } from 'src/app/apicaller.service';
import { Hotel } from 'src/app/modul/hotel_details';

@Component({
  selector: 'app-recervationform',
  templateUrl: './recervationform.component.html',
  styleUrls: ['./recervationform.component.css']
})
export class RecervationformComponent implements OnInit {

  showCreateTaskForm: boolean = false;
  datarecerverio: Hotel[] = [];

  constructor(public servisurl: APicallerService) { }

  ngOnInit(): void {
    this.rective();
  }

  OpenCreateTaskForm(): void {
    this.showCreateTaskForm = !this.showCreateTaskForm;
  }

  // rective(): void {
  //   this.servisurl.hotelbookingdata().subscribe({
  //     next: (res: Hotel[]) => {
  //       if (Array.isArray(res)) {
  //         this.datarecerverio = res;
  //       } else {
  //         console.error('Response is not an array:', res);
  //         this.datarecerverio = [];
  //       }
  //       console.log(this.datarecerverio);
  //     },
  //     error: error => {
  //       console.error(error);
  //       this.datarecerverio = [];
  //     }
  //   });
  // }
    rective(): void {
    this.servisurl.hotelbookingdata().subscribe({
      next: res => {
        this.datarecerverio = res as Hotel[];
        console.log(this.datarecerverio);
      },
      error: error => {
        console.error(error);
      }
    });
  }

  // async findtherequest(datas: string): Promise<void> {
  //   this.datarecerverio = [];
  //   try {
  //     const res = await this.servisurl.serchrecervetion(datas).toPromise();
  //     if (Array.isArray(res)) {
  //       this.datarecerverio = res;
  //     } else {
  //       console.error('Search response is not an array:', res);
  //       this.datarecerverio = [];
  //     }
  //     console.log("Search result:", this.datarecerverio);
  //   } catch (error) {
  //     console.error(error);
  //     this.datarecerverio = [];
  //   }
  // }
  // async findtherequest(datas: string): Promise<void> {
  //   this.datarecerverio = [];
  //   try {
  //     const res = await this.servisurl.serchrecervetion(datas).toPromise();
  //     this.datarecerverio = res ? [res] : [];
  //     console.log("Search result:", this.datarecerverio);
  //   } catch (error) {
  //     console.error(error);
  //     this.datarecerverio = [];
  //   }
  // }

  // async findtherequest(datas: string): Promise<void> {
  //   this.datarecerverio = [];
  //   try {
  //     const res = await this.servisurl.serchrecervetion(datas).toPromise();
  //     this.datarecerverio = Array.isArray(res) ? res : [res];
  //     console.log("Search result:", this.datarecerverio);
  //   } catch (error) {
  //     console.error(error);
  //     this.datarecerverio = [];
  //   }
  // }

  async findtherequest(datas: string): Promise<void> {
    this.datarecerverio = [];
    try {
      const res = await this.servisurl.serchrecervetion(datas).toPromise();
      if (res) {
        this.datarecerverio = Array.isArray(res) ? res as Hotel[] : [res as Hotel];
      }
      console.log("Search result:", this.datarecerverio);
    } catch (error) {
      console.error(error);
      this.datarecerverio = [];
    }
  }

  deletedata(deleteid: string): void {
    this.servisurl.hoteldatadelete(deleteid).subscribe({
      next: res => {
        console.log("Delete response: ", res);
        this.rective(); // Re-fetch data after deletion
        alert("Deletion successful");
      },
      error: err => {
        console.error("Error deleting data: ", err);
      }
    });
  }
}

