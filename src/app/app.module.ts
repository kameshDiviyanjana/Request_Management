import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routincofonet } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from  '@angular/common/http';
import { RecervationformComponent } from './homecoponet/recervationform/recervationform.component';
import { NavigathionComponent } from './navigathion/navigathion.component';
import { PackageaComponent } from './packagea/packagea.component';
import { PackageadataComponent } from './packageadata/packageadata.component';
import { DashdoredComponent } from './dashdored/dashdored.component';
import { ReservetionComponent } from './reservetion/reservetion.component';



@NgModule({
  declarations: [
    AppComponent,
    routincofonet,
    RecervationformComponent,
    NavigathionComponent,
    PackageaComponent,
    PackageadataComponent,
    DashdoredComponent,
    ReservetionComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
