import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Destination } from '../Model/destinationModel';
import { Login } from '../Model/loginModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private _http:HttpClient){}

  postDestination(destinationParam:Destination):Observable<any>{
    return this._http.post("https://localhost:7129/api/Destination",destinationParam,{responseType:'json'})
  }

  getDestination():Observable<any>{
    return this._http.get("https://localhost:7129/api/Destination",{responseType:'json'})
  }

  getDestinationById(id:number):Observable<any>{
    return this._http.get("https://localhost:7129/api/Destination/"+id,{responseType:'json'})

  }

  updateDestination(id:number,destination:Destination):Observable<any>{
    return this._http.put("https://localhost:7129/api/Destination/"+id,destination,{responseType:'json'})

  }

  deleteDestination(id:number):Observable<any>{
    return this._http.delete("https://localhost:7129/api/Destination/"+id,{responseType:'json'});
  }

  doLogIn(credential:Login):Observable<any>{
    return this._http.post("https://localhost:7129/api/Authentication",credential,{responseType:'json'})
  }
} 

