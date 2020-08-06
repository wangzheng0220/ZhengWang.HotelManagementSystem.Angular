import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http: HttpClient) { }

  getAll(path: string): Observable<any[]> {
    
    return this.http.get(`${environment.apiUrl}${path}`)
      .pipe(
        map((resp) => resp as any[]) //http resp will get JSON array
        );
  }

  getOne(path:string, id: number): Observable<any> {
    console.log(`${environment.apiUrl}${path}`+'/'+id)
    return this.http.get(`${environment.apiUrl}${path}`+'/'+id).pipe(
      map(resp => resp as any)
    );
  }
  
  create(path:string, resource: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}${path}`,resource)
    .pipe( map( response => response));
  }
}
