import { Injectable } from '@angular/core';
import { AppGibli } from './app.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServisService {

  private giblifilmsurl = '/films/';
  constructor(private http: HttpClient) { }

  getgiblifilms(): Observable<AppGibli[]> {
    return this.http.get<AppGibli[]>(this.giblifilmsurl);
  }

  getgiblifilm(id:string): Observable<AppGibli>{
    const url = `${this.giblifilmsurl}/${id}`;
    return this.http.get<AppGibli>(url);
  }
}
