import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Router } from '@angular/router'; // ✅ الصحيح
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url="http://localhost:8080/category"
  constructor(private http :HttpClient,private routrt:Router) { }

  AddCategor(postCategory:any):Observable<any>{
    return this.http.post(this.url, postCategory)
  }

  AfficherCategory():Observable<any>{
    return this.http.get(this.url)
  }

  AffficherParidcategory(id:String):Observable<any>{
    return this.http.get(`${this.url}/${id}`)
  }

  supprimercategory(id:any):Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
  }
}
