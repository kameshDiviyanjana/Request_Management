import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from './modul/hotel_details';
import { environment } from 'src/environments/environment.development';
import { NgForm } from '@angular/forms';
import { Task } from './Componets/componets.task';
import { Observable, catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class APicallerService {

  datalist :Hotel[] = []
  constructor( private httpsdata: HttpClient) { }
  private baseUrl: string =  environment.appbseurl + '/api/Hotel';
    
   hotelbookingdata(){

    return  this.httpsdata.get(this.baseUrl+'')
      
     
   }
  
   hoteldatadelete(id: string) :Observable<any> {

    const url = `${this.baseUrl}/${id}`;
    return this.httpsdata.delete(url,{ responseType: 'text' })

   }
   hotelrecevationUpdate(){

   }
   findrecervtionbyid(){


   }

   hotelrecevetionadd(datats : Task){
    console.log('ddddd', datats)
   return this.httpsdata.post( this.baseUrl,
      datats
      )
   }

//    serchrecervetion(serch :string)  :Observable<Hotel[]>{

// return this.httpsdata.get<Hotel[]>(this.baseUrl+`/serch/${serch}`)
//    }

   serchrecervetion(searchQuery: string): Observable<Hotel[]> {
    return this.httpsdata.get<Hotel[]>(`${this.baseUrl}/serch/${searchQuery}`).pipe(
      catchError(error => {
        console.error('Error fetching data:', error);
        return [];
      })
    );
  }
}
