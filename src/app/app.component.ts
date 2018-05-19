import { ArticleService } from './article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  logoFont = 'conduit';
  smallTitle = 'A place to share your <u>knowledge.</u>';

  articleList: Array<any>;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleList = this.articleService.getArticleList();
  }

  searchArticle(keyword: string) {
    this.articleList = (keyword != '') ? this.articleService.filterArticle(keyword) : this.articleService.getArticleList();
  }

}
