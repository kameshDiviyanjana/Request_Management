import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { packegaedatarective } from '../services/package.service';
@Component({
  selector: 'app-packagea',
  templateUrl: './packagea.component.html',
  styleUrls: ['./packagea.component.css']
})
export class PackageaComponent {

  constructor(private router: Router,public packegaes :packegaedatarective ) {}
  
  datass  : any
  goToAbout(id : number) {
    this.router.navigate([`nav/offerdata/${id}`]);
  }

  rective(){
    this.datass = this.packegaes.package
  }
}
