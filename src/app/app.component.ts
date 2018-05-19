import { ArticleService } from './article.service';
import { Component, OnInit } from '@angular/core';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  logoFont = 'conduit';
  smallTitle = 'A place to share your <u>knowledge.</u>';

  articleList: Array<any>;
  keyword: string = '';

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.subscribeArticleList();
  }

  subscribeArticleList() {
    this.articleService.getArticleList()
      .subscribe(result => this.articleList = result.articles);
  }

  searchArticle(keyword: string) {
    this.keyword = keyword;
  }

}
