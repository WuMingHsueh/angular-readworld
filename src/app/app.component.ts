import { ArticleService } from './article.service';
import { Component, OnInit } from '@angular/core';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  logoFont = 'conduit';
  smallTitle = 'A place to share your <u>knowledge.</u>';

  articleList$: Observable<any[]>;
  keyword: string = '';

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleList$ = this.articleService.getArticleList();
  }

  searchArticle(keyword: string) {
    this.keyword = keyword;
  }

}
