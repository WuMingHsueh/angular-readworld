import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  apiUrl = 'https://conduit.productionready.io/api/articles';

  constructor(private http: HttpClient) { }

  getArticleList(): Observable<any[]> {
    return this.http.get(this.apiUrl)
      .pipe(
        map((response: any) => response.articles),
    );
    ;
  }
}
