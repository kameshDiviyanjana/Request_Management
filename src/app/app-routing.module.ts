import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecoponetComponent } from './homecoponet/homecoponet.component';
import { LogingComponent } from './loging/loging.component';
import { RecervationformComponent } from './homecoponet/recervationform/recervationform.component';
import { PackageaComponent } from './packagea/packagea.component';
import { PackageadataComponent } from './packageadata/packageadata.component';
import { DashdoredComponent } from './dashdored/dashdored.component';
import { NavigathionComponent } from './navigathion/navigathion.component';

const routes: Routes = [
  {
    path : '',
    component : LogingComponent
  },
  {
     path : 'nav',
     component : NavigathionComponent,
     children :[
      {

        path : '',
        component : RecervationformComponent,
        
      },
      {
        path : 'package',
        component : PackageaComponent
      },
      {
        path : 'offerdata/:id', component : PackageadataComponent,
        
       
      },{
    
        path: 'dash',
        component:DashdoredComponent
      }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 
 }

 export const routincofonet = [
  HomecoponetComponent,LogingComponent
 ]


