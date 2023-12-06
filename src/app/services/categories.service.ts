import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  //url: any = 'http://localhost:8080/v1/categories';
  url: any = 'books-apirest-backend-env-1.eba-pwcxpnyt.us-east-1.elasticbeanstalk.com/v1/categories';

  constructor(private http: HttpClient) {}

  getCategories() {
    const headers = new HttpHeaders({
      authorization: 'Basic ' + btoa("thirdUser" + ':' + "hola.123")
    });
    return this.http.get(this.url, {headers: headers});
  }
}
