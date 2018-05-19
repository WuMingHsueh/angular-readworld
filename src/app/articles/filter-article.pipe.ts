import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArticle'
})
export class FilterArticlePipe implements PipeTransform {

  transform(articleList: Array<any>, keyword?: string): Array<any> {
    return (keyword) ? articleList.filter(article => {
      if (article.title.search(keyword) != -1 || article.description.search(keyword) != -1) {
        return Object.assign({}, article);
      }
    }) : articleList;
  }

}
