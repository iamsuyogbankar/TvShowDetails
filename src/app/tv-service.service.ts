import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TvShows } from './tvShows';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvServiceService{
  private apiUrl:string = "http://api.tvmaze.com/schedule";
  

  constructor(private httpClient: HttpClient) { }
  
  getTvDetail(): Observable<TvShows[]>{
    return this.httpClient.get<TvShows[]>(this.apiUrl);   
  }

  getId(){
    // this.apiUrl.array.forEach(element => {
      
    // });
  } 
}
