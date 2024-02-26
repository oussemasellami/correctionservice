import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from '../models/appartements';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  apartmentUrl ='http://localhost:3000/appartement'
  apartmentUrls='/api/appartement'
  constructor( private http:HttpClient) { }

  getnumber(list:any,creteria:string,value:any){
    let n=0;
    for(let i in list){
      if(list[i][creteria]==value){
        n++
      }
    }
return n
  }


getappartment():Observable<Apartment[]>{
  return this.http.get<Apartment[]>(this.apartmentUrl)
}
addappartment(appartement:Apartment):Observable<Apartment[]>{
  return this.http.post<Apartment[]>(this.apartmentUrl,appartement)
}

updateappartement(appartement:Apartment, id:number):Observable<Apartment[]>{
  return this.http.put<Apartment[]>(this.apartmentUrls+'/'+id,appartement)
}

deleteappart(id:number):Observable<Apartment[]>{
  return this.http.delete<Apartment[]>(this.apartmentUrl+'/'+id)
}

}
