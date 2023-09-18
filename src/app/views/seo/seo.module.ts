import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UrlToSeoArticleComponent } from './url-to-seo-article/url-to-seo-article.component';
import { KeywordToSeoArticleComponent } from './keyword-to-seo-article/keyword-to-seo-article.component';

@NgModule({
    declarations: [
      UrlToSeoArticleComponent,
      KeywordToSeoArticleComponent
    ],
    imports: [
      CommonModule,
    ]
})
export class SeoModule {}