import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  apiUrl = 'https://conduit.productionready.io/api/articles';

  constructor(private http: HttpClient) { }

  getArticleList() {
    return this.http.get(this.apiUrl);
  }
}
